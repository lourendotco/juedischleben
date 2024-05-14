"use client";
import Menu from "./menu";
import { title } from "./fonts";
import Face from "../public/images/Personcard4.png";
import Face2 from "../public/images/Personcard2.png";
import Face3 from "../public/images/Personcard3.png";
import ExportedImage from "next-image-export-optimizer";
import { newDB } from "./newDB";
import BMBF from "../public/images/BMBF.png";
import Fona21 from "../public/images/Fona21.svg";
import Hfjs from "../public/images/hfjs.png";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const targetDivRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  return (
    <div className="bg-[#B3C9DD]">
      <Menu targetDivRefs={targetDivRefs} />
      <main>
        <section data-section="#B3C9DD" ref={targetDivRefs[0]}>
          <div className="grid grid-cols-5">
            <div
              className={
                "text-center text-6xl lg:text-[90px] xl:text-[120px] 2xl:text-[164px] font-semibold col-span-5 md:col-start-2 md:col-span-3 pt-8 lg:pb-5 z-10 " +
                title.className
              }
            >
              Jüdisch leben
            </div>
          </div>

          <div className=" px-5 grid grid-cols-3 grid-rows-1 md:grid-cols-5 gap-5 mt-7 lg:mt-10 pb-28 md:pb-10 lg:pb-0">
            <ExportedImage src={Face} className="w-full mt-10 md:mt-0" />
            <ExportedImage src={Face2} className="md:my-40 w-full z-10" />
            <div
              className={
                "col-span-3 md:col-span-2 z-10 mt-10 md:mt-0 order-last md:order-none"
              }
            >
              <p
                className={
                  "font-semibold lg:text-xl xl:text-2xl 2xl:text-4xl " +
                  title.className
                }
              >
                Wie leben Jüdinnen und Juden in Deutschland? Wie ist ihr
                Selbstverständnis? Welche Werte sind ihnen wichtig? Welchen
                Einfluss haben Religion und Tradition auf ihren Alltag? Wo
                erfahren sie Antisemitismus und wie gehen sie damit um?
              </p>
              <p className="mt-8 text-lg md:text-base xl:text-lg 2xl:text-[22px]">
                Die Texte und Videos dieser Webseite geben einen Einblick, wie
                Juden und Jüdinnen unterschiedlicher Herkunft, Prägung und
                Religiosität heute in Deutschland jüdisch leben. Wie
                praktizieren sie Schabbat und Feiertage, was ist ihr jüdisches
                Lieblingsessen, welche jüdischen Werte bringen sie in die
                Gesellschaft ein? So vielfältig wie die Persönlichkeiten sind
                auch die Antworten.
              </p>
            </div>
            <ExportedImage src={Face3} className="w-full mt-10 md:mt-0" />
          </div>
        </section>
        <section data-section="rgb(243 244 246)" ref={targetDivRefs[1]}>
          <div className="grid md:grid-cols-5 xl:grid-rows-2 xl:place-items-center bg-gray-100 px-5 gap-x-5 pt-8 lg:pt-0">
            <div className="md:row-span-2 col-span-3 md:col-span-2 md:pt-9 lg:pt-8 xl:py-6 z-10 w-full">
              {/* <ExportedImage
                src={TalmudPage}
                alt="Vilna edition of the Babylonian Talmud, Tractate Berachot, first page"
                className="absolute top-0 left-0"
              /> */}
              <video autoPlay muted loop>
                <source src={`/videos/diversity.mp4`} type="video/mp4" />
              </video>
            </div>
            <div className="col-span-3 flex flex-col gap-2 lg:gap-4 order-first md:order-none pt-5 md:pt-8 lg:pt-10 xl:pt-20 pl-2 md:pl-0">
              <p
                className={
                  "text-[22px] md:text-[20px] lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold " +
                  title.className
                }
              >
                Judentum ist seinem Wesen nach vielstimmig.
              </p>
              <p className="text-sm lg:text-base xl:text-lg 2xl:text-[22px] max-w-prose">
                In hebräischen Druckausgaben von biblischer Büchern und des Talmud steht ein
                Kerntext in der Mitte, und um ihn herum sind lauter Kommentare
                platziert. Das sind Anmerkungen zu sprachlichen Besonderheiten
                oder theologische Auslegungen oder religionsgesetzliche
                Erörterungen oder Polemiken verschiedener Art. Sie stammen von
                Rabbinern und Gelehrten (leider kaum Frauen darunter), die sich
                mit dem Text in der Mitte auseinandergesetzt haben, über
                Jahrtausende hinweg. Ihre Kommentare widerspiegeln ihre
                persönlichen Ansichten, die Zeitumstände, unter denen sie gelebt
                haben, ihr Bemühen, ein lebendiges Judentum zu gestalten. Ihre
                Äußerungen säumen den Text, als ob die Verfasser persönlich um
                einen Tisch säßen und die Trennung von Raum und Zeit aufgehoben
                wäre. Es gibt dabei nur ein Grundprinzip: Man kann sehr
                verschiedener Meinung sein, aber die Kommentare der anderen
                werden nicht ausgelöscht. Doch man kann den eigenen Kommentar
                dazu schreiben und darin die eigene Sichtweise darlegen. Auf
                diese Weise ergibt sich ein vielstimmiges, pluralistisches Bild,
                das viele Nuancen über das Judentum vermittelt.
              </p>
            </div>
            <div className="col-span-3 flex flex-col gap-2 lg:gap-4 mt-4 pb-5 pl-2 md:pl-0 lg:pt-6 lg:pb-20 xl:py-0">
              <p
                className={
                  "text-[22px] md:text-[20px] lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold " +
                  title.className
                }
              >
                Über das Projekt
              </p>
              <p className="text-sm lg:text-base xl:text-lg 2xl:text-[22px] max-w-prose">
                Diese Webseite ist das Ergebnis des Projekts „Ritualpraxis“ der
                Hochschule für Jüdische Studien Heidelberg, das Jessica Hösel
                und Rabbinerin Dr. Ulrike Offenberg im Rahmen des
                Forschungsnetzwerks Antisemitismus im 21. Jahrhundert von 2021
                bis 2024 durchgeführt haben. Die Texte, Videos und Analysen sind
                gedacht als Materialien für den Unterricht in der Schule und in
                der Erwachsenenbildung, für Workshops und Projektarbeit, um
                Judentum kennenzulernen und ja, auch um zu verstehen, wie sehr
                Antisemitismus das Leben von Jüdinnen und Juden in Deutschland
                beeinträchtigt.
              </p>
            </div>
          </div>
        </section>
        <section data-section="#DBE9F5" ref={targetDivRefs[2]}>
          <div
            className={`grid md:grid-cols-5 md:grid-rows-1 gap-x-5 px-5 bg-[#DBE9F5] min-h-screen py-6 lg:py-20 ${title.className}`}
          >
            <div className="border-y border-[#444444]/20 h-5 -mx-5 md:hidden mb-5"></div>
            {newDB.map((column, i) => (
              <div
                key={column.title}
                className="grid md:grid-rows-3 grid-cols-2 md:grid-cols-1 gap-x-5 md:gap-y-5 mt-3 md:mt-0"
              >
                <div className="col-span-2 md:hidden text-[22px] align-bottom leading-5 pl-3 -mt-5">
                  {column.title}
                </div>
                <div className="col-span-2 border-y border-[#444444]/20 h-5 -mx-5 md:hidden"></div>
                {column.children.map((item, j) => (
                  <Link
                    href={`${column.slug}#${item.slug}`}
                    key={item.title}
                    className="bg-gray-100 xl:h-[22rem] 2xl:h-[29rem] mb-5 md:mb-0"
                  >
                    <ExportedImage
                      width={360}
                      height={378}
                      src={`/images/persona_${item.cardImage}1.png`}
                      alt={item.title}
                    />
                    <p className="leading-5 lg:text-xl xl:text-[22px] 2xl:text-2xl font-semibold pl-1 lg:pl-3 pt-1">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </section>
        <div
          data-section="#B3C9DD"
          ref={targetDivRefs[3]}
          className="grid grid-flow-row md:flex gap-5 px-5 py-10 md:justify-around items-start md:items-stretch"
        >
          <div className={`flex flex-col bg-gray-100 p-4 md:mx-0 basis-1/6 grow z-10 ${title.className}`}>
            <div className="text-lg md:text-sm lg:text-lg xl:text-2xl 2xl:text-3xl mb-1 md:mb-6">
              Ein Forschungsprojekt der
            </div>
            <Link href="https://www.hfjs.eu/">
              <ExportedImage src={Hfjs} alt="HfJS" />
            </Link>
          </div>
          <div className={`bg-gray-100 flex flex-col p-4 md:mx-0 basis-1/6 grow z-10 ${title.className}`}>
            <div className="text-lg md:text-sm lg:text-lg xl:text-2xl 2xl:text-3xl">
              Teil des
            </div>
            <Link href="https://www.fona21.org/">
              <ExportedImage
                src={Fona21}
                alt="Fona21"
                className="-mt-2 md:mt-6"
              />
            </Link>
            <div className="mt-5 md:text-[8px] lg:text-xs text-gray-500">
              Forschungsnetzwerk Antisemitismus im 21. Jahrhundert
            </div>
          </div>
          <div className={`flex flex-col bg-gray-100 md:p-4 md:mx-0 basis-1/6 grow z-10 ${title.className}`}>
            <div className="text-lg md:text-sm lg:text-lg xl:text-2xl 2xl:text-3xl -mb-8 md:mb-0 pt-4 pl-4 md:pt-0 md:pl-0 ">
              Gefördert vom
            </div>
            <ExportedImage src={BMBF} alt="BMBF" />
          </div>
          <div className="basis-2/6 bg-gray-100 p-5 text-base md:text-xs lg:text-base xl:text-xl 2xl:text-2xl z-10">
            <p className={`text-lg md:text-sm lg:text-lg xl:text-2xl 2xl:text-3xl mb-2 ${title.className}`}>Impressum:</p>
            <p>Das Projekt Ritualpraxis wurde verantwortet von:</p>
            <p>Jessica Hösel und Rabbinerin Dr. Ulrike Offenberg</p>
            <p>Unter Leitung von Rabbinerin Prof. Dr. Birgit Klein</p>
            <p>Hochschule für Jüdische Studien Heidelberg</p>
            <p>Landfriedstraße 12, 69117 Heidelberg</p>
            <p className="mt-2"><span className={`text-lg md:text-sm lg:text-lg xl:text-2xl 2xl:text-3xl ${title.className}`}>Kontakt:</span> <a href="mailto:team@juedischleben.de">team@juedischleben.de</a></p>
          </div>
        </div>
      </main>
    </div>
  );
}
