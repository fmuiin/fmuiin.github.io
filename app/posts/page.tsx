import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Posts",
  description: "Blog posts by Fathul Muiin",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <>
      <h1
        className="text-3xl font-bold mb-2"
        style={{ color: "var(--color-heading)" }}
      >
        Posts
      </h1>
      <p className="mb-8" style={{ color: "var(--color-text-muted)" }}>
        Writing about software engineering, architecture, and things I learn.
      </p>

      <div className="space-y-1">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3 px-3 rounded-lg transition-colors no-underline hover:no-underline hover:bg-[var(--color-surface)]"
            style={{ color: "var(--color-text)" }}
          >
            <span
              className="text-sm shrink-0"
              style={{ color: "var(--color-text-muted)" }}
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span
              className="font-medium"
              style={{ color: "var(--color-primary)" }}
            >
              {post.title}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
