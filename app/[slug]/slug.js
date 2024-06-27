import { title } from "../fonts";
import Card from "./card";

export default function Slug({ current }) {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-5 -mx-5 px-5 lg:h-14 xl:h-16 2xl:h-20 w-full"></div>
      {current.children.map((subCategory) => {
        return (
          <div key={subCategory.Title} className="px-5">
            <div id={subCategory.slug} className=" -mt-8 pt-8 sm:mt-[-10rem] sm:pt-[10rem] 2xl:-mt-56 2xl:pt-56"/>
            <div className="grid md:grid-cols-5 mt-5 gap-5 border-y border-[#444444]/20 -mx-5 pl-3 md:px-5 lg:py-2.5 xl:py-5 ">
              <div
                className={
                  "font-bold text-[22px] md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl px-5 col-span-5 z-10 " +
                  title.className
                }
              >
                {subCategory.title}
              </div>
            </div>
            {subCategory.title === "Bericht" ? (
              <div className="md:grid md:grid-cols-5 md:-mx-5 gap-5 md:text-sm xl:text-lg 2xl:text-2xl pb-5 md:pb-[7vh] z-10 px-2 pt-4 md:p-5">
                {subCategory.content
                    .filter((x) => x.type === "intro")
                    .map((x) => x.text)}
              </div>
            ) : (
              <div className="md:grid md:grid-cols-5 gap-5">
                <div className="md:col-span-3 lg:col-span-2 max-w-prose md:text-sm xl:text-lg 2xl:text-2xl pb-5 md:pb-[7vh] z-10 px-2 pt-4 md:p-5">
                  {subCategory.content
                    .filter((x) => x.type === "intro")
                    .map((x) => x.text)}
                </div>
                <div className="md:col-span-2 lg:col-span-3 grid lg:grid-cols-2 gap-4 md:gap-5 md:p-5">
                  {subCategory.content.map((content) => {
                    if (content.type !== "video") return;
                    return (
                      <Card
                        key={content.videoId}
                        content={content}
                        index={current.index}
                        slug={current.slug}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className="h-20 md:hidden"></div>
    </div>
  );
}
