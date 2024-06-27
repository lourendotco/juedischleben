"use client";
import { title } from "@/app/fonts";
import { videoPages } from "@/app/newDB";
import { newDB } from "@/app/newDB";
import React, { useRef } from "react";
import Card from "../card";
import CookiePreference from "./cookiepreference";

export default function Content({ params }) {
  console.log(params.content)
  const content = videoPages.find((x) => x.contentSlug === params.content);
  const parent = newDB.find((x) => x.slug === params.slug);
  const end = useRef(null);

  return (
    <>
      <div className="px-5 pb-10 md:grid grid-cols-5 gap-5 bg-[#f5f5f5]">
        <div className="col-span-5 -mx-5">
          <CookiePreference videoId={content.videoId} end={end} />
        </div>
        <div className="md:col-start-3 md:col-span-3 z-10">
          <div
            className={`text-[32px] leading-9 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold ${title.className} pt-6 md:pt-10 pb-4 md:pb-6 pr-2`}
          >
            {content?.title}
          </div>
          <div
            className={`text-xl lg:text-lg lg:leading-5 xl:text-xl 2xl:text-2xl md:font-semibold ${title.className} xl:w-2/3 md:pb-4 pr-2`}
          >
            {content?.text}
          </div>
          {content?.longText?.map((x, i) => (
            <div
              key={`p` + i}
              className="pt-4 md:text-sm lg:text-base xl:text-lg 2xl:text-2xl md:font-semibold pr-2"
            >
              {x}
            </div>
          ))}
          <div className="w-full grid grid-cols-3 gap-5">
            <a href={`/pdfs/hand-outs/ar/${params.content}.pdf`}
              className={`mt-5 col-span-3 md:col-span-1 md:col-start-1 p-1 rounded-2xl text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl shadow-lg active:shadow-none border border-[#d2d2d2] w-full text-center  ${title.className}`}
            >
              معلومات إضافية للتحميل
            </a>
            <a href={`/pdfs/hand-outs/${params.content}.pdf`}
              className={`mt-5 col-span-3 md:col-span-1 md:col-start-2 p-1 rounded-2xl text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl shadow-lg active:shadow-none border border-[#d2d2d2] w-full text-center  ${title.className}`}
            >
              als PDF speichern
            </a>
            <a href={`/pdfs/hand-outs/tr/${params.content}.pdf`}
              className={`mt-5 col-span-3 md:col-span-1 md:col-start-3 p-1 rounded-2xl text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl shadow-lg active:shadow-none border border-[#d2d2d2] w-full text-center  ${title.className}`}
            >
              İndirmek için ek bilgiler
            </a>
          </div>
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
            <div className="col-span-5" key={subCategory.slug}>
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
            </div>
          );
        })}
      </div>
    </>
  );
}
