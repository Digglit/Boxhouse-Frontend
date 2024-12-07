import Image from "next/image";
import JosephJPG from "../../public/Joseph-Photo-Square.jpeg";
import BoxhouseSystem from "../../public/BoxhouseSystemSVG.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faScroll } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const WhoAreWeSection = () => {
  return (
    <div className="bg-[--background-color] py-[100px] text-white">
      <h2 className="mx-auto mb-4 w-[90%] max-w-[1100px] text-[28px] font-medium">
        Who We Are
      </h2>
      <div className="mx-auto grid w-[90%] max-w-[1100px] grid-rows-[auto_1fr] items-center gap-[20px] md:grid-cols-[1fr_1fr] md:grid-rows-[1fr] md:gap-[100px]">
        <div>
          <h3 className="mb-2 text-[24px] font-medium">Our Founder</h3>
          <p className="mb-4">
            Joseph is a software solutions expert with a strong grasp of all
            things web. Joseph holds
          </p>
          <ul>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon
                icon={faScroll}
                className={`mr-2 text-[22px] text-[--primary-color]`}
              />
              <p className="m-0">
                A <strong>bachelor&apos;s degree in Computer Science</strong>.
              </p>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon
                icon={faGlobe}
                className={`mr-2 text-[22px] text-[--primary-color]`}
              />
              <p className="m-0">
                Nearly two years of work experience in{" "}
                <strong>fortune 200 enterprise software teams</strong>.
              </p>
            </li>
            <li className="mb-4 flex items-start">
              <FontAwesomeIcon
                icon={faStar}
                className={`mr-2 text-[22px] text-[--primary-color]`}
              />
              <p className="m-0">
                Over four years of experience as an independent contractor,
                achieving top-rated plus status on the global freelancing
                platform Upwork, representing their{" "}
                <strong>top 3% of talent</strong>, alongside a{" "}
                <strong>job-success score of 100%</strong>.
              </p>
            </li>
          </ul>
          <p>
            Joseph&apos;s passion for technology, art, and consumer behavior
            positions him to build solutions that connect deeply with your
            customers.
          </p>
        </div>
        <div className="row-start-1 justify-self-center">
          <Image
            src={JosephJPG}
            className="shadow-primary-shadow"
            height={310}
            width={350}
            alt={
              "Joseph Marella, founder of Boxhouse Consulting, wearing a peacoat, collared shirt, and standing in front of some evening overhead lights"
            }
          />
        </div>
      </div>
      <div className="mx-auto mt-[100px] grid w-[90%] max-w-[1100px] grid-rows-[auto_1fr] items-center gap-[20px] md:grid-cols-[1fr_1fr] md:grid-rows-[1fr] md:gap-[100px]">
        <div className="justify-self-center">
          <Image
            src={BoxhouseSystem}
            className="shadow-primary-shadow"
            height={321}
            width={321}
            alt={
              "An illustration showing the workflow of Boxhouse Consulting, taking great ideas, turning them into captivating designs, then resilient code, then remarkable growth for our clients."
            }
          />
        </div>
        <div>
          <h3 className="text-[24px] font-medium">Meet The Team</h3>
          <h4 className="text-[48px] font-bold text-[--primary-color]">404</h4>
          <p>
            Just kidding, we found what we&apos;re looking for, but Boxhouse is
            currently a <strong>hyper-efficient team of one</strong>. We&apos;re
            working to make a lot of clients very happy, so we intend to use
            this space down the road.
            <br />
            <br />
            But a team of one is pretty great. With every meeting, we come
            prepared with all of the knowledge and insight to bring your project
            from idea to reality. No communication breakdowns, no inefficiency -
            just <strong>great products</strong> delivered{" "}
            <strong>faster than ever</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWeSection;
