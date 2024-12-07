"use client";
import Head from "next/head";
import "react-datepicker/dist/react-datepicker.css";
import ScheduleConsultationForm from "../../components/ScheduleConsultationForm";
import ConsultationSchedulerImage from "../../public/ConsultationSchedulerImage.jpeg";
import Image from "next/image";

const ConsultationScheduler = () => {
  return (
    <div className="flex-1">
      <Head>
        <title>Schedule a Consultation</title>
        <meta
          name="description"
          content="Boxhouse Consulting is a for-hire software team specializing in web-based application development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[--background-color] pb-[50px] pl-[20px] pt-[100px] md:pl-[100px]">
        <h1 className="text-[28px] text-white">Consultation Scheduler</h1>
      </div>
      <div className="grid items-center justify-items-center md:grid-cols-[3fr_2fr]">
        <div className="w-[90%] max-w-[436px] py-16 md:py-0">
          <h2 className="text-[24px] font-medium">
            Schedule a Free Consultation
          </h2>
          <p className="mb-4 mt-2">
            We understand that building things that matter makes you a busy
            person. Let&apos;s find the perfect time to discuss your goals.
          </p>
          <ScheduleConsultationForm />
        </div>
        <div className="relative row-start-1 h-[200px] w-[100%] md:col-start-2 md:h-[686px]">
          <Image
            src={ConsultationSchedulerImage}
            alt="Team of consultations collaborating on a laptop computer"
            fill
            style={{
              layout: "fill",
              objectFit: "cover",
              objectPosition: "0px 65%",
            }}
            sizes={"(max-width: 900px) 100vw, 50vw"}
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultationScheduler;
