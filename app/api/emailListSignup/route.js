import EmailListSignup from "../../emails/email-list-signup";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { email } = await request.json();

  const response = await resend.emails.send({
    from: "Joseph@boxhouseconsulting.com",
    to: email,
    subject: "Welcome To Boxhouse Consulting",
    react: <EmailListSignup />,
  });

  if (response.error === null) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await resend.emails.send({
      from: "Joseph@boxhouseconsulting.com",
      to: "Josephmarella97@gmail.com",
      subject: "Email List Signup",
      react: <p>Someone just signed up for the Boxhouse email list: {email}</p>,
    });

    return new Response(JSON.stringify({ message: "Email sent!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    console.log(response.error);
    return new Response(JSON.stringify({ message: "Email failed to send" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
