import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentType = "blog" | "projects";

export type Frontmatter = {
  title: string;
  date: string;
  description: string;
  slug: string;
  tags: string[];
};

export type ContentItem = Frontmatter & {
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

function toFrontmatter(data: Record<string, unknown>, fallbackSlug: string): Frontmatter {
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "");
  return {
    title: String(data.title ?? fallbackSlug),
    date,
    description: String(data.description ?? ""),
    slug: String(data.slug ?? fallbackSlug),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
  };
}

function readAll(type: ContentType): ContentItem[] {
  const dir = path.join(CONTENT_DIR, type);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { ...toFrontmatter(data, file.replace(/\.mdx$/, "")), content };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAll(type: ContentType): Frontmatter[] {
  return readAll(type).map(({ title, date, description, slug, tags }) => ({ title, date, description, slug, tags }));
}

export function getBySlug(type: ContentType, slug: string): ContentItem | undefined {
  return readAll(type).find((item) => item.slug === slug);
}

export const getPosts = () => getAll("blog");
export const getPost = (slug: string) => getBySlug("blog", slug);
export const getProjects = () => getAll("projects");
export const getProject = (slug: string) => getBySlug("projects", slug);
