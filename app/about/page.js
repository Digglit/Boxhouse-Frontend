import styles from "../../styles/AboutUs.module.css";
import JosephJPG from "../../public/Joseph-Photo-Square.jpeg";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

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

      <div className="pageHeaderContainer">
        <h1>About Us</h1>
      </div>
      <div className="clamp-grid grid grid-rows-[auto_auto] sm:grid-rows-[1fr]">
        <Image
          alt="Joseph"
          src={JosephJPG}
          // height={"100%"}
          className="h-[100%] justify-self-end object-cover sm:col-start-2 lg:max-w-[450px]"
        />
        <div className="h-fit self-center justify-self-center px-8 py-16 sm:col-start-1 sm:row-start-1 sm:w-[80%] sm:p-8">
          <h2 className="mb-2 text-2xl font-bold">Built To Last</h2>
          <p className="text-sm font-light md:text-[16px]">
            “I remember when I was young and thought that when you&apos;re sick
            you go to the doctor. When your car breaks down you go to the
            mechanic. When your grass needs cut you call a landscaper. As I got
            older and grew into adulthood, I learned that many doctors are
            inattentive. Many mechanics are not trustworthy. Many landscapers
            lack attention to detail.
            <br />
            <br />
            That&apos;s what Boxhouse strives to overcome. With our passion for
            software that functions as well as it looks, our goal is to make you
            glad that you chose us.”
          </p>
          <p className="mt-4 text-sm font-light md:text-[16px]">
            - Joseph Marella, Founder
          </p>
        </div>
      </div>
      <div className={styles.getStartedContainer}>
        <div className={styles.getStartedContentWrapper}>
          <h2 className={styles.getStartedTitle}>Ready to get started?</h2>
          <div className={styles.getStartedButtonWrapper}>
            <Link href="/scheduleConsultation">
              <button className="primaryButton">
                Schedule a Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
