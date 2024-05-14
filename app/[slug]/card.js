import Link from "next/link";
import { title } from "../fonts";
import { slugify } from "../helpers";

export default function Card({ content, index, slug }) {
  return (
    <div className="card-wrap">
      <div
        className={`font-bold text-[26px] md:text-lg lg:text-xl xl:text-3xl 2xl:text-5xl flex relative gap-5 cursor-pointer aspect-video card ${
          title.className
        } ${index ? "bg-[#DBE9F5]" : "bg-white"}`}
      >
        <div className="absolute flex items-end left-0 p-5 xl:p-7 h-full front">
          {content.title}
        </div>
        <div className="back absolute">
          <Link
            href={`/${slug}/${slugify(content.title)}`}
          >
            <video autoPlay muted loop>
              <source src={`/videos/${content.shortVideo}.mp4`} type="video/mp4" />
            </video>
          </Link>
        </div>
      </div>
    </div>
  );
}
