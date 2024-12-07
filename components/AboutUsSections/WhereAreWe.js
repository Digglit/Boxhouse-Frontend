import Image from "next/image";
import WhereImage from "../../public/AboutUsWhereImage.jpeg";

const WhereAreWeSection = () => {
  return (
    <div className="mx-auto my-[50px] grid w-[90%] max-w-[1100px] grid-rows-[1fr_1fr] items-center gap-[20px] md:my-[100px] md:grid-cols-[1fr_1fr] md:grid-rows-[1fr] lg:gap-[100px]">
      <div className="self-center">
        <h2 className="mb-4 text-[28px] font-medium">Where We Are</h2>
        <p>
          Boxhouse is proud to call <strong>Lakewood, Ohio</strong>, home. We
          collaborate with businesses across the United States, delivering
          tailored solutions no matter where you&apos;re located.
          <br />
          <br />
          By leveraging tools like <strong>Teams</strong>, <strong>Zoom</strong>
          , and <strong>other remote technologies</strong>, we ensure a
          seamless, high-quality experience for every client.
        </p>
      </div>
      <div className="relative row-start-1 aspect-[5/3] w-[100%] max-w-[400px] justify-self-center md:col-start-2">
        <Image
          src={WhereImage}
          fill
          className="shadow-primary-shadow"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          alt={
            "A paper map of the state of United States Mid-West, focusing on Ohio"
          }
        />
      </div>
    </div>
  );
};

export default WhereAreWeSection;
