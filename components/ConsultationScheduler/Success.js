import Link from "next/link";

const SuccessFormState = ({ formState }) => {
  const getFormattedConsultationDate = () => {
    const date = new Date(formState.preferredConsultationDate);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const getFormattedConsultationTime = () => {
    const date = new Date(
      `${formState.preferredConsultationDate}T${formState.preferredConsultationTime}`,
    );
    const options = { hour: "numeric", minute: "numeric" };
    const time = date.toLocaleTimeString("en-US", options);
    switch (formState.timeZone) {
      case "Eastern Standard Time":
        return `${time} EST`;
      case "Central Standard Time":
        return `${time} CST`;
      case "Mountain Standard Time":
        return `${time} MST`;
      case "Pacific Standard Time":
        return `${time} PST`;
      case "Alaska Standard Time":
        return `${time} AKST`;
      case "Hawaii Standard Time":
        return `${time} HST`;
      default:
        return `${time}`;
    }
  };

  return (
    <div>
      <h2 className="text-[24px] font-medium">Success!</h2>
      <p className="my-4">
        We&apos;ve got your consultation on the books for{" "}
        <strong>{getFormattedConsultationDate()}</strong> at{" "}
        <strong>{getFormattedConsultationTime()}</strong>. You&apos;ll receive a
        confirmation email of your appointment date and time.
        <br />
        <br />
        If we are unable to make your scheduled time, we&apos;ll email you at
        your provided email <strong>{formState.email}</strong>.
        <br />
        <br />
        Otherwise, we&apos;ll begin reviewing the information you provided and
        prepare to make your project a success. We look forward to meeting you
        and building something great together.
      </p>
      <Link href="/">
        <button className="primaryButton">Return to Homepage</button>
      </Link>
    </div>
  );
};

export default SuccessFormState;
