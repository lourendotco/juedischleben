"use client";

import Link from "next/link";
import { newDB } from "./newDB";
import { title } from "./fonts";
import { useEffect, useState, useRef } from "react";
import arrow from "../public/images/menubutton.png";
import ExportedImage from "next-image-export-optimizer";

export default function Menu({ slug, targetDivRefs, bgColor }) {
  const [headerColor, setHeaderColor] = useState(bgColor || "#B3C9DD");
  const [open, setOpen] = useState(false);
  const header = useRef(null);

  useEffect(() => {
    if (!targetDivRefs) return;
    let direction = "up";
    let prevYPosition = 0;

    const getTargetSection = (target) => {
      if (direction === "up") return target;
      if (target.nextElementSibling) {
        return target.nextElementSibling;
      } else {
        return target;
      }
    };

    const shouldUpdate = (entry) => {
      if (direction === "down" && !entry.isIntersecting) return true;
      if (direction === "up" && entry.isIntersecting) return true;
      return false;
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (window.scrollY > prevYPosition) {
          direction = "down";
        } else {
          direction = "up";
        }
        prevYPosition = window.scrollY;

        if (prevYPosition === 0) return;
        if (!shouldUpdate(entry)) return;

        const target = getTargetSection(entry.target);

        setHeaderColor(target.dataset.section);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
      rootMargin: `${header.current.offsetHeight * -1}px`,
    });

    targetDivRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      targetDivRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [header, targetDivRefs]);

  const menu = newDB.map((x) => (
    <div
      key={x.title}
      className={`${
        x.slug === slug
          ? "font-bold"
          : "hover:font-bold"
      } md:text-sm lg:text-lg xl:text-2xl 2xl:text-4xl my-5 md:my-0 -mx-5 md:mx-0 pt-5 md:py-2 xl:py-5 2xl:py-10 md:border-x border-y md:border-y-0 border-[#444444]/20 ${title.className} ${open ? "" : "hidden md:block"}`}
    >
      <Link href={`/${x.slug}`}>{x.title}</Link>
    </div>
  ));

  return (
    <>
      <div
        ref={header}
        style={{ backgroundColor: headerColor }}
        className={
          "px-5 md:grid grid-cols-5 items-center text-center w-full fixed top-0 text-2xl font-medium gap-x-5 z-20 border-[#444444]/20  " +
          title.className
        }
      >
        <div className={`w-full h-full grid-cols-2 px-5 -mx-5 gap-5 pointer-events-none absolute md:hidden ${open ? "hidden" : "grid"}`}>
              <div className="border-x border-[#444444]/20"></div>
              <div className="border-x border-[#444444]/20"></div>
            </div>
        {bgColor && (
          <>
            <div className="hidden md:grid grid-cols-5 col-span-5 border-y border-[#444444]/20 -mx-5 px-5 gap-5 ">
              <Link href="/">
                <div className="md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl py-2 xl:py-5 font-bold border-x border-[#444444]/20 ">
                  Jüdisch leben
                </div>
              </Link>
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
            </div>
            <div className="hidden md:grid grid-cols-5 col-span-5 border-b border-[#444444]/20 -mx-5 px-5 gap-5 h-5">
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
            </div>
          </>
        )}
        <Link href="\"
          className={`block text-2xl my-5 -mx-5 pt-5 border-b border-[#444444]/20 md:hidden ${
            slug
              ? "hover:font-bold"
              : "font-bold"
          } ${
            open ? "" : "hidden"
          }`}
        >
          Home
        </Link>
        {menu}
        <div
          className={`md:hidden -mx-5 border-t border-[#444444]/20 flex justify-center ${
            open ? "mt-5 pt-6 pb-4" : "py-4"
          }`}
        >
          <ExportedImage
            src={arrow}
            onClick={() => {
              setOpen(!open);
            }}
            className={open ? "rotate-180" : ""}
          />
        </div>
        <div className="col-span-5 hidden md:grid grid-cols-5 gap-5 border-y -mx-5 px-5 border-[#444444]/20">
          <div className="border-x border-[#444444]/20 h-5 z-20 bg-inherit"></div>
          <div className="border-x border-[#444444]/20 h-5 z-20 bg-inherit"></div>
          <div className="border-x border-[#444444]/20 h-5 z-20 bg-inherit"></div>
          <div className="border-x border-[#444444]/20 h-5 z-20 bg-inherit"></div>
          <div className="border-x border-[#444444]/20 h-5 z-20 bg-inherit"></div>
        </div>
      </div>

      {/* transparent below "invisible" remove ref and style props from first div */}
      <div
        className={
          "px-5 md:grid grid-cols-5 items-center text-center w-full invisible top-0 text-2xl font-medium gap-x-5 z-20 border-[#444444]/20  " +
          title.className
        }
      >
        <div className={`w-full h-full grid-cols-2 px-5 -mx-5 gap-5 pointer-events-none absolute md:hidden ${open ? "hidden" : "grid"}`}>
              <div className="border-x border-[#444444]/20"></div>
              <div className="border-x border-[#444444]/20"></div>
            </div>
        {bgColor && (
          <>
            <div className="hidden md:grid grid-cols-5 col-span-5 border-y border-[#444444]/20 -mx-5 px-5 gap-5 ">
                <div className="md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl py-2 xl:py-5 font-bold border-x border-[#444444]/20 ">
                  Jüdisch leben
                </div>
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
            </div>
            <div className="hidden md:grid grid-cols-5 col-span-5 border-b border-[#444444]/20 -mx-5 px-5 gap-5 h-5">
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
              <div className="border-x border-[#444444]/20 "></div>
            </div>
          </>
        )}
        <Link href="\"
          className={`block text-2xl my-5 -mx-5 pt-5 border-b border-[#444444]/20 md:hidden ${
            slug
              ? "hover:font-bold"
              : "font-bold"
          } ${
            open ? "" : "hidden"
          }`}
        >
          Home
        </Link>
        {menu}
        <div
          className={`md:hidden -mx-5 border-t border-[#444444]/20 flex justify-center ${
            open ? "mt-5 pt-6 pb-4" : "py-4"
          }`}
        >
          <ExportedImage
            src={arrow}
            onClick={() => {
              setOpen(!open);
            }}
            className={open ? "rotate-180" : ""}
          />
        </div>
        <div className="col-span-5 hidden md:grid grid-cols-5 gap-5 border-y -mx-5 px-5 border-[#444444]/20">
          <div className="border-x border-[#444444]/20 h-5 z-20 bg-inherit"></div>
          <div className="border-x border-[#444444]/20 h-5 z-20 bg-inherit"></div>
          <div className="border-x border-[#444444]/20 h-5 z-20 bg-inherit"></div>
          <div className="border-x border-[#444444]/20 h-5 z-20 bg-inherit"></div>
          <div className="border-x border-[#444444]/20 h-5 z-20 bg-inherit"></div>
        </div>
      </div>
      {/* hidden above */}
    </>
  );
}
