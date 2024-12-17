import "react-datepicker/dist/react-datepicker.css";
import ScheduleConsultationForm from "../../components/ConsultationScheduler/ScheduleConsultationForm";
import ConsultationSchedulerImage from "../../public/ConsultationSchedulerImage.jpeg";
import Image from "next/image";

export const metadata = {
  title: "Schedule A Consultation",
};

const ConsultationScheduler = () => {
  return (
    <div className="flex-1">
      <div className="bg-[--background-color] pb-[50px] pl-[20px] pt-[100px] md:pl-[100px]">
        <h1 className="text-[28px] text-white">Consultation Scheduler</h1>
      </div>
      <div className="grid items-center justify-items-center md:grid-cols-[3fr_2fr]">
        <div className="w-[90%] max-w-[436px] py-16 md:py-0">
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
