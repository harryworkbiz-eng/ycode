import Link from "next/link";
import type { Frontmatter } from "@/lib/content";

export default function ContentList({ items, basePath }: { items: Frontmatter[]; basePath: string }) {
  if (items.length === 0) {
    return <p className="text-neutral-500">Nothing here yet.</p>;
  }

  return (
    <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
      {items.map((item) => (
        <li key={item.slug} className="py-6">
          <Link href={`${basePath}/${item.slug}`} className="group block">
            <time className="text-sm text-neutral-500">{item.date}</time>
            <h2 className="mt-1 text-xl font-semibold group-hover:underline">{item.title}</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">{item.description}</p>
            <Tags tags={item.tags} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-neutral-300 px-2 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
