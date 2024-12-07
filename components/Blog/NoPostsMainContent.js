"use client";

import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
import dynamic from "next/dynamic";
// import { Checkmark } from "react-checkmark";

const Checkmark = dynamic(
  () => import("react-checkmark").then((mod) => mod.Checkmark),
  { ssr: false },
);

const NoPostsMainContent = ({ colorClass = "text-white" }) => {
  const [email, setEmail] = useState("");
  const [stateDisplayed, setStateDisplayed] = useState("Input");
  const [error, setError] = useState(null);

  const handleEmailSubmit = async () => {
    setStateDisplayed("Loading");
    setError(null);
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
            ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
            : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
        }/api/email-lists`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              Email: email,
            },
          }),
        },
      );
      if (response.ok) {
        setStateDisplayed("Success");
      } else {
        setStateDisplayed("Input");
        setError("There was an error subscribing you. Please try again later.");
      }
    } catch (error) {
      setStateDisplayed("Input");
      setError("There was an error subscribing you. Please try again later.");
    }
  };

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
          href="https://www.LinkedIn.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        to find out as soon as our content is available.
      </p>
      <div className={`h-[${error ? 172 : 124}px]`}>
        {stateDisplayed === "Input" ? (
          <>
            <label
              className={`text-[14px] font-light opacity-80`}
              htmlFor="emailInput"
            >
              Email
            </label>
            <input
              className="mt-1 block w-[100%] max-w-[400px] !rounded-[0px] p-2 shadow-md"
              placeholder="Ex: Contact@BoxhouseConsulting.com"
              value={email}
              id="emailInput"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error ? <p className="mt-2 text-red-500">{error}</p> : null}
            <button
              className="primaryButton mt-4 w-[100%] max-w-[250px]"
              onClick={handleEmailSubmit}
            >
              Join The Waiting List
            </button>
          </>
        ) : stateDisplayed === "Loading" ? (
          <div className="mt-4 grid grid-flow-row gap-4">
            <p className="text-[22px] font-medium">Adding you to the list</p>
            <GridLoader color={"#004bfa"} size={10} />
          </div>
        ) : (
          <div className="grid grid-cols-[auto_auto] grid-rows-[auto_auto] gap-x-4">
            <div className="row-start-1 row-end-3 self-center">
              <Checkmark color={"#004bfa"} />
            </div>

            <h2 className="text-[22px] font-medium">You&apos;re in.</h2>
            <p className="col-start-2">
              You&apos;ve been added to our email list. We&apos;ll be sure to
              reach out as soon as we have something special for you.
            </p>
          </div>
        )}
      </div>
      <div className="hidden">
        <Checkmark color={"#004bfa"} />
      </div>
    </div>
  );
};

export default NoPostsMainContent;
