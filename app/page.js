import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import StarsBackdrop from "../components/StarsBackdrop";
import { print } from "graphql";
import postsQuery from "../graphql/getBlogFromSlug.gql";
import BlogImage from "../public/HomepageBlogPlaceholder.jpeg";
import NoPostsMainContent from "../components/Blog/NoPostsMainContent";
import GridTopLeft from "../public/HomeGridTopLeft.jpeg";
import GridTopRight from "../public/HomeGridTopRight.jpeg";
import GridBottomLeft from "../public/HomeGridBottomLeft.jpeg";
import GridBottomRight from "../public/HomeGridBottomRight.jpeg";
import HomepageChecklistsSection from "../components/HomepageChecklistsSection/HomepageChecklistsSection";

export const revalidate = 604800;

export default async function Home() {
  // const response = await fetch(
  //   `${
  //     process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
  //       ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
  //       : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
  //   }/graphql`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       query: print(postsQuery),
  //       variables: {
  //         page: 1,
  //         pageSize: 3,
  //       },
  //     }),
  //   },
  // );

  // const fetchData = await response.json();
  // const blogPosts = fetchData.data.blogposts.data;

  return (
    <div className="flex-1 bg-[#f8f8f8]">
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

      <section className="m-auto grid w-[90%] max-w-[1300px] grid-rows-[250px_auto] gap-[20px] bg-[#f8f8f8] py-[50px] md:grid-cols-[1fr_1fr] md:grid-rows-[1fr] md:gap-[50px] md:py-[100px] lg:gap-[100px]">
        <div className="grid grid-cols-[8fr_5fr] gap-4">
          <div className="grid grid-rows-[5fr-4fr] gap-4">
            <div className="relative">
              <Image
                src={GridTopLeft}
                alt=""
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  aspectRatio: "16/9",
                }}
              />
            </div>
            <div className="relative">
              <Image
                src={GridBottomLeft}
                alt=""
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  aspectRatio: "16/9",
                }}
              />
            </div>
          </div>
          <div className="grid grid-rows-[1fr_2fr] gap-4">
            <div className="relative">
              <Image
                src={GridTopRight}
                alt=""
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  aspectRatio: "16/9",
                }}
              />
            </div>
            <div className="relative">
              <Image
                src={GridBottomRight}
                alt=""
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  aspectRatio: "16/9",
                }}
              />
            </div>
          </div>
        </div>
        <div className="py-[20px] lg:py-[50px]">
          <h2 className="text-[28px] font-medium">What We Do</h2>
          <p className="my-4 max-w-[500px]">
            Boxhouse builds <strong>custom web-based software</strong> to
            streamline your business operations and improve customer
            experiences.
            <br />
            <br />
            We provide <strong>end-to-end solutions</strong>, from initial
            consultation and project planning to final deployment and ongoing
            hosting.
            <br />
            <br />
            With a <strong>focus on quality and customer experience</strong>,
            Boxhouse ensures your business has the tools it needs to thrive.
          </p>
          <Link
            href="/about"
            aria-label="Link for the user to learn more about Boxhouse Consulting"
          >
            <button className="primaryButton">Learn About Boxhouse</button>
          </Link>
        </div>
      </section>

      <HomepageChecklistsSection />

      <section className="m-auto my-[60px] grid w-[90%] max-w-[1300px] grid-rows-[250px_1fr] md:my-[100px] md:grid-cols-[1fr_1fr] md:grid-rows-[1fr] md:gap-[100px]">
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
        <div className="max-w-[500px] pt-[50px] md:py-[50px]">
          <NoPostsMainContent colorClass="text-black" />
        </div>
      </section>

      <div className="mx-auto mb-[20px] mt-[20px] grid w-[90%] max-w-[1300px] grid-flow-row items-center justify-items-center bg-[--background-color] py-[50px] shadow-primary-shadow md:my-[100px] md:mt-[100px]">
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
