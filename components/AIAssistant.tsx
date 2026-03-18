"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Bot, User, Zap, Minimize2, Loader2, ChevronDown } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What is LENR and how does it work?",
  "How can I invest in New Fire Energy?",
  "What makes your technology different from fusion?",
  "What is your current COP and how was it measured?",
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setHasUnread(false);
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Show assistant bubble after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasUnread(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    // Add placeholder for assistant response
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "" },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistantText = "";

      if (!reader) throw new Error("No reader");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6).trim();
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                assistantText += parsed.text;
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = {
                    role: "assistant",
                    content: assistantText,
                  };
                  return updated;
                });
              }
            } catch {
              // Ignore JSON parse errors
            }
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content:
            "I apologize — I encountered an issue processing your request. Please try again or reach out directly at info@newfireenergy.com.",
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setHasUnread(false);
  };

  return (
    <>
      {/* Floating Button */}
      {(!isOpen || isMinimized) && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-plasma-500 to-teal-500 flex items-center justify-center shadow-xl shadow-plasma-500/40 group-hover:shadow-plasma-400/60 transition-all duration-300 group-hover:scale-105">
              <Bot className="w-7 h-7 text-white" />
            </div>
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-fire-400 rounded-full border-2 border-navy-900 animate-pulse" />
            )}
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-navy-800 border border-white/10 rounded-xl text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-xl">
              <span className="gradient-text font-semibold">Ask NOVA</span> — Your LENR AI Guide
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-navy-800" />
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-24px)] flex flex-col shadow-2xl shadow-black/50 rounded-2xl overflow-hidden border border-white/[0.08]">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-800 to-navy-700 px-5 py-4 flex items-center gap-3 border-b border-white/[0.06]">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-plasma-400 to-teal-500 flex items-center justify-center shadow-lg shadow-plasma-400/30">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-teal-400 rounded-full border-2 border-navy-800" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold text-sm flex items-center gap-2">
                NOVA
                <span className="px-1.5 py-0.5 rounded-md bg-plasma-500/20 text-plasma-300 text-[10px] font-medium">AI</span>
              </div>
              <div className="text-white/40 text-xs">New Fire Energy Assistant</div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Minimize"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 h-[420px] overflow-y-auto chat-scroll bg-navy-900 p-4 space-y-4">
            {/* Welcome message */}
            {messages.length === 0 && (
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-plasma-400 to-teal-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/[0.06] rounded-2xl rounded-tl-sm p-4 text-sm text-white/80 leading-relaxed">
                      Hello! I&apos;m <strong className="text-plasma-400">NOVA</strong>, New Fire Energy&apos;s AI assistant.
                      <br /><br />
                      I can answer questions about{" "}
                      <span className="text-teal-400">LENR technology</span>,{" "}
                      <span className="text-fire-300">investment opportunities</span>, our team, and the science behind the next energy revolution.
                      <br /><br />
                      What would you like to know?
                    </div>
                  </div>
                </div>

                {/* Suggested questions */}
                <div className="pl-10">
                  <p className="text-white/30 text-xs mb-2">Suggested questions:</p>
                  <div className="flex flex-col gap-2">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-left text-xs px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-plasma-400/30 hover:bg-plasma-500/10 text-white/60 hover:text-plasma-300 transition-all duration-200"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Message history */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                    message.role === "user"
                      ? "bg-plasma-500/30 border border-plasma-400/30"
                      : "bg-gradient-to-br from-plasma-400 to-teal-500"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="w-3.5 h-3.5 text-plasma-300" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>

                {/* Bubble */}
                <div
                  className={`flex-1 max-w-[85%] ${
                    message.role === "user" ? "items-end" : "items-start"
                  } flex flex-col`}
                >
                  <div
                    className={`rounded-2xl p-3.5 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-plasma-500/20 border border-plasma-400/20 text-white rounded-tr-sm"
                        : "bg-white/[0.06] text-white/85 rounded-tl-sm"
                    }`}
                  >
                    {message.content === "" && message.role === "assistant" ? (
                      <div className="flex items-center gap-1.5 py-1">
                        <div className="w-2 h-2 rounded-full bg-plasma-400 typing-dot" />
                        <div className="w-2 h-2 rounded-full bg-plasma-400 typing-dot" />
                        <div className="w-2 h-2 rounded-full bg-plasma-400 typing-dot" />
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">
                        {message.content}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="bg-navy-800 border-t border-white/[0.06] p-3">
            <form onSubmit={handleSubmit} className="flex gap-2 items-end">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about LENR, investment, technology..."
                disabled={isLoading}
                rows={1}
                className="flex-1 bg-white/[0.05] border border-white/[0.09] focus:border-plasma-400/40 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-all duration-200 resize-none min-h-[44px] max-h-[120px] disabled:opacity-50"
                style={{ height: "44px" }}
                onInput={(e) => {
                  const t = e.currentTarget;
                  t.style.height = "44px";
                  t.style.height = Math.min(t.scrollHeight, 120) + "px";
                }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-xl bg-plasma-500 hover:bg-plasma-400 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 shrink-0"
                aria-label="Send"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                ) : (
                  <Send className="w-4 h-4 text-white" />
                )}
              </button>
            </form>
            <div className="flex items-center justify-between mt-2 px-1">
              <p className="text-white/20 text-[10px]">
                Powered by Claude · Not financial advice
              </p>
              <div className="flex items-center gap-1 text-white/20 text-[10px]">
                <Zap className="w-2.5 h-2.5" />
                New Fire Energy
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Minimized state */}
      {isOpen && isMinimized && (
        <button
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-6 right-6 z-50 bg-navy-800 border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl shadow-black/40 hover:border-plasma-400/30 transition-all duration-200 group"
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-plasma-400 to-teal-500 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="text-left">
            <div className="text-white text-xs font-semibold">NOVA — AI Assistant</div>
            <div className="text-white/40 text-[10px]">Click to expand</div>
          </div>
          <ChevronDown className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
        </button>
      )}
    </>
  );
}
