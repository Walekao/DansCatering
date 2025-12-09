import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      organization,
      organizationType,
      eventDate,
      guestCount,
      message,
    } = body;

    // Validation
    if (!name || !email || !phone || !organization || !organizationType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Prepare form data
    const formData = {
      name,
      email,
      phone,
      organization,
      organizationType,
      eventDate: eventDate || "Not specified",
      guestCount: guestCount || "Not specified",
      message: message || "No additional details",
      submittedAt: new Date().toISOString(),
    };

    // TODO: Integrate email service (e.g., Resend, SendGrid, or Vercel's email)
    // For now, we'll log the submission and return success
    // Example with Resend (free tier: 100 emails/day):
    // 
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // 
    // await resend.emails.send({
    //   from: 'noreply@yourdomain.com',
    //   to: 'contact@yourdomain.com',
    //   subject: `New Catering Inquiry from ${name}`,
    //   html: `
    //     <h2>New Catering Inquiry</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Organization:</strong> ${organization}</p>
    //     <p><strong>Type:</strong> ${organizationType}</p>
    //     <p><strong>Event Date:</strong> ${eventDate}</p>
    //     <p><strong>Guest Count:</strong> ${guestCount}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // });

    // Log submission (in production, you might want to save to a database)
    console.log("Form submission received:", formData);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      {
        error: "Failed to submit form. Please try again later.",
      },
      { status: 500 }
    );
  }
}

