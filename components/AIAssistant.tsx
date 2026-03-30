"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Bot, User, Zap, Minimize2, Loader2, ChevronDown, Mic, MicOff, Volume2, VolumeX } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What is LENR and how does it work?",
  "How can I invest in New Fire Energy?",
  "What scientific institutions have validated LENR?",
  "What is the minimum investment?",
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  // Voice state
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isSupported, setIsSupported] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Check browser support
  useEffect(() => {
    const hasSpeechRecognition = "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
    const hasSpeechSynthesis = "speechSynthesis" in window;
    setIsSupported(hasSpeechRecognition && hasSpeechSynthesis);
    if (hasSpeechSynthesis) synthRef.current = window.speechSynthesis;
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen && !isMinimized) scrollToBottom();
  }, [messages, isOpen, isMinimized, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setHasUnread(false);
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    const timer = setTimeout(() => setHasUnread(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Speak text using browser TTS
  const speak = useCallback((text: string) => {
    if (!voiceEnabled || !synthRef.current) return;
    synthRef.current.cancel();
    // Strip markdown-style formatting for cleaner speech
    const clean = text.replace(/\*\*/g, "").replace(/\*/g, "").replace(/#{1,6}\s/g, "").replace(/\n/g, " ");
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 0.9;
    // Try to use a natural-sounding voice
    const voices = synthRef.current.getVoices();
    const preferred = voices.find(v =>
      v.name.includes("Samantha") || v.name.includes("Google US English") ||
      v.name.includes("Microsoft Aria") || v.name.includes("Karen") || (v.lang === "en-US" && v.localService)
    );
    if (preferred) utterance.voice = preferred;
    synthRef.current.speak(utterance);
  }, [voiceEnabled]);

  // Start voice recognition
  const startListening = useCallback(() => {
    if (!isSupported) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) return;

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      // Auto-send after voice input
      setTimeout(() => sendMessage(transcript), 300);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [isSupported]); // eslint-disable-line react-hooks/exhaustive-deps

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    // Stop any ongoing speech
    synthRef.current?.cancel();

    const userMessage: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) throw new Error(`HTTP error ${response.status}`);

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
                  updated[updated.length - 1] = { role: "assistant", content: assistantText };
                  return updated;
                });
              }
            } catch { /* ignore */ }
          }
        }
      }

      // Speak the completed response
      if (assistantText) speak(assistantText);

    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "I encountered an issue. Please try again or contact us at contact@newfireenergy.com.",
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
        <button onClick={handleOpen} className="fixed bottom-6 right-6 z-50 group" aria-label="Open AI Assistant">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-plasma-500 to-teal-500 flex items-center justify-center shadow-xl shadow-plasma-500/40 group-hover:shadow-plasma-400/60 transition-all duration-300 group-hover:scale-105">
              <Bot className="w-7 h-7 text-white" />
            </div>
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-fire-400 rounded-full border-2 border-navy-900 animate-pulse" />
            )}
            <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-navy-800 border border-white/10 rounded-xl text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-xl">
              <span className="gradient-text font-semibold">Ask NOVA</span> — Voice or Text
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-navy-800" />
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="fixed bottom-6 right-6 z-50 w-[390px] max-w-[calc(100vw-24px)] flex flex-col shadow-2xl shadow-black/50 rounded-2xl overflow-hidden border border-white/[0.08]">

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
                {isSupported && (
                  <span className="px-1.5 py-0.5 rounded-md bg-teal-500/20 text-teal-300 text-[10px] font-medium flex items-center gap-1">
                    <Mic className="w-2.5 h-2.5" /> Voice
                  </span>
                )}
              </div>
              <div className="text-white/40 text-xs">New Fire Energy Assistant</div>
            </div>
            <div className="flex items-center gap-1">
              {/* Voice output toggle */}
              {isSupported && (
                <button
                  onClick={() => { setVoiceEnabled(!voiceEnabled); synthRef.current?.cancel(); }}
                  className="p-1.5 rounded-lg transition-all duration-200 text-white/40 hover:text-white hover:bg-white/10"
                  title={voiceEnabled ? "Mute voice responses" : "Enable voice responses"}
                >
                  {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
              )}
              <button onClick={() => setIsMinimized(true)} className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200">
                <Minimize2 className="w-4 h-4" />
              </button>
              <button onClick={() => { setIsOpen(false); synthRef.current?.cancel(); }} className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 h-[400px] overflow-y-auto chat-scroll bg-navy-900 p-4 space-y-4">
            {messages.length === 0 && (
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-plasma-400 to-teal-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/[0.06] rounded-2xl rounded-tl-sm p-4 text-sm text-white/80 leading-relaxed">
                      Hello! I&apos;m <strong className="text-plasma-400">NOVA</strong>, New Fire Energy&apos;s AI assistant.
                      I can answer questions about LENR technology, our investment structure, and the science.
                      {isSupported && (
                        <span className="block mt-2 text-teal-400 text-xs">
                          🎤 Use the microphone to ask by voice — I&apos;ll respond in text and audio.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
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

            {messages.map((message, index) => (
              <div key={index} className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  message.role === "user" ? "bg-plasma-500/30 border border-plasma-400/30" : "bg-gradient-to-br from-plasma-400 to-teal-500"
                }`}>
                  {message.role === "user" ? <User className="w-3.5 h-3.5 text-plasma-300" /> : <Bot className="w-4 h-4 text-white" />}
                </div>
                <div className={`flex-1 max-w-[85%] ${message.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                  <div className={`rounded-2xl p-3.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-plasma-500/20 border border-plasma-400/20 text-white rounded-tr-sm"
                      : "bg-white/[0.06] text-white/85 rounded-tl-sm"
                  }`}>
                    {message.content === "" && message.role === "assistant" ? (
                      <div className="flex items-center gap-1.5 py-1">
                        <div className="w-2 h-2 rounded-full bg-plasma-400 typing-dot" />
                        <div className="w-2 h-2 rounded-full bg-plasma-400 typing-dot" />
                        <div className="w-2 h-2 rounded-full bg-plasma-400 typing-dot" />
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">{message.content}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="bg-navy-800 border-t border-white/[0.06] p-3">
            {isListening && (
              <div className="flex items-center gap-2 mb-2 px-3 py-2 rounded-xl bg-teal-500/10 border border-teal-400/20">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-teal-300 text-xs font-medium">Listening... speak now</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex gap-2 items-end">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isListening ? "Listening..." : "Ask about LENR, investment, technology..."}
                disabled={isLoading || isListening}
                rows={1}
                className="flex-1 bg-white/[0.05] border border-white/[0.09] focus:border-plasma-400/40 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-all duration-200 resize-none min-h-[44px] max-h-[120px] disabled:opacity-50"
                style={{ height: "44px" }}
                onInput={(e) => {
                  const t = e.currentTarget;
                  t.style.height = "44px";
                  t.style.height = Math.min(t.scrollHeight, 120) + "px";
                }}
              />

              {/* Mic button */}
              {isSupported && (
                <button
                  type="button"
                  onClick={isListening ? stopListening : startListening}
                  disabled={isLoading}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0 ${
                    isListening
                      ? "bg-teal-500 hover:bg-teal-400 shadow-lg shadow-teal-500/40"
                      : "bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.12]"
                  } disabled:opacity-40 disabled:cursor-not-allowed`}
                  title={isListening ? "Stop listening" : "Speak your question"}
                >
                  {isListening ? <MicOff className="w-4 h-4 text-white" /> : <Mic className="w-4 h-4 text-white/70" />}
                </button>
              )}

              {/* Send button */}
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-xl bg-plasma-500 hover:bg-plasma-400 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 shrink-0"
              >
                {isLoading ? <Loader2 className="w-4 h-4 text-white animate-spin" /> : <Send className="w-4 h-4 text-white" />}
              </button>
            </form>

            <div className="flex items-center justify-between mt-2 px-1">
              <p className="text-white/20 text-[10px]">Powered by Claude · Not financial advice</p>
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
