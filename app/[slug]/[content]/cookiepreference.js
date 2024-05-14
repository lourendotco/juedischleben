"use client";

import Cookie from "../../../public/images/cookie.png";
import { getPreference, setLocalPreference } from "@/app/helpers";
import { Video } from "./video";
import ExportedImage from "next-image-export-optimizer";
import { title } from "@/app/fonts";
import { useEffect, useRef, useState } from "react";

export default function CookiePreference({ videoId, end }) {
  const [preference, setPreference] = useState(getPreference());
  const [sided, setSided] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    if (window.screen.width < 768) return
    const containerTop = container.current?.offsetTop || 0;
    const containerHeight = container.current?.offsetHeight - 150 || 0;
    const bottom = end.current?.offsetTop - 220 || 0;

    const handleScroll = () => {
      if (window.scrollY >= containerTop + containerHeight && window.scrollY < bottom ) {
        setSided(true);
      } else {
        setSided(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [container, end]);

  const setCookie = (
    <div className="flex flex-col justify-center items-center gap-5 p-3 h-full">
      <ExportedImage src={Cookie} className="max-w-[5vw]" />
      <div className="">
        <p className={`text-2xl lg:text-3xl font-bold ${title.className}`}>
          Erlauben Sie „YouTube.com“, Cookies zu verwenden
        </p>
        <p className="text-xl lg:text-2xl">
          Sie können nicht auf Videos zugreifen, wenn die erforderlichen Cookies
          deaktiviert sind. Datenschutzerklärung
        </p>
      </div>
      <button
        className={`bg-[#B3C9DD] text-sm md:text-lg lg:text-xl drop-shadow-lg rounded-lg px-5 md:py-1 z-10  ${title.className} font-normal`}
        type="button"
        onClick={() => {
          setPreference(true);
          setLocalPreference();
        }}
      >
        Akzeptieren
      </button>
    </div>
  );

  return (
    <>
      <div
        ref={container}
        className={`w-full h-[56vw] ${sided ? "" : "relative"}`}
      >
        <div
          className={`w-full px-5 ${
            sided ? "grid grid-cols-5 gap-5 fixed" : undefined
          }`}
        >
          <div className="col-span-2 z-50">
            <div className="aspect-video w-full h-full bg-gray-100">
              {preference ? <Video videoId={videoId} /> : setCookie}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
