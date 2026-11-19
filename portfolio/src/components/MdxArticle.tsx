import { compileMDX } from "next-mdx-remote/rsc";
import type { ContentItem } from "@/lib/content";
import { Tags } from "./ContentList";

export default async function MdxArticle({ item }: { item: ContentItem }) {
  const { content } = await compileMDX({ source: item.content });

  return (
    <article>
      <header className="mb-10">
        <time className="text-sm text-neutral-500">{item.date}</time>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">{item.title}</h1>
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">{item.description}</p>
        <Tags tags={item.tags} />
      </header>
      <div className="prose prose-neutral max-w-none dark:prose-invert">{content}</div>
    </article>
  );
}
