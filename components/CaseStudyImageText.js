import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const CaseStudyImageText = ({
  image,
  altText,
  title,
  body,
  imagePosition,
  className,
}) => {
  const [imageToEnlarge, setImageToEnlarge] = useState(null);
  const shouldCarouselDisplay = Array.isArray(image);
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
      className={`grid grid-rows-[auto_1fr] md:grid-rows-1 ${
        imagePosition === "left"
          ? "md:grid-cols-[auto_1fr]"
          : "md:grid-cols-[1fr_auto]"
      } ${imagePosition === "left" ? "lg:relative lg:-left-10" : ""} mt-[30px] w-[100%] md:mt-0 ${className ? className : ""} `}
    >
      {imageToEnlarge && (
        <div
          className="fixed left-0 top-0 z-[1000] grid h-[100vh] w-[100%] touch-none grid-rows-[1fr_auto] bg-white"
          onClick={() => setImageToEnlarge(null)}
        >
          <TransformWrapper wheel={{ smoothStep: 0.02 }}>
            <TransformComponent>
              <div className="grid h-[calc(100vh-44px)] w-[100vw] items-center bg-white">
                <div className="relative m-auto aspect-[16/9] w-[100vw]">
                  <Image
                    src={imageToEnlarge}
                    alt={altText}
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
      {image && shouldCarouselDisplay ? (
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
          className="w-[100%] !p-[30px]"
        >
          {image.map((image, index) => (
            <SwiperSlide
              key={index}
              className="relative aspect-[16/9] w-[100%] select-none py-[30px]"
            >
              <button
                className="absolute right-[10px] top-[10px] z-20 grid h-[30px] w-[30px] select-none items-center justify-items-center border-[1px] border-[#004BFA] bg-white shadow-xl"
                onClick={() => setImageToEnlarge(image.src)}
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlassPlus}
                  className="text-lg text-[#004BFA]"
                />
              </button>
              <Image
                src={image.src}
                alt={altText[index]}
                className="shadow-lg"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  aspectRatio: "16/9",
                }}
                sizes={"(max-width: 900px) 100vw, 50vw"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        image && (
          <div
            className={`row-start-1 self-center justify-self-center ${imagePosition === "left" ? "col-start-1" : "md:col-start-2"} relative w-[100%] max-w-[650px] md:w-[40vw]`}
          >
            <div className="relative m-auto aspect-[16/9] w-[100%]">
              <Image
                src={image}
                alt={altText}
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
              className="absolute right-[10px] top-[10px] grid h-[35px] w-[35px] items-center justify-items-center border-[1px] border-[#004BFA] bg-white shadow-xl md:h-[40px] md:w-[40px]"
              onClick={() => setImageToEnlarge(image)}
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
        className={` ${
          shouldCarouselDisplay
            ? "col-start-1"
            : imagePosition === "left"
              ? "md:col-start-2"
              : "col-start-1"
        } self-center ${imagePosition && !shouldCarouselDisplay ? "md:w-[90%]" : ""} ${imagePosition === "left" ? "justify-self-end" : ""} `}
      >
        <div className="mb-[20px] grid grid-cols-[10px_1fr] items-center">
          <div className="mr-[5px] h-[30px] w-[3px] bg-[#004BFA]" />
          <h2 className="text-2xl font-medium">{title}</h2>
        </div>
        {body}
      </div>
    </div>
  );
};

export default CaseStudyImageText;
