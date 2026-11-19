import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MdxArticle from "@/components/MdxArticle";
import { getBySlug, getStaticSlugParams } from "@/lib/content";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return getStaticSlugParams("projects");
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
