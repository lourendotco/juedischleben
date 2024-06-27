import { newDB as deutsch } from "../newDB";
import Slug from "./slug";
import Menu from "../menu";

export default function Page({ params, arabic, turkish }) {
  
  const content = deutsch.find((x) => x.slug === params.slug);

  const bgColor = content.index ? "#B3C9DD" : "#DBE9F5"

  return (
    <div style={{backgroundColor: bgColor }} >
      <Menu slug={content.slug} bgColor={bgColor} />
      <Slug current={content} />
    </div>
  );
}

export async function generateStaticParams() {
  return deutsch.map((x) => ({ slug: x.slug }));
}