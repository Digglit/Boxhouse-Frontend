import Image from "next/image";
import Link from "next/link";
import formatLongDate from "../../utils/formatLongDate";

const HeroSecondaryPostElement = ({ post }) => {
  return (
    <Link href={`/blog/${post.Slug}`}>
      <div className="grid h-[100%] grid-cols-[1fr] bg-white shadow-primary-shadow duration-150 hover:scale-[101%] hover:bg-[#f8f8f8] md:grid-cols-[auto_1fr]">
        <div className="relative hidden md:block md:aspect-square">
          <Image
            src={`https://webapi.boxhouseconsulting.com${post.Image.url}`}
            alt="Hiring Freelancers"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="self-center p-4">
          <div className="border-l-[2px] border-l-[#004bfa] pl-2">
            <h2 className="text-[18px] font-bold">{post.Title}</h2>
            <p className="text-[14px] opacity-60">
              {formatLongDate(post.DateWritten)} | {post.Author}
            </p>
          </div>
          <p className="mt-3 line-clamp-2 text-[14px]">
            {post.PostBodyPreview}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HeroSecondaryPostElement;
