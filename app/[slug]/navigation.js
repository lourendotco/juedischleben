import Link from "next/link"
import { db } from "../db";
import { navigation } from "../fonts";


export default function Navigation ({current}) {

    return (
        <nav className={"navbar text-5xl pl-3 pt-3 w-full flex gap-0 flex-wrap font-thin fixed pb-5 justify-end md:pr-6 pr-4 bg-gradient-to-b from-white from-90% z-20" + " " + navigation.className}>
        {Object.keys(db).map((x) => (
          <Link
            href={x}
            key={x}
            className={x != current ? "text-sky-100 hover:text-black" : ""}
          >
            {/* text-zinc-300 */}
            {db[x].title}
          </Link>
        ))}
      </nav>
    )   
}