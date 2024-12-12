import styles from "../../styles/OurWork.module.css";
import CCSCasesImage from "../../public/CCS-Mockup.png";
import PsychQBImage from "../../public/PsychQB-Mockup.jpeg";
import BigMImage from "../../public/BigM-Mockup.png";
import UltrasoundCardsImage from "../../public/UltrasoundCards-Mockup.png";
import USCMarketingImage from "../../public/USC-Marketing-Mockup.png";
// import PageTransition from '../../components/PageTransition'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const OurWork = (props, ref) => {
  return (
    <div className="flex-1">
      <Head>
        <title>Our Work</title>
        <meta
          name="description"
          content="Boxhouse Consulting is a for-hire software team specializing in web-based application development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[--background-color] pb-[50px] pl-[20px] pt-[100px] md:pl-[100px]">
        <h1 className="text-[28px] text-white">Our Work</h1>
      </div>
      <div className={styles.workSectionContainer}>
        <div className={styles.workSectionContentWrapper}>
          <h1 className={"text-[28px] font-medium"}>CCS Cases</h1>
          <p className={"my-4"}>
            CCS Cases is an industry-leading software platform used to prepare
            med school students for the CCS portion of the step 3 exam.
            <br />
            <br />
            Boxhouse played a key role in helping our client bring their
            partially completed application to the finish line, bringing that
            application to market, and later revamping it to help our client
            better serve their customers.
            <br />
            <br />
            CCS Cases has been a big success, helping tens of thousands of
            students all over the world become the doctors of tomorrow.
          </p>
          <Link href="/ourWork/CCSCasesCaseStudy">
            <button className={"primaryButton"}>View Case Study</button>
          </Link>
        </div>
        <div className="relative [@media(max-width:900px)]:row-start-1">
          <Image
            src={CCSCasesImage.src}
            fill
            style={{
              layout: "fill",
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt="CCS Cases collage of many screenshots of the application"
            sizes={"(max-width: 900px) 100vw, 50vw"}
          />
        </div>
      </div>
      <div className={styles.workSectionContainer}>
        <div className="relative [@media(max-width:900px)]:row-start-1">
          <Image
            src={PsychQBImage.src}
            fill
            style={{
              layout: "fill",
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt="Psych QB collage of many screenshots of the application"
            sizes={"(max-width: 900px) 100vw, 50vw"}
          />
        </div>
        <div className={styles.workSectionContentWrapper}>
          <h1 className={"text-[28px] font-medium"}>PsychQB</h1>
          <p className={"my-4"}>
            PsychQB is a product used to help prepare psychiatry students for
            the PRITE and ABPN exams.
            <br />
            <br />
            The software we helped build allows students to track and monitor
            their progress while preparing for the exam. They are shown metrics
            of their overall performance in addition to receiving feedback on
            every practice test.
          </p>
          <Link href="/ourWork/PsychQBCaseStudy">
            <button className={"primaryButton"}>View Case Study</button>
          </Link>
        </div>
      </div>
      <div className={styles.workSectionContainer}>
        <div className={styles.workSectionContentWrapper}>
          <h1 className={"text-[28px] font-medium"}>UltrasoundCards</h1>
          <p className={"my-4"}>
            UltrasoundCards is a flashcard application used by ultrasonography
            students to study for the ARDMS exams. ARDMS is a medical board who
            offers a broad classification of standardized exams in
            ultrasonography. These exams are for different specializations
            including everything from prenatal to adult ultrasound techniques.
            <br />
            <br />
            UltrasoundCards is a progressive web app, allowing users to study
            the information they need anytime, anywhere. As an extra touch to
            allow users to personalize their application, they can select their
            primary color of choice in addition to light or dark mode.
          </p>
          <button className={styles.workSectionButton}>
            Case Study Coming Soon...
          </button>
        </div>
        <div className="relative [@media(max-width:900px)]:row-start-1">
          <Image
            className={styles.workSectionImage}
            src={UltrasoundCardsImage.src}
            fill
            style={{
              layout: "fill",
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt="Ultrasound Cards collage of many screenshots of the application"
            sizes={"(max-width: 900px) 100vw, 50vw"}
          />
        </div>
      </div>
      <div className={styles.workSectionContainer}>
        <div className="relative [@media(max-width:900px)]:row-start-1">
          <Image
            className={styles.workSectionImage}
            src={USCMarketingImage.src}
            fill
            style={{
              layout: "fill",
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt="Ultrasound Cards Marketing collage of many screenshots of the application"
            sizes={"(max-width: 900px) 100vw, 50vw"}
          />
        </div>
        <div className={styles.workSectionContentWrapper}>
          <h1 className={"text-[28px] font-medium"}>
            UltrasoundCards Marketing
          </h1>
          <p className={"my-4"}>
            In addition to the UltrasoundCards application, Boxhouse was
            responsible for developing the marketing application. There are a
            few key features to this site, it includes a blog, modifiable
            through a CMS by our client, a FAQ page, also modifiable through the
            CMS, and multiple payment gateways.
            <br />
            <br />
            This site is a JAMSTACK site, which means it’s crazy fast. Not only
            does this help users find the information they need with minimal
            frustration, it also breaks down barriers that increase conversion.
          </p>
          <button className={styles.workSectionButton}>
            Case Study Coming Soon...
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
