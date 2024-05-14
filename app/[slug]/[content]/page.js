import { videoPages } from "@/app/newDB";
import Content from "./content";
import Menu from "@/app/menu";

export default function Page({ params }) {
  return (
    <>
        <Menu slug={params.slug} bgColor={"white"}  />
        <Content params={params} />
    </>
  );
}

export async function generateStaticParams() {
  return videoPages.map((x) => {
    return { slug: x.slugSlug, content: x.contentSlug };
  });
}
