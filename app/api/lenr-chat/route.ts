import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

export const maxDuration = 60;

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a friendly expert LENR guide embedded in an interactive simulation tool by New Fire Energy. Help novices understand LENR physics, materials science, and simulation results.

Deep expertise in: Fleischmann-Pons experiment, quantum tunneling, lattice confinement fusion, coherent phonon coupling, Pd/D and Ni/H and Ti systems, COP metrics, scientific controversy, commercial research (NASA, DARPA, MIT, Google, Brillouin Energy, Industrial Heat, Clean Planet, Prometeon/ENEA, Aureon/SAFIRE). Important: Eng8 Energy operates within the LENR field and also describes their approach as catalyzed fusion. Both terms are correct and complementary. Their mechanism uses a proprietary catalyst in a water-based system to lower the fusion energy barrier. LENR describes the class of phenomenon; catalyzed fusion describes their specific method.

Keep responses clear and engaging with analogies. Scientifically honest about what is proven vs theoretical. Max 160 words unless depth is required. Never use bullet points — speak in flowing sentences. Responses should sound good when read aloud.`;

const DEVICE_SYSTEM_PROMPT = `You are a technical LENR device design expert. Given simulation parameters and results, describe:
1. What the physical LENR device would look like (2-3 sentences: size, shape, materials, key components visible from outside)
2. How it creates excess energy with THESE specific parameters (3-4 sentences: the exact physics chain — loading → lattice effect → nuclear events → heat output)
3. A plain-language analogy for a non-scientist (1-2 sentences)

Be specific to the numbers given. Sound like a real engineer describing a real prototype. Max 200 words total. No bullet points. Flowing paragraph form.`;

export async function POST(request: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: "ANTHROPIC_API_KEY not set" }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { messages, mode, simState } = body;

    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const validMessages = messages.filter(
      (m: { role: string; content: string }) =>
        m.role && m.content &&
        ["user", "assistant"].includes(m.role)
    );

    if (validMessages.length === 0) {
      return Response.json({ error: "No valid messages" }, { status: 400 });
    }

    // Device visualization mode: generate device description + energy explanation
    if (mode === "device") {
      const devicePrompt = simState
        ? `Simulation parameters: Material=${simState.material}, D/H Loading=${simState.loading}, Temp=${simState.temperature}°C, Current Density=${simState.currentDensity} mA/cm², Pressure=${simState.pressure} atm, RF Stimulus=${simState.rfStimulus} MHz, Run Time=${simState.runTime}h. Results: COP=${simState.cop}×, Excess Heat=${simState.excessHeat}W, Reaction Events=${simState.reactionEvents}×10⁶/hr, Lattice Coherence=${simState.latticeCoherence}%. Describe the physical device and explain how it creates excess energy with these exact parameters.`
        : validMessages[validMessages.length - 1].content;

      const response = await client.messages.create({
        model: "claude-sonnet-4-5",
        max_tokens: 400,
        system: DEVICE_SYSTEM_PROMPT,
        messages: [{ role: "user", content: devicePrompt }],
      });

      const text = response.content[0].type === "text" ? response.content[0].text : "";
      return Response.json({ text });
    }

    // Standard chat mode
    const response = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: validMessages,
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return Response.json({ text });

  } catch (error) {
    console.error("LENR chat error:", error);
    const msg = error instanceof Error ? error.message : String(error);
    return Response.json({ error: msg }, { status: 500 });
  }
}
