"use client"
import { title } from "@/app/fonts";
import { videoPages } from "@/app/newDB";
import { newDB } from "@/app/newDB";
import React, {useRef} from "react";
import Card from "../card";
import CookiePreference from "./cookiepreference";

export default function Content({ params }) {
  const content = videoPages.find((x) => x.contentSlug === params.content);
  const parent = newDB.find((x) => x.slug === params.slug);
  const end = useRef(null)
  return (
    <>
      <div className="px-5 pb-10 md:grid grid-cols-5 gap-5">
        <div className="col-span-5 -mx-5">
          <CookiePreference videoId={content.videoId} end={end} />
        </div>
        <div className="hidden md:block col-span-2 relative"></div>
        <div className="md:col-span-3 pr-2">
          <div
            className={`text-[32px] leading-9 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold ${title.className} pt-6 md:pt-10 pb-4 md:pb-6`}
          >
            {content?.title}
          </div>
          <div
            className={`text-xl lg:text-lg lg:leading-5 xl:text-xl 2xl:text-2xl md:font-semibold ${title.className} xl:w-2/3 md:pb-4`}
          >
            {content?.text}
          </div>
          {content?.longText?.map((x, i) => (
            <div
              key={`p` + i}
              className="pt-4 md:text-sm lg:text-base xl:text-lg 2xl:text-2xl md:font-semibold"
            >
              {x}
            </div>
          ))}
        <div ref={end}></div>
        </div>
        {parent.children.map((subCategory) => {
          const related = subCategory.content.filter(
            (cardContent) =>
              cardContent.type === "video" &&
              cardContent.title !== content.title
          );
          if (related.length === 0) return;
          return (
            <React.Fragment key={subCategory.slug}>
              <div
                className={`col-span-5 -mx-5 my-5 border-y border-[#444444]/20 px-6 ${title.className} text-xl lg:text-lg xl:text-xl 2xl:text-2xl`}
              >
                {subCategory.title}
              </div>
              <div className="col-span-5 place-self-end w-full flex flex-col md:flex-row flex-wrap justify-end gap-5">
                {related.map((cardContent) => {
                  return (
                    <div
                      key={cardContent.videoId}
                      className="w-full md:w-[30%]"
                    >
                      <Card
                        content={cardContent}
                        index={1}
                        slug={params.slug}
                      />
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
