{
  /* eslint-disable @next/next/no-img-element */
}
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const CaseStudyImageText = (props, ref) => {
  const [imageToEnlarge, setImageToEnlarge] = useState(null);
  const shouldCarouselDisplay = Array.isArray(props.image);
  const imgRef = useRef();

  useEffect(() => {
    if (imageToEnlarge) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [imageToEnlarge]);

  return (
    <div
      className={`
      grid
      grid-rows-[auto_1fr] md:grid-rows-1
      ${
        props.imagePosition === "left"
          ? "md:grid-cols-[auto_1fr]"
          : "md:grid-cols-[1fr_auto]"
      }
      ${props.imagePosition === "left" ? "lg:relative lg:-left-10" : ""}
      w-[100%]
      mt-[30px] md:mt-0
      ${props.className ? props.className : ""}
      `}
    >
      {imageToEnlarge && (
        <div
          className="fixed top-0 left-0 w-[100%] h-[100vh] bg-white z-[1000] touch-none grid grid-rows-[1fr_auto]"
          onClick={() => setImageToEnlarge(null)}
        >
          <TransformWrapper wheel={{ smoothStep: 0.02 }}>
            <TransformComponent>
              <div className="h-[calc(100vh-44px)] w-[100vw] bg-white grid items-center">
                <div className="relative w-[100vw] aspect-[16/9] m-auto">
                  <Image
                    src={imageToEnlarge}
                    alt={"zooming in on this"}
                    ref={imgRef}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    sizes={"100vw"}
                  />
                </div>
              </div>
            </TransformComponent>
          </TransformWrapper>
          <p className="w-[100%] bg-white py-[10px] text-center">
            Select anywhere to close
          </p>
        </div>
      )}
      {props.image && shouldCarouselDisplay ? (
        <Swiper
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination]}
          pagination={true}
          className="!p-[30px] w-[100%]"
        >
          {props.image.map((image, index) => (
            <SwiperSlide
              key={index}
              className="py-[30px] select-none relative w-[100%] aspect-[16/9]"
            >
              <button
                className="absolute top-[10px] right-[10px] h-[30px] w-[30px] bg-white border-[1px] shadow-xl border-[#004BFA] grid items-center justify-items-center select-none z-20"
                onClick={() => setImageToEnlarge(image.src)}
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlassPlus}
                  className="text-lg text-[#004BFA]"
                />
              </button>
              <Image
                src={image.src}
                alt={`${props.title} ${index}`}
                className="shadow-lg"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  aspectRatio: "4/3",
                }}
                sizes={"(max-width: 900px) 100vw, 50vw"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        props.image && (
          <div
            className={`
            justify-self-center
            self-center
            row-start-1
            ${props.imagePosition === "left" ? "col-start-1" : "md:col-start-2"}
            relative
            w-[100%] md:w-[40vw] lg:w-[50vw]
            max-w-[650px]
            `}
          >
            <div className="relative w-[100%] aspect-[4/3] m-auto">
              <Image
                src={props.image}
                alt={props.title}
                fill
                style={{
                  layout: "fill",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                sizes={"(max-width: 768px) 100vw, 50vw"}
              />
            </div>
            <button
              className="
            absolute
            top-[10px]
            right-[10px]
            h-[35px] md:h-[40px]
            w-[35px] md:w-[40px]
            bg-white
            border-[1px]
            shadow-xl
            border-[#004BFA]
            grid
            items-center
            justify-items-center
            "
              onClick={() => setImageToEnlarge(props.image)}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlassPlus}
                className="text-xl text-[#004BFA]"
              />
            </button>
          </div>
        )
      )}

      {/* Text Wrapper */}
      <div
        className={`
        ${
          shouldCarouselDisplay
            ? "col-start-1"
            : props.imagePosition === "left"
            ? "md:col-start-2"
            : "col-start-1"
        }
        self-center
        ${props.imagePosition && !shouldCarouselDisplay ? "md:w-[90%]" : ""}
        ${props.imagePosition === "left" ? "justify-self-end" : ""}
        `}
      >
        <div className="grid grid-cols-[10px_1fr] items-center mb-[20px]">
          <div className="w-[3px] h-[30px] bg-[#004BFA] mr-[5px]" />
          <h2 className="text-2xl font-medium">{props.title}</h2>
        </div>
        {props.body}
      </div>
    </div>
  );
};

export default CaseStudyImageText;
