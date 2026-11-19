import Link from "next/link";
import LazyHeroScene from "@/components/LazyHeroScene";
import ContentList from "@/components/ContentList";
import { getPosts, getProjects } from "@/lib/content";

export default function Home() {
  const posts = getPosts().slice(0, 3);
  const projects = getProjects().slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hi, I build things for the web.</h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Notes on software, design, and 3D — plus a few projects I&apos;m proud of.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background hover:opacity-90"
            >
              View projects
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
            >
              Read the blog
            </Link>
          </div>
        </div>
        <div className="h-72 md:h-80">
          <LazyHeroScene />
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Latest posts</h2>
          <Link href="/blog" className="text-sm text-neutral-500 hover:underline">All posts →</Link>
        </div>
        <ContentList items={posts} basePath="/blog" />
      </section>

      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <Link href="/projects" className="text-sm text-neutral-500 hover:underline">All projects →</Link>
        </div>
        <ContentList items={projects} basePath="/projects" />
      </section>
    </div>
  );
}
