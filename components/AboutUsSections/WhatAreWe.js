import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import BoxhouseBox from "../../public/BoxhouseBox.svg";

const WhatAreWeSection = () => {
  return (
    <div className="mx-auto my-[50px] grid w-[90%] max-w-[1100px] grid-rows-[200px_1fr] gap-[20px] md:my-[100px] md:grid-cols-[1fr_auto] md:grid-rows-[1fr] md:gap-[50px] lg:grid-cols-[1fr_1fr] lg:gap-[100px]">
      <div>
        <h2 className="mb-4 text-[28px] font-medium">What We Are</h2>
        <p>
          Boxhouse is a <strong>full-service technical department</strong>{" "}
          helping businesses like yours:
        </p>
        <ul className="my-4 list-disc pl-4 marker:text-[--primary-color]">
          <li className="mb-1 pl-2">
            Streamline operations, improving efficiency and reducing cost.
          </li>
          <li className="pl-2">
            Diversify revenue streams to help your company grow.
          </li>
        </ul>
        <p className="mb-5">
          From <strong>websites</strong> to <strong>web applications</strong>,
          we build solutions to unlock the full potential of your business.
        </p>
        <div className="grid grid-cols-[50px_1fr] items-center gap-3 bg-[#E4ECFF] p-3">
          <FontAwesomeIcon
            icon={faHandshake}
            className="text-[32px] text-[--primary-color]"
          />
          <p className="text-[14px]">
            We understand that our services don&apos;t make sense unless they
            provide more value to your company than they cost. That&apos;s why
            we focus on building the cost effective solutions you need.
          </p>
        </div>
      </div>
      <div className="relative row-start-1 aspect-square h-[100%] max-h-[225px] self-center justify-self-center md:col-start-2">
        <Image
          src={BoxhouseBox}
          fill
          alt={"The box from the Boxhouse Consulting logo"}
        />
      </div>
    </div>
  );
};

export default WhatAreWeSection;
