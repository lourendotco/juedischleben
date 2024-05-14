import { db } from "./db";
import { slugify } from "./helpers";

export const newDB = db.reduce((acc, cur) => {
  if (!acc.some((p) => p.title === cur.parent)) {
    acc.push({
      title: cur.parent,
      index: acc.length % 2,
      slug: cur.parent.replace(/\s/g, '-'),
      children: [cur],
    });
  } else {
    acc.find((p) => p.title === cur.parent).children.push(cur);
  }
  return acc;
}, []);

export const videoPages = db.reduce((acc, cur) => {
  if (!acc.some((p)=> p.title === cur.parent)) {
    cur.content.forEach(el => {
     if (el.type !== 'video') return 
     acc.push({
      slugSlug: cur.parent.replace(/\s/g, '-'),
      contentSlug: slugify(el.title),
      ...el
    })
    })
  }
  return acc
}, [])
