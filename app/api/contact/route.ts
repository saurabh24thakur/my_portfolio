import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Here you would typically handle the email sending, e.g., using a service like Resend, SendGrid, or Nodemailer.
    // For this example, we'll just log the data and simulate a successful response.
    console.log("Received contact form submission:");
    console.log({ name, email, subject, message });

    // Simulate a delay to mimic a real API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ message: "Your message has been sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ message: "An error occurred while sending your message. Please try again later." }, { status: 500 });
  }
}
