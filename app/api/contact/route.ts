import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = "contact@newfireenergy.com";

const typeLabels: Record<string, string> = {
  investor:    "Investor Inquiry",
  partnership: "Partnership / Business",
  media:       "Media / Press",
  research:    "Research Collaboration",
  general:     "General Inquiry",
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, type, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const typeLabel = typeLabels[type] ?? type;

    await resend.emails.send({
      from:    "New Fire Energy Website <onboarding@resend.dev>",
      to:      RECIPIENT,
      replyTo: email,
      subject: `[${typeLabel}] New message from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#060E1F;color:#fff;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#00B8E6,#2DD4BF);padding:28px 32px;">
            <h1 style="margin:0;font-size:1.3rem;color:#060E1F;font-weight:800;">New Fire Energy</h1>
            <p style="margin:4px 0 0;font-size:0.85rem;color:#060E1F;opacity:0.75;">Website Contact Form Submission</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.45);font-size:0.8rem;width:130px;">Inquiry Type</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#00B8E6;font-weight:700;font-size:0.9rem;">${typeLabel}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.45);font-size:0.8rem;">Name</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#fff;font-size:0.9rem;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.45);font-size:0.8rem;">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:0.9rem;"><a href="mailto:${email}" style="color:#00B8E6;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.45);font-size:0.8rem;">Company</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#fff;font-size:0.9rem;">${company}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top:24px;">
              <p style="color:rgba(255,255,255,0.45);font-size:0.8rem;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:18px 20px;color:rgba(255,255,255,0.8);font-size:0.9rem;line-height:1.7;white-space:pre-wrap;">${message}</div>
            </div>
            <div style="margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.08);font-size:0.75rem;color:rgba(255,255,255,0.3);">
              Hit reply to respond directly to ${name} at ${email}.
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
