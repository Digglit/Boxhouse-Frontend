import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import sectionAImage from "../public/sectionA.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faMobileScreen,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import StarsBackdrop from "../components/StarsBackdrop";
import { print } from "graphql";
import postsQuery from "../graphql/getBlogPosts.gql";
import BlogImage from "../public/HomepageBlogPlaceholder.jpeg";
import NoPostsMainContent from "../components/Blog/NoPostsMainContent";

export const revalidate = 604800;

export default async function Home() {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
        ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
        : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
    }/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: print(postsQuery),
        variables: {
          page: 1,
          pageSize: 3,
        },
      }),
    },
  );

  const fetchData = await response.json();
  const blogPosts = fetchData.data.blogposts.data;

  return (
    <div className="flex-1 bg-[#f8f8f8]">
      <Head>
        <title>Boxhouse Consulting</title>
        <meta
          name="description"
          content="Boxhouse Consulting is a for-hire software team specializing in web-based application development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTextTitle}>
            Building Tomorrow&apos;s Web{" "}
            <span className={styles.heroTextTitleHighlighted}>Today.</span>
          </h1>
          <p className={styles.heroText}>
            Boxhouse delivers powerful web software solutions that drive
            business growth.
          </p>
          <Link href="/scheduleConsultation">
            <button className="primaryButton">
              Schedule a Free Consultation
            </button>
          </Link>
        </div>
        <div className={"starsBackdrop"}>
          <StarsBackdrop factor={4} opacity={1} rotate />
        </div>
      </section>

      <section className={styles.sectionAContainer}>
        <Image
          className={styles.sectionAImage}
          src={sectionAImage.src}
          alt="illustration of a Boxhouse developer writing code"
          width={500}
          height={480}
        />
        <div className={styles.sectionATextContainer}>
          <h2 className="contentTextTitle">What We Do</h2>
          <p className="contentTextParagraph">
            Boxhouse Consulting is a for-hire software team specializing in
            developing custom web-based applications that help businesses
            succeed. From internal tools to customer-facing software services,
            we have the skills and experience to bring your vision to life.
          </p>
          <Link
            href="/about"
            aria-label="Link for the user to learn more about Boxhouse Consulting"
          >
            <button className="contentButton primaryButton">
              Learn About Boxhouse
            </button>
          </Link>
        </div>
      </section>

      <section className={styles.sectionBContainer}>
        <div className={styles.sectionBContainerWrapper}>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={styles.sectionBIcon}
          />
          <h3 className={styles.sectionBTitle}>Reliability</h3>
          <p className={styles.sectionBText}>
            Unpredictable software can be frustrating and lead to unexpected
            outcomes. At Boxhouse, you can trust that you will consistently see
            great results.
          </p>
        </div>
        <div className={styles.sectionBContainerWrapper}>
          <FontAwesomeIcon
            icon={faMobileScreen}
            className={styles.sectionBIcon}
          />
          <h3 className={styles.sectionBTitle}>Responsiveness</h3>
          <p className={styles.sectionBText}>
            Our web applications work on all devices, including desktop, tablet,
            and mobile. This ensures a seamless and visually appealing
            experience for all users.
          </p>
        </div>
        <div className={styles.sectionBContainerWrapper}>
          <FontAwesomeIcon icon={faLock} className={styles.sectionBIcon} />
          <h3 className={styles.sectionBTitle}>Security</h3>
          <p className={styles.sectionBText}>
            We prioritize data security with end-to-end encryption and
            industry-leading practices in all of our web applications.
          </p>
        </div>
      </section>

      <section className={styles.sectionCContainer}>
        <div className={styles.sectionCContentWrapper}>
          <h2 className="contentTextTitle">What We Build</h2>
          <div className={styles.sectionCItemsWrapper}>
            {[
              "Employee Portals",
              "Asset Management Systems",
              "Employee Management Applications",
              "Order Management Applications",
              "Customer Service Applications",
              "Patient Portals",
              "Ecommerce Web Applications",
              "Workflow Management Software",
              "Inventory Management Systems",
              "Custom Web Solutions",
            ].map((item, index) => (
              <div className={styles.sectionCItem} key={item}>
                <p className={styles.sectionCItemTitle}>{item}</p>
              </div>
            ))}
          </div>
          <Link href="/scheduleConsultation">
            <button className="contentButton primaryButton">
              Schedule a Free Consultation
            </button>
          </Link>
        </div>
      </section>

      <section className="grid grid-rows-[250px_1fr] md:grid-cols-[1fr_1fr] md:grid-rows-[1fr]">
        <div className="relative">
          <Image
            src={BlogImage}
            alt="Top down view of the hands of group of people collaborating, pointing to a sheet of paper in the center of a table containing graphs and data"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              aspectRatio: "16/9",
            }}
            className="grayscale"
          />
        </div>
        <div className="mx-auto w-[90%] py-[50px] md:py-[75px]">
          <NoPostsMainContent colorClass="text-black" />
        </div>
      </section>

      {/* <section className={styles.sectionEContainer}>
        <div className={styles.sectionEContentWrapper}>
          <h2 className={styles.sectionETitle}>Let&apos;s Get Started 🚀</h2>
          <p className={styles.sectionEContentText}>
            Ready to build the software of your dreams? Schedule a free
            consultation today using our online consultation scheduler.
          </p>
          <Link href="/scheduleConsultation">
            <button className="contentButton primaryButton">
              Schedule a Free Consultation
            </button>
          </Link>
        </div>
      </section> */}
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
}
