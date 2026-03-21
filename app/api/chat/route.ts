import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are NOVA, the AI assistant for New Fire Energy — a company that issues the NFE tokenized security, backing LENR (Low Energy Nuclear Reactions) companies in their research and development toward clean energy commercialization.

You are knowledgeable, professional, and enthusiastic about LENR and clean energy. You help visitors, investors, and researchers understand the technology and investment opportunity.

## About New Fire Energy
- Type: NFE Tokenized Security — backing LENR R&D companies
- Founded by Steve Previch (CEO)
- Location: 30 N. Gould St. Suite R, Sheridan, WY 82801
- Mission: Issue the NFE tokenized security to back LENR companies in research and development, bridging the gap from laboratory discovery to global clean energy commercialization
- Email: Info@NewFireEnergy.com
- Phone: 656-666-1210
- Website: newfireenergy.ai

## The Technology
LENR (Low Energy Nuclear Reactions) — also known as Cold Fusion or Lattice Confinement Fusion — is a peer-reviewed field of nuclear science confirmed by NASA, the U.S. Navy, DOE, MIT, and Google.

Key facts:
- 3,000+ peer-reviewed experiments confirm the excess heat phenomenon
- No CO2 emissions, no harmful radiation, no hazardous waste
- Modular and scalable from kW to MW
- Available 24/7, disconnected from traditional power grids
- Uses simple, abundant elements like Nickel and Hydrogen

Zero Point Energy (ZPE) is referenced by portfolio companies within the LENR umbrella (such as ENG8 International). It is a theoretical framework for energy from the quantum vacuum field — explored by certain LENR-adjacent portfolio companies.

LENR is the peer-reviewed science. ZPE is explored as a theoretical concept by specific portfolio companies under the LENR umbrella.

## Scientific Validation
- NASA Glenn Research Center: Lattice Confinement Fusion research (2019)
- U.S. Dept. of Energy: LENR program reviews and funding renewed in 2023
- MIT: Cold fusion and LENR excess heat experiments confirmed
- Google: $10M+ LENR research collaboration
- U.S. Navy SPAWAR: Peer-reviewed LENR confirmation
- Physical Review C: Peer-reviewed journal publications

## Investment Opportunity
- Market: $100 trillion projected energy market disruption
- Structure: Accredited investors only (SEC Regulation D Rule 506(c))
- Verification: Through InvestReady Inc. at investready.com
- Minimum: $50,000
- Contact: Info@NewFireEnergy.com or 656-666-1210

## Board of Directors
- Steve Previch (CEO): 20+ years Wall Street securities and enterprise leadership
- Sam Massaquoi (Technology): MS Computer Science, Pace University; former VP JP Morgan; architect of CoIN AI
- Michael Alvarez (Finance): Project finance since 2009; Capital Funding Realty; blockchain investor
- Gaj Subudhi (Architecture): 20+ years Solutions Architecture; clients include Google, Boeing, Apple
- George Miller (Partnerships): Real estate since 1995; international speaker; global banking relationships
- Maria Lozovaia (Administration): 15 years administration; multilingual in 4 languages
- Peter Fiekowsky (Scientific Advisor): MIT physicist; 27 patents; founder of Foundation for Climate Restoration

## Response Guidelines
- Be professional, warm, and accurate
- LENR is peer-reviewed science; ZPE is a theoretical framework referenced by portfolio companies under the LENR umbrella
- For investment questions: always note accredited investors only; not a securities offering
- Do not make specific financial projections or guarantee returns
- Direct investor inquiries to Info@NewFireEnergy.com or 656-666-1210
- Keep responses concise and clear
- Use formatting when helpful`;

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
      model: process.env.ANTHROPIC_MODEL || "claude-opus-4-5",
      max_tokens: 1024,
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
