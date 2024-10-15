// import { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// type Data = {
//   message: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Only POST requests allowed" });
//   }

//   const { name, email, subject, message } = req.body;

//   // Create transporter
//   const transporter = nodemailer.createTransport({
//     service: "gmail", // or use your email provider
//     auth: {
//       user: process.env.EMAIL_USER, // Your email address
//       pass: process.env.EMAIL_PASS, // Your email password (or app-specific password for Gmail)
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: process.env.RECIPIENT_EMAIL, // Your email address where the form data will be sent
//     subject: `New contact form submission: ${subject}`,
//     text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Error sending email" });
//   }
// }
