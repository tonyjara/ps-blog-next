import fs from "fs";
import { join } from "path";
import matter from "gray-matter"; // parses strings with front matter and converts to object
import { IPost } from "../interfaces/post";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  data.slug = slug;
  return { ...data, content };
}

export const getAllPosts = () => {
  const folder = "_posts/";
  const fileNames = fs.readdirSync(folder);
  const files = fileNames.map((fileName) => {
    const file = `${folder}${fileName}`;
    const fileContents = fs.readFileSync(file, "utf8");
    const { data, content } = matter(fileContents);
    data.slug = fileName.replace(".md", "");
    return { ...data, content };
  });
  return files as IPost[];
};
