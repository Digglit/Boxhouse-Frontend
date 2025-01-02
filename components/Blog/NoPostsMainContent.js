import EmailListSignupForm from "./EmailListSignupForm";

const NoPostsMainContent = ({ colorClass = "text-white" }) => {
  return (
    <div className={`mx-auto max-w-[600px] ${colorClass}`}>
      <h1 className={`pb-4 text-[28px] font-medium`}>
        Boxhouse Blog Coming Soon
      </h1>
      <p className={`mb-4`}>
        We haven&apos;t posted anything yet. We&apos;re in the process of
        developing a blog strategy that will deliver value to your business on a
        regular basis.
        <br />
        <br />
        Our content will revolve around business and technical strategy and how
        they work together to bring customers great products at great prices.
        Enter your email below or follow us on{" "}
        <a
          className="font-bold text-[--primary-color] underline"
          href="https://www.linkedin.com/company/boxhouse-consulting"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        to find out as soon as our content is available.
      </p>
      <EmailListSignupForm />
    </div>
  );
};

export default NoPostsMainContent;
