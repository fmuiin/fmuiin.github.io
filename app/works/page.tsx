import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/data/projects";

export const metadata: Metadata = {
  title: "Works",
  description: "Projects and works by Fathul Muiin",
};

export default function WorksPage() {
  return (
    <>
      <h1
        className="text-3xl font-bold mb-2"
        style={{ color: "var(--color-heading)" }}
      >
        Works
      </h1>
      <p className="mb-8" style={{ color: "var(--color-text-muted)" }}>
        Projects I&apos;ve built throughout my career — from enterprise systems
        to AI-powered platforms.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/works/${project.slug}`}
            className="group block rounded-xl overflow-hidden transition-transform hover:scale-[1.02] no-underline hover:no-underline"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            {/* Thumbnail */}
            <div
              className="aspect-video w-full flex items-center justify-center text-4xl"
              style={{ backgroundColor: "var(--color-highlight)" }}
            >
              &#128736;
            </div>
            {/* Info */}
            <div className="p-4">
              <h3
                className="font-semibold text-base mb-1 group-hover:underline"
                style={{ color: "var(--color-heading)" }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm line-clamp-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "var(--color-background)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
