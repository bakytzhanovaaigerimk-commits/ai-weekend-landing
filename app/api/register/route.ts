import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, organization } = body;

    // Validate required fields
    if (!name || !email || !phone || !organization) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Here you can implement different submission methods:

    // Option 1: Send email using a service like SendGrid, Resend, or Nodemailer
    // await sendEmail({ name, email, phone, organization });

    // Option 2: Send to Telegram bot
    // await sendToTelegram({ name, email, phone, organization });

    // Option 3: Save to database
    // await saveToDatabase({ name, email, phone, organization });

    // For now, just log the data (you'll replace this with actual implementation)
    console.log('New registration:', { name, email, phone, organization });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        message: 'Registration successful',
        data: { name, email, phone, organization }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Example function for sending to Telegram (uncomment and configure to use)
/*
async function sendToTelegram(data: any) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  const message = `
🎯 New AI Forum Registration

👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🏢 Organization: ${data.organization}
  `;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML',
    }),
  });
}
*/

// Example function for sending email (uncomment and configure to use)
/*
async function sendEmail(data: any) {
  // Using a service like Resend, SendGrid, etc.
  // const resend = new Resend(process.env.RESEND_API_KEY);

  // await resend.emails.send({
  //   from: 'noreply@aiforum2025.com',
  //   to: 'admin@aiforum2025.com',
  //   subject: 'New AI Forum Registration',
  //   html: `
  //     <h2>New Registration</h2>
  //     <p><strong>Name:</strong> ${data.name}</p>
  //     <p><strong>Email:</strong> ${data.email}</p>
  //     <p><strong>Phone:</strong> ${data.phone}</p>
  //     <p><strong>Organization:</strong> ${data.organization}</p>
  //   `,
  // });
}
*/
