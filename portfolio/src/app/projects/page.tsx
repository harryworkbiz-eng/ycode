import type { Metadata } from "next";
import ContentList from "@/components/ContentList";
import { getAll } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work and experiments.",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">Selected work and experiments.</p>
      <div className="mt-8">
        <ContentList items={getAll("projects")} basePath="/projects" />
      </div>
    </div>
  );
}
