import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  const transporter = createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2627603f339ae1",
      pass: "ba340cad56cb47"
    }
  })

  await transporter.sendMail({
    to,
    subject,
    text,
  });
  // Mail trap.io

}