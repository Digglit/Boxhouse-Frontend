const ErrorFormState = ({ formState, returnToForm }) => {
  const handleCopyAndEmail = () => {
    const stateValues = {
      timeZone: formState.timeZone,
      preferredConsultationDate: formState.preferredConsultationDate,
      preferredConsultationTime: formState.preferredConsultationTime,
      name: formState.name,
      company: formState.company,
      industry: formState.industry,
      email: formState.email,
      currentProjectStage: formState.currentProjectStage,
      idealCompletionDate: formState.idealCompletionDate,
      projectDescription: formState.projectDescription,
      referrer: formState.referrer,
    };

    const textToCopy = Object.entries(stateValues)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    navigator.clipboard.writeText(textToCopy).then(
      () => {
        console.log("Copied to clipboard!");

        const recipient = "Contact@BoxhouseConsulting.com";
        const subject = "Boxhouse Consulting Consultation Request";
        const body = encodeURIComponent(
          `Hello,\n\nI had some issues with your online consultation scheduler. I'd like to schedule a time to meet:\n\n${textToCopy}\n\nBest regards.`,
        );

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      },
      (err) => {
        console.error("Failed to copy text to clipboard: ", err);
      },
    );
  };

  return (
    <div>
      <h2 className="text-[24px] font-medium">Hmm, Something Went Wrong.</h2>
      <p className="my-4">
        We weren&apos;t able to establish a connection with our server to
        schedule your consultation.
        <br />
        <br />
        Try clicking the button below to copy your data from this form into an
        email to <strong>Contact@BoxhouseConsulting.com</strong>. We&apos;ll get
        back to you as soon as possible to confirm your free consultation!
      </p>
      <div className="grid grid-cols-[1fr_1fr] gap-3">
        <button className="secondaryButton !px-0" onClick={returnToForm}>
          Return to Form
        </button>
        <button className="primaryButton !px-0" onClick={handleCopyAndEmail}>
          Copy and Email
        </button>
      </div>
    </div>
  );
};

export default ErrorFormState;
