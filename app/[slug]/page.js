import { newDB } from "../newDB";
import Slug from "./slug";
import Menu from "../menu";

export default function Page({ params }) {
  const content = newDB.find((x) => x.slug === params.slug);

  const bgColor = content.index ? "#B3C9DD" : "#DBE9F5"

  return (
    <div style={{backgroundColor: bgColor }} >
      <Menu slug={content.slug} bgColor={bgColor} />
      <Slug current={content} />
    </div>
  );
}

export async function generateStaticParams() {
  return newDB.map((x) => ({ slug: x.slug }));
}