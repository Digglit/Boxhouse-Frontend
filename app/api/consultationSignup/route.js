import ConsultationSignup from "../../emails/consultation-confirmation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const {
    email,
    date,
    time,
    name,
    company,
    industry,
    stage,
    completionDate,
    description,
    referrer,
  } = await request.json();

  const response = await resend.emails.send({
    from: "Joseph@boxhouseconsulting.com",
    to: email,
    subject: "Consultation Confirmed - Boxhouse Consulting",
    react: (
      <ConsultationSignup
        date={date}
        time={time}
        name={name}
        company={company}
        industry={industry}
        stage={stage}
        completionDate={completionDate}
        description={description}
        referrer={referrer}
      />
    ),
  });

  if (response.error === null) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await resend.emails.send({
      from: "Joseph@boxhouseconsulting.com",
      to: "Josephmarella97@gmail.com",
      subject: "Consultation Scheduled",
      react: (
        <ConsultationSignup
          date={date}
          time={time}
          name={name}
          company={company}
          industry={industry}
          stage={stage}
          completionDate={completionDate}
          description={description}
          referrer={referrer}
        />
      ),
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
