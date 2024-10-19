import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json(); // Get the data from the request body

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // For Gmail
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  // Set up email data
  const mailOptions = {
    from: `"${name}" <${email}>`, // sender address
    to: "duahyder786@gmail.com", // list of receivers
    subject: "New Contact Form Submission", // Subject line
    text: message, // Plain text body
    html: `<p>You have a new contact form submission from:</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`, // HTML body
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to send email." }), { status: 500 });
  }
}
