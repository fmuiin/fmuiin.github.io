import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Greeting box */}
      <div
        className="rounded-lg p-4 mb-8 text-center"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        Hello, I&apos;m a full-stack software engineer based in Indonesia!
      </div>

      {/* Name and title */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
        <div className="flex-1">
          <h1
            className="text-3xl font-bold mb-1"
            style={{ color: "var(--color-heading)" }}
          >
            Fathul Muiin
          </h1>
          <p style={{ color: "var(--color-text-muted)" }}>
            Digital Craftsman ( Developer / Architect / Builder )
          </p>
        </div>
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-4xl shrink-0"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          &#128187;
        </div>
      </div>

      {/* Work section */}
      <section className="mb-8">
        <h2 className="section-title">Work</h2>
        <p className="indent" style={{ color: "var(--color-text)" }}>
          Fathul is a full-stack software engineer with 7+ years of experience
          building scalable web applications. He specializes in turning complex
          business requirements into elegant, maintainable solutions using
          Laravel, Vue.js, React, and cloud technologies. He has a passion for
          all things launching products, from architecture design all the way to
          solving real-life problems with code. When not coding, he loves
          exploring AI integration patterns and contributing to open source.
        </p>
        <div className="mt-4 text-center">
          <Link
            href="/works"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium no-underline hover:no-underline transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
            }}
          >
            My portfolio <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Bio section */}
      <section className="mb-8">
        <h2 className="section-title">Bio</h2>
        <div className="space-y-2">
          <div className="flex">
            <span className="bio-year">2016</span>
            <span>Started career as Junior Developer at Digital Agency Co</span>
          </div>
          <div className="flex">
            <span className="bio-year">2018</span>
            <span>Backend Developer at StartupHub — payment systems, real-time features</span>
          </div>
          <div className="flex">
            <span className="bio-year">2020</span>
            <span>Full Stack Developer at TechCorp Solutions — AI analytics, enterprise APIs</span>
          </div>
          <div className="flex">
            <span className="bio-year">2022</span>
            <span>Senior Full Stack Engineer at W.Media — enterprise ticketing, microservices</span>
          </div>
          <div className="flex">
            <span className="bio-year">Present</span>
            <span>Building scalable software &amp; contributing to open source</span>
          </div>
        </div>
      </section>

      {/* I ♥ section */}
      <section className="mb-8">
        <h2 className="section-title">I ♥</h2>
        <p style={{ color: "var(--color-text)" }}>
          System Design, AI/ML Integration, Cloud Architecture, Open Source,
          Clean Code, Domain-Driven Design, Developer Experience, Mentoring
        </p>
      </section>

      {/* On the web section */}
      <section className="mb-4">
        <h2 className="section-title">On the web</h2>
        <div className="space-y-2">
          <a
            href="https://github.com/fmuiin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:no-underline"
            style={{ color: "var(--color-primary)" }}
          >
            <span>&#64;</span>
            <span>fmuiin on GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/fmuiin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:no-underline"
            style={{ color: "var(--color-primary)" }}
          >
            <span>&#64;</span>
            <span>fmuiin on LinkedIn</span>
          </a>
          <a
            href="mailto:fathulmuiin@gmail.com"
            className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:no-underline"
            style={{ color: "var(--color-primary)" }}
          >
            <span>&#9993;</span>
            <span>fathulmuiin@gmail.com</span>
          </a>
        </div>
      </section>
    </>
  );
}
