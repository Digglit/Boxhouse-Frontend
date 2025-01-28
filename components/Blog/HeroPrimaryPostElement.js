import Image from "next/image";
import Link from "next/link";
import formatLongDate from "../../utils/formatLongDate";

const HeroPrimaryPostElement = ({ post }) => {
  return (
    <Link href={`/blog/${post.Slug}`}>
      <div className="grid grid-rows-[auto_1fr] bg-white shadow-primary-shadow duration-150 hover:scale-[101%] hover:bg-[#f8f8f8]">
        <div className="relative h-[150px] w-[100%] md:h-[200px]">
          <Image
            src={`https://webapi.boxhouseconsulting.com${post.Image.url}`}
            alt={post.Image.alternativeText}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              aspectRatio: "16/9",
            }}
            sizes={"(max-width: 768px) 95vw, 36vw"}
            priority
          />
        </div>
        <div className="self-center px-4 py-5">
          <div className="border-l-[2px] border-l-[#004BFA] pl-2">
            <h2 className="text-[18px] font-bold md:text-[20px]">
              {post.Title}
            </h2>
            <p className="text-[14px] opacity-60">
              {formatLongDate(post.DateWritten)} | {post.Author}
            </p>
          </div>
          <p className="pb-5 pt-4 text-[14px]">{post.PostBodyPreview}</p>
          <button className="primaryButton w-[200px]">Read More</button>
        </div>
      </div>
    </Link>
  );
};

export default HeroPrimaryPostElement;
