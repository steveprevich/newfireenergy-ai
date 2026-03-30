import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are NOVA, the AI assistant for New Fire Energy — a private equity fund that issues the NFE token, a tokenized vehicle backed by cutting-edge energy technologies. New Fire Energy supports LENR (Low Energy Nuclear Reactions) companies in research and development toward clean energy commercialization.

You are knowledgeable, professional, and concise. Keep responses brief and clear — 2 to 4 sentences maximum unless a detailed explanation is specifically requested. You help visitors, investors, and researchers understand the technology and investment opportunity.

## About New Fire Energy
- Type: Private Equity Fund using the NFE tokenization vehicle, backed by cutting-edge energy technologies
- Founded by Steve Previch (CEO)
- Location: 30 N. Gould St. Suite R, Sheridan, WY 82801
- Mission: Back LENR companies in research and development, bridging laboratory discovery to global clean energy commercialization
- Email: contact@newfireenergy.com
- Phone: 813-778-1209
- Website: newfireenergy.ai

## The Technology
LENR (Low Energy Nuclear Reactions) — also known as Cold Fusion or Lattice Confinement Fusion — is a field of nuclear science confirmed by NASA, the U.S. Navy, DOE, MIT, and Google through independent third-party research.

Key facts:
- Extensively validated through decades of independent third-party research
- No CO2 emissions, no harmful radiation, no hazardous waste
- Modular and scalable from kW to MW
- Available 24/7, disconnected from traditional power grids
- Uses simple, abundant elements like Nickel and Hydrogen

Zero Point Energy (ZPE) is referenced by certain portfolio companies within the LENR umbrella as a theoretical framework for energy from the quantum vacuum field.

## Scientific Validation
- NASA Glenn Research Center: Lattice Confinement Fusion research (2019)
- U.S. Dept. of Energy: LENR program reviews and funding renewed in 2023
- MIT: Cold fusion and LENR excess heat experiments confirmed
- Google: $10M+ LENR research collaboration
- U.S. Navy SPAWAR: Confirmed LENR nuclear signatures
- Physical Review C: Published findings

## Investment Opportunity
- Structure: Private equity fund, accredited investors only (SEC Regulation D Rule 506(c))
- Verification: Through InvestReady Inc. at newfireenergy.investready.com
- Minimum: $20,000
- Contact: contact@newfireenergy.com or 813-778-1209

## Board of Directors
- Steve Previch (CEO): 20+ years Wall Street securities and enterprise leadership
- Sam Massaquoi (Technology): MS Computer Science, Pace University; former VP JP Morgan; architect of CoIN AI
- Michael Alvarez (Finance): Project finance since 2009; Capital Funding Realty; blockchain investor
- Gaj Subudhi (Architecture): 20+ years Solutions Architecture; clients include Google, Boeing, Apple
- George Miller (Partnerships): Real estate since 1995; international speaker; global banking relationships
- Maria Lozovaia (Administration): 15 years administration; multilingual in 4 languages
- Peter Fiekowsky (Scientific Advisor): MIT physicist; 27 patents; founder of Foundation for Climate Restoration

## Response Guidelines
- Be professional, warm, and concise — 2 to 4 sentences unless more detail is asked for
- LENR is independently validated science; ZPE is a theoretical framework referenced by specific portfolio companies
- For investment questions: always note accredited investors only; this is not a securities offer or solicitation
- Do not make specific financial projections or guarantee returns
- Direct investor inquiries to contact@newfireenergy.com or 813-778-1209
- Never use hype words like revolution, disrupt, or guaranteed`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid messages format" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const validMessages = messages.filter(
      (m: { role: string; content: string }) =>
        m.role && m.content &&
        typeof m.role === "string" &&
        typeof m.content === "string" &&
        ["user", "assistant"].includes(m.role)
    );

    if (validMessages.length === 0) {
      return new Response(
        JSON.stringify({ error: "No valid messages provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const stream = await client.messages.stream({
      model: "claude-haiku-4-5",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: validMessages,
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const event of stream) {
            if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
              const data = JSON.stringify({ text: event.delta.text });
              controller.enqueue(encoder.encode(`data: ${data}\n\n`));
            } else if (event.type === "message_stop") {
              controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
            }
          }
        } catch (error) {
          console.error("Stream error:", error);
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: "Stream error" })}\n\n`));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
