import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, telephone, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "imadzaanine@gmail.com",
      subject: "New Contact Form Submission",
      text: `Naam: ${name}
E-mail: ${email}
Telefoonnummer: ${telephone}
Bericht: ${message}`,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { message: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Email sent successfully.",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}