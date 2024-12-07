import Link from "next/link";
import Head from "next/head";
import WhatAreWeSection from "../../components/AboutUsSections/WhatAreWe";
import WhereAreWeSection from "../../components/AboutUsSections/WhereAreWe";
import WhoAreWeSection from "../../components/AboutUsSections/WhoAreWe";

const About = (props, ref) => {
  return (
    <div className="flex-1">
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Boxhouse Consulting is a for-hire software team specializing in web-based application development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-[--background-color] pb-[50px] pl-[20px] pt-[100px] md:pl-[100px]">
        <h1 className="text-[28px] text-white">About Us</h1>
      </div>
      <WhatAreWeSection />
      <WhereAreWeSection />
      <WhoAreWeSection />
      <div className="mx-auto my-[100px] w-[90%] max-w-[500px] text-center">
        <h2 className="mb-4 text-[28px] font-medium">How We Are</h2>
        <p>
          We&apos;re doing great, thanks for wondering. Our focus is on making
          sure that you feel the same about your business.
        </p>
      </div>
      <div className="mx-auto mb-[20px] mt-[100px] grid w-[90%] max-w-[1100px] grid-flow-row items-center justify-items-center bg-[--background-color] py-[50px] shadow-primary-shadow md:my-[100px]">
        <h2 className="mb-4 text-[28px] font-medium text-white">
          Ready To Get Started?
        </h2>
        <Link href="/scheduleConsultation">
          <button className="primaryButton">
            Schedule a Free Consultation
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
