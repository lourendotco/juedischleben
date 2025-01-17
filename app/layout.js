import { Anek_Latin } from "next/font/google";
import { title } from "./fonts";
import "./globals.css";

export const body = Anek_Latin({
  display: "swap",
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata = {
  title: "Jüdisch leben",
  description: `Wie leben Jüdinnen und Juden in Deutschland? Wie ist ihr Selbstverständnis? Welche Werte sind ihnen wichtig? Welchen Einfluss haben Religion und Tradition auf ihren Alltag? Wo erfahren sie Antisemitismus und wie gehen sie mit ihm um? Die Texte und Videos dieser Webseite geben einen Einblick, wie Juden und Jüdinnen unterschiedlicher Herkunft, Prägung und Religiosität heute in Deutschland jüdisch leben. Wie praktizieren sie Schabbat und Feiertage, was ist ihr jüdisches Lieblingsessen, welche jüdischen Werte bringen sie in die Gesellschaft ein? So vielfältig wie die Persönlichkeiten sind auch die Antworten.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${body.className} overflow-x-hidden`}>
        <div className="w-full h-full pointer-events-none fixed top-0 grid grid-cols-2 md:grid-cols-5 px-5 gap-5">
          <div className="border border-[#444444]/20"></div>
          <div className="border border-[#444444]/20"></div>
          <div className="hidden md:block border border-[#444444]/20"></div>
          <div className="hidden md:block border border-[#444444]/20"></div>
          <div className="hidden md:block border border-[#444444]/20"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
