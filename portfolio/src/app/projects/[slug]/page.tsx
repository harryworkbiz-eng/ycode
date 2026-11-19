import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MdxArticle from "@/components/MdxArticle";
import { getAll, getBySlug } from "@/lib/content";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return getAll("projects").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getBySlug("projects", slug);
  return item ? { title: item.title, description: item.description } : {};
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const item = getBySlug("projects", slug);
  if (!item) notFound();

  return <MdxArticle item={item} />;
}
