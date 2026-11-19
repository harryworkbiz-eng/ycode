import type { Metadata } from "next";
import ContentList from "@/components/ContentList";
import { getAll } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on software, design, and 3D.",
};

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">Writing on software, design, and 3D.</p>
      <div className="mt-8">
        <ContentList items={getAll("blog")} basePath="/blog" />
      </div>
    </div>
  );
}
