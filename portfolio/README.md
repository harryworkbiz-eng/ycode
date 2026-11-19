# Portfolio

Minimal portfolio site: Next.js (App Router) + TypeScript + Tailwind CSS + react-three-fiber, with blog posts and projects stored as MDX files.

This is a standalone app, independent of the Ycode app at the repository root. Run all commands from this directory.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Adding content

Drop an `.mdx` file into `content/blog/` or `content/projects/`:

```mdx
---
title: My new post
date: 2026-11-20
description: One-line summary shown in lists.
slug: my-new-post
tags: [nextjs]
---

Post body in **MDX**.
```

`slug` defaults to the filename when omitted. Items are sorted by `date` (newest first) and statically generated at build time.

## Structure

- `content/` — MDX blog posts and projects
- `src/lib/content.ts` — reads and parses content (`gray-matter`)
- `src/components/MdxArticle.tsx` — renders MDX via `next-mdx-remote/rsc`
- `src/components/HeroScene.tsx` — react-three-fiber hero scene, loaded with `next/dynamic` (`ssr: false`)
