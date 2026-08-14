import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "About Fathul Muiin — Software Engineer, community speaker, and builder.",
};

export default function AboutPage() {
  return (
    <>
      <h1
        className="text-3xl font-bold mb-6"
        style={{ color: "var(--color-heading)" }}
      >
        About Me
      </h1>

      {/* Intro */}
      <section className="mb-8">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0 border-2 border-[var(--color-border)]">
            <Image
              src="/images/fathul.png"
              alt="Fathul Muiin"
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="mb-3" style={{ color: "var(--color-text)" }}>
              I&apos;m Fathul, a Software Engineer with 5+ years of experience
              building web applications, business systems, and scalable digital
              products. Based in Jakarta, Indonesia.
            </p>
            <p style={{ color: "var(--color-text)" }}>
              My core expertise is in PHP and JavaScript, with strong hands-on
              experience in Laravel, Node.js, Vue.js, React, and WordPress. I
              have built and maintained business-focused applications, internal
              enterprise systems, CMS platforms, and custom web solutions. I
              focus on building maintainable, scalable, and production-ready
              solutions that align with real business needs.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="mb-8">
        <h2 className="section-title">What I Do</h2>
        <div className="space-y-2" style={{ color: "var(--color-text)" }}>
          <p>
            I specialize in turning complex business requirements into clean,
            working software. My day-to-day involves:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Architecting and building full-stack web applications from scratch
            </li>
            <li>
              Developing scalable backend systems with Laravel, Node.js, and
              REST APIs
            </li>
            <li>
              Building interactive frontends with Vue.js, React, and modern
              JavaScript
            </li>
            <li>
              Creating custom WordPress plugins and themes for business-specific
              needs
            </li>
            <li>
              Setting up CI/CD pipelines, cloud infrastructure, and deployment
              automation
            </li>
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-8">
        <h2 className="section-title">Tech Stack</h2>
        <div className="space-y-4">
          <div>
            <h3
              className="text-sm font-semibold mb-2"
              style={{ color: "var(--color-heading)" }}
            >
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {["PHP", "Laravel", "CodeIgniter", "Node.js", "Express.js", "REST APIs"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <h3
              className="text-sm font-semibold mb-2"
              style={{ color: "var(--color-heading)" }}
            >
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Vue.js", "React.js", "JavaScript", "TypeScript", "jQuery", "Blade", "Bootstrap"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <h3
              className="text-sm font-semibold mb-2"
              style={{ color: "var(--color-heading)" }}
            >
              WordPress
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Custom Plugins", "Custom Themes", "Elementor", "Performance Optimization"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <h3
              className="text-sm font-semibold mb-2"
              style={{ color: "var(--color-heading)" }}
            >
              Database &amp; Cache
            </h3>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "MongoDB", "Redis", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    color: "var(--color-accent)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3
              className="text-sm font-semibold mb-2"
              style={{ color: "var(--color-heading)" }}
            >
              Cloud &amp; DevOps
            </h3>
            <div className="flex flex-wrap gap-2">
              {["AWS", "GitHub Actions", "CI/CD", "Docker", "Linux", "Nginx"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <h3
              className="text-sm font-semibold mb-2"
              style={{ color: "var(--color-heading)" }}
            >
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "Postman", "Composer", "NPM", "VS Code", "Figma"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Community & Speaking */}
      <section className="mb-8">
        <h2 className="section-title">Community &amp; Speaking</h2>
        <p className="mb-3" style={{ color: "var(--color-text)" }}>
          I believe in giving back to the developer community through teaching,
          mentoring, and sharing knowledge.
        </p>
        <div className="space-y-3">
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <p
              className="font-medium text-sm"
              style={{ color: "var(--color-heading)" }}
            >
              Speaker — Dicoding Expert Session 2024
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Shared engineering insights with the Dicoding developer community
            </p>
          </div>
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <p
              className="font-medium text-sm"
              style={{ color: "var(--color-heading)" }}
            >
              Contributor — Coding Camp 2025 &amp; 2026 (DBS Foundation &amp;
              Dicoding)
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Contributed to curriculum and mentoring for aspiring developers
            </p>
          </div>
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <p
              className="font-medium text-sm"
              style={{ color: "var(--color-heading)" }}
            >
              Contributor — Bangkit Academy 2024 &amp; 2025
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Supported Google-backed program producing job-ready tech talent in
              Indonesia
            </p>
          </div>
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <p
              className="font-medium text-sm"
              style={{ color: "var(--color-heading)" }}
            >
              Speaker — Remote Worker Community
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Shared experience on remote engineering workflows and career growth
            </p>
          </div>
          <div
            className="p-3 rounded-lg"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <p
              className="font-medium text-sm"
              style={{ color: "var(--color-heading)" }}
            >
              Mentor — Wired for Work (W4W!) 2.0
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Mentored early-career developers on career readiness and technical
              skills
            </p>
          </div>
        </div>
      </section>

      {/* Outside Work */}
      <section className="mb-8">
        <h2 className="section-title">Outside Work</h2>
        <p style={{ color: "var(--color-text)" }}>
          When I&apos;m not coding, you&apos;ll find me exploring cloud
          architecture concepts, reading about system design patterns,
          contributing to open-source projects, and staying active in the
          Indonesian developer community. I enjoy mentoring junior developers and
          sharing what I&apos;ve learned along the way.
        </p>
      </section>
    </>
  );
}
