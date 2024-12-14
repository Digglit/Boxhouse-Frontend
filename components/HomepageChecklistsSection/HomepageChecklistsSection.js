"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCheck,
  faPalette,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Home.module.css";
import { register } from "swiper/element/bundle";
import { useEffect } from "react";

const CardListItem = ({ title, paragraph }) => {
  return (
    <li className="mb-5 grid grid-cols-[auto_1fr] grid-rows-[auto_auto] items-center gap-x-5">
      <div className="col-start-1 row-start-1 row-end-3 grid items-center bg-[--primary-color] p-1">
        <FontAwesomeIcon icon={faCheck} className="text-[14px] text-white" />
      </div>
      <h3 className="text-[20px] font-medium">{title}</h3>
      <p className="text-[14px] opacity-60">{paragraph}</p>
    </li>
  );
};

const Card = ({ icon, title, subtitle, listItems }) => {
  return (
    <div className="relative grid h-[100%] w-fit bg-white p-7 shadow-xl md:p-10">
      <div className="self-center">
        <div className="relative z-10 mb-8 grid grid-cols-[auto_1fr] grid-rows-[auto_auto] items-center gap-x-5 gap-y-1">
          <FontAwesomeIcon
            icon={icon}
            className="col-start-1 row-start-1 row-end-3 text-[40px] text-[--primary-color]"
          />
          <h2 className="text-[28px] font-medium">{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="relative z-10">
          <ul className="list-none">
            {listItems.map((item, index) => (
              <CardListItem
                key={`CardListItem-${title}-${index}`}
                title={item.title}
                paragraph={item.paragraph}
              />
            ))}
          </ul>
        </div>
        <div className={styles.homepageCardTriangle} />
      </div>
    </div>
  );
};

const HomepageChecklistsSection = () => {
  useEffect(() => {
    register();
    const swiperEl = document.querySelector("swiper-container");

    if (swiperEl) {
      // swiper parameters
      const swiperParams = {
        spaceBetween: 10,
        slidesPerView: "auto",
        breakpoints: {
          0: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 30,
          },
        },
        longSwipes: false,
      };

      // now we need to assign all parameters to Swiper element
      Object.assign(swiperEl, swiperParams);

      // and now initialize it
      swiperEl.initialize();
    }
  }, []);

  return (
    <section className="grid w-[100%] bg-[--background-color] py-[60px] md:py-[100px]">
      <swiper-container className="mx-auto w-[100%] max-w-[1260px] pl-[20px] pr-[20px] lg:pl-0 lg:pr-0">
        <swiper-slide className="!w-[85vw] !max-w-[400px]">
          <Card
            icon={faCode}
            title="Our Code"
            subtitle="Engineered to last."
            listItems={[
              {
                title: "Secure",
                paragraph: "Protecting you and your customers",
              },
              {
                title: "Stable",
                paragraph:
                  "Reliable and consistent for your business to succeed",
              },
              {
                title: "Scalable",
                paragraph: "Ready to grow alongside your business",
              },
              {
                title: "Compliant",
                paragraph: "We know the rules so you don't have to",
              },
            ]}
          />
        </swiper-slide>
        <swiper-slide className="!w-[85vw] !max-w-[400px]">
          <Card
            icon={faPalette}
            title="Our Design"
            subtitle="Designed for everyone."
            listItems={[
              {
                title: "Engaging",
                paragraph:
                  "Visually captivating for a smooth customer experience",
              },
              {
                title: "Responsive",
                paragraph: "Ready to be used on every device",
              },
              {
                title: "Accessible",
                paragraph:
                  "Support handicapped communities with accessible software",
              },
              {
                title: "Hierarchical",
                paragraph:
                  "Clear visual flow for easily digestible information",
              },
            ]}
          />
        </swiper-slide>
        <swiper-slide className="!w-[85vw] !max-w-[400px]">
          <Card
            icon={faBuilding}
            title="Our Business"
            subtitle="Built for you."
            listItems={[
              {
                title: "Communication",
                paragraph: "Keeping you informed is our top priority",
              },
              {
                title: "Trust",
                paragraph:
                  "Transparency keeps you updated on where we use your hard-earned dollars",
              },
              {
                title: "Consistency",
                paragraph:
                  "Regular interactions to ensure what we build is what you need and love",
              },
              {
                title: "Results",
                paragraph: "We deliver excellent results to help you grow",
              },
            ]}
          />
        </swiper-slide>
      </swiper-container>
    </section>
  );
};

export default HomepageChecklistsSection;
