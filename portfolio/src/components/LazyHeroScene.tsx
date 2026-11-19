"use client";

import { Component, type ReactNode } from "react";
import dynamic from "next/dynamic";

const placeholder = <div className="h-full w-full rounded-2xl bg-neutral-200/40 dark:bg-neutral-800/40" />;

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-2xl bg-neutral-200/40 dark:bg-neutral-800/40" />,
});

// Keeps the page usable when WebGL is unavailable and the Canvas throws
class SceneErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? placeholder : this.props.children;
  }
}

export default function LazyHeroScene() {
  return (
    <SceneErrorBoundary>
      <HeroScene />
    </SceneErrorBoundary>
  );
}
