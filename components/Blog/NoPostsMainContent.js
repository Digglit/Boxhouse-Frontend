"use client";

import { useState } from "react";

const NoPostsMainContent = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = () => {};

  return (
    <div className="mx-auto max-w-[600px]">
      <h1 className="pb-4 text-[28px] font-medium text-white">
        Boxhouse Blog Coming Soon
      </h1>
      <p className="mb-4 font-light text-white">
        Sorry, we haven&apos;t posted anything yet. We&apos;re in the process of
        developing a blog strategy that will deliver value to your business on a
        regular basis.
        <br />
        <br />
        Our content will revolve around business and technical strategy and how
        they work together to bring customers great products at great prices.
        Enter your email below or follow us on{" "}
        <a
          className="font-bold text-[--primary-color] underline"
          href="https://www.LinkedIn.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        to find out as soon as our content is available.
      </p>
      <label
        className="text-[14px] font-light text-white opacity-80"
        htmlFor="emailInput"
      >
        Email
      </label>
      <input
        className="mt-1 block w-[100%] max-w-[400px] !rounded-[0px] p-2 shadow-primary-shadow"
        placeholder="Ex: Contact@BoxhouseConsulting.com"
        value={email}
        id="emailInput"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="primaryButton mt-4 w-[100%] max-w-[250px]"
        onClick={handleEmailSubmit}
      >
        Join The Waiting List
      </button>
    </div>
  );
};

export default NoPostsMainContent;
