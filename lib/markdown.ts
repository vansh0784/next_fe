import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
};

const contentDirectory = path.join(process.cwd(), "content");

export async function getPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    metadata: data,
    content: processedContent.toString(),
  };
}

export function getAllPosts(): Post[] {
  const posts: Post[] = [];

  function scanDirectory(directory: string, prefix = "") {
    const entries = fs.readdirSync(directory, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);

      // If it's a folder, recursively scan it
      if (entry.isDirectory()) {
        const newPrefix = prefix ? `${prefix}/${entry.name}` : entry.name;

        scanDirectory(fullPath, newPrefix);
      }

      // If it's a Markdown file, process it
      if (entry.isFile() && entry.name.endsWith(".md")) {
        const fileContent = fs.readFileSync(fullPath, "utf8");

        const { data } = matter(fileContent);

        const fileName = entry.name.replace(/\.md$/, "");

        const slug = prefix ? `${prefix}/${fileName}` : fileName;

        posts.push({
          slug,
          title: data.title ?? fileName,
          description: data.description ?? "",
          category: data.category ?? "",
        });
      }
    }
  }

  scanDirectory(contentDirectory);

  return posts;
}
