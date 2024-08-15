import nodemailer from 'nodemailer';

export async function GET() {
  // Handle GET requests
  return new Response(JSON.stringify({ message: "Contact API is working" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()
    console.log('Received form data:', { name, email, message })

    // Create a test account if you don't have real credentials yet
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // Send email
    let info = await transporter.sendMail({
      from: '"Contact Form" <foo@example.com>',
      to: "bar@example.com", // This is where the email would be sent in a real scenario
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    
    // This URL is a preview of the sent email (only works with ethereal.email)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error in contact API route:', error)
    return new Response(JSON.stringify({ message: "Error processing form submission" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}