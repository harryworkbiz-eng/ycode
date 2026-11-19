import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MdxArticle from "@/components/MdxArticle";
import { getBySlug, getStaticSlugParams } from "@/lib/content";

export const ensureStatic = "navigation";

export function generateStaticParams() {
  return getStaticSlugParams("blog");
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getBySlug("blog", slug);
  return item ? { title: item.title, description: item.description } : {};
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const item = getBySlug("blog", slug);
  if (!item) notFound();

  return <MdxArticle item={item} />;
}
