import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getPostBySlug, getAllPostSlugs } from "@/lib/mdx";
import { MdxContent } from "@/components/shared/MdxContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Link
        href="/posts"
        className="inline-flex items-center gap-1 text-sm mb-6 no-underline hover:underline"
        style={{ color: "var(--color-primary)" }}
      >
        <ChevronLeft size={16} /> Posts
      </Link>

      <h1
        className="text-2xl font-bold mb-2"
        style={{ color: "var(--color-heading)" }}
      >
        {post.title}
      </h1>

      <div
        className="flex items-center gap-3 mb-8 text-sm"
        style={{ color: "var(--color-text-muted)" }}
      >
        <span>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span>&middot;</span>
        <span>{post.readingTime}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "var(--color-surface)",
              color: "var(--color-accent)",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>

      <MdxContent source={post.content} />
    </>
  );
}
