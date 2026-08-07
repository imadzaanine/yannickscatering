
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, telephone, message } = body;
  await resend.emails.send({
    from: "Contact From <onboarding@resend.dev>",
    to: "imadzaanine@gmail.com",
    subject: "New Contact Form Submission",
    text: `Naam: ${name}\nE-mail: ${email}\nTelefoonnummer: ${telephone}\nBericht: ${message}`,
  });


  return NextResponse.json({
    message: "Received!",
  });
}