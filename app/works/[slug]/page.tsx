import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/content/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Back link */}
      <Link
        href="/works"
        className="inline-flex items-center gap-1 text-sm mb-6 no-underline hover:underline"
        style={{ color: "var(--color-primary)" }}
      >
        <ChevronLeft size={16} /> Works
      </Link>

      <h1
        className="text-2xl font-bold mb-2"
        style={{ color: "var(--color-heading)" }}
      >
        {project.title}
      </h1>
      <p className="mb-6" style={{ color: "var(--color-text-muted)" }}>
        {project.description}
      </p>

      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{
              backgroundColor: "var(--color-surface)",
              color: "var(--color-accent)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mb-8">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg no-underline hover:no-underline hover:opacity-80 transition-opacity"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
            }}
          >
            <Code2 size={14} /> Source
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg no-underline hover:no-underline hover:opacity-80 transition-opacity"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
            }}
          >
            <ExternalLink size={14} /> Demo
          </a>
        )}
      </div>

      {/* Overview */}
      <section className="mb-6">
        <h2 className="section-title">Overview</h2>
        <p>{project.overview}</p>
      </section>

      {/* Problem */}
      <section className="mb-6">
        <h2 className="section-title">Problem</h2>
        <p>{project.problem}</p>
      </section>

      {/* Solution */}
      <section className="mb-6">
        <h2 className="section-title">Solution</h2>
        <p>{project.solution}</p>
      </section>

      {/* Architecture */}
      <section className="mb-6">
        <h2 className="section-title">Architecture</h2>
        <p>{project.architecture}</p>
      </section>

      {/* Challenges */}
      <section className="mb-6">
        <h2 className="section-title">Challenges</h2>
        <ul className="list-disc pl-5 space-y-1">
          {project.challenges.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      {/* Key Learnings */}
      <section className="mb-6">
        <h2 className="section-title">Key Learnings</h2>
        <ul className="list-disc pl-5 space-y-1">
          {project.keyLearnings.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
