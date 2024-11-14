import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import sectionAImage from "../public/sectionA.svg";
import placeholderImage from "../public/placeholderImage.jpg";
import placeholderImage2 from "../public/placeholderImage2.jpg";
import placeholderImage3 from "../public/placeholderImage3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faMobileScreen,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import SnowEffect from "../components/SnowBackdrop";
import PageTransition from "../components/PageTransition";
import { useQuery } from "@apollo/client";
import postsQuery from "../graphql/getBlogPosts.gql";
import dateFormatter from "../util/dateFormatter";

export default function Home(props, ref) {
  const { loading, error, data } = useQuery(postsQuery, {
    variables: { page: 1, pageSize: 3 },
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error occurred: {error.message}</div>;
  }

  const { blogposts } = data;
  const finalBlogposts = blogposts.data.map((post) => post.attributes);
  console.log(finalBlogposts);

  return (
    // <PageTransition ref={ref}>
    <>
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
          {/* <p className={styles.heroText}>Experience the future of web technology with Boxhouse Consulting - delivering powerful web software solutions that drive business growth.</p> */}
          {/* <p className={styles.heroText}>Delivering powerful web software solutions that drive business growth.</p> */}
          <p className={styles.heroText}>
            Boxhouse delivers powerful web software solutions that drive
            business growth.
          </p>
          <Link href="/scheduleConsultation">
            <button className="primaryButton">Schedule a Consultation</button>
          </Link>
        </div>
        <div className={"snowBackdrop"}>
          <SnowEffect factor={4} opacity={1} rotate />
        </div>
      </section>

      <section className={styles.sectionAContainer}>
        {/* <img className={styles.sectionAImage} src={sectionAImage.src}/> */}
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
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>

      <section className={styles.sectionDContainer}>
        <h2 className={styles.sectionDTitle}>Latest Blog Posts</h2>
        {finalBlogposts.map((post) => (
          <Link href={`/blog/${post.Slug}`} key={post.Slug}>
            <div className={styles.sectionDBlogContainer}>
              {/* <img className={styles.sectionDBlogImage} src={placeholderImage.src}/> */}
              <Image
                className={styles.sectionDBlogImage}
                src={`${process.env.NEXT_NODE_ENDPOINT}${post.Image.data.attributes.url}`}
                height={145}
                width={200}
                alt={post.Image.data.attributes.alternativeText}
              />
              <div className={styles.sectionDBlogContentWrapper}>
                <h4 className={styles.sectionDBlogTitle}>{post.Title}</h4>
                <p className={styles.sectionDBlogMeta}>
                  {post.Author} -{" "}
                  {dateFormatter(post.DateWritten, "mm dd, yyyy")}
                </p>
                <p className={styles.sectionDBlogText}>
                  {post.BlogContent[0].Body}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className={styles.sectionEContainer}>
        <div className={styles.sectionEContentWrapper}>
          <h2 className={styles.sectionETitle}>Let&apos;s Get Started 🚀</h2>
          <p className={styles.sectionEContentText}>
            Ready to build the software of your dreams? Schedule a free
            consultation today using our online consultation scheduler.
          </p>
          <Link href="/scheduleConsultation">
            <button className="contentButton primaryButton">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
