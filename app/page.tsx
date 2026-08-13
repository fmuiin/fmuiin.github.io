import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Greeting box */}
      <div
        className="rounded-lg p-4 mb-8 text-center"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        Hello, I&apos;m a full-stack software engineer based in Jakarta,
        Indonesia!
      </div>

      {/* Name + photo */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
        <div className="flex-1">
          <h1
            className="text-3xl font-bold mb-1"
            style={{ color: "var(--color-heading)" }}
          >
            Fathul Muiin
          </h1>
          <p style={{ color: "var(--color-text-muted)" }}>
            Digital Craftsman ( Developer / Engineer / Builder )
          </p>
        </div>
        <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-[var(--color-border)]">
          <Image
            src="/images/fathul.png"
            alt="Fathul Muiin"
            width={96}
            height={96}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Work section */}
      <section className="mb-8">
        <h2 className="section-title">Work</h2>
        <p className="indent" style={{ color: "var(--color-text)" }}>
          Fathul is a Full-Stack Software Engineer with 5+ years of experience
          building web applications, business systems, and scalable digital
          products. He has strong expertise in PHP, Laravel, JavaScript, Node.js,
          Vue.js, and React, with hands-on experience delivering event ticketing
          platforms, high-traffic media systems, and client-focused web
          solutions. AWS Certified Cloud Practitioner, currently expanding into
          cloud-based architecture and modern application development.
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
            <span className="bio-year">2014</span>
            <span>
              Enrolled in Informatics Engineering at Institute of Technology
              Nurul Fikri
            </span>
          </div>
          <div className="flex">
            <span className="bio-year">2018</span>
            <span>
              Completed Bachelor&apos;s Degree in Informatics Engineering.
              Attended Web Development Bootcamp at Glints x Binar Academy
            </span>
          </div>
          <div className="flex">
            <span className="bio-year">2019</span>
            <span>Web Developer at Merry Riana Group</span>
          </div>
          <div className="flex">
            <span className="bio-year">2020</span>
            <span>
              Web Developer at Rynest Technology Indomedia — client-focused web
              apps for education, certification &amp; healthcare
            </span>
          </div>
          <div className="flex">
            <span className="bio-year">2021</span>
            <span>
              Backend Developer at MNC Portal Indonesia — high-traffic digital
              media platforms across multiple brands
            </span>
          </div>
          <div className="flex">
            <span className="bio-year">2023</span>
            <span>
              Senior Software Engineer at W.Media Global (Singapore) — event
              management &amp; ticketing platform
            </span>
          </div>
          <div className="flex">
            <span className="bio-year">2026</span>
            <span>AWS Certified Cloud Practitioner (CLF-C02)</span>
          </div>
        </div>
      </section>

      {/* I ♥ section */}
      <section className="mb-8">
        <h2 className="section-title">I ♥</h2>
        <p style={{ color: "var(--color-text)" }}>
          Cloud Architecture, Scalable Systems, Laravel, Open Source, CI/CD,
          Mentoring, Community Speaking, Building Digital Products
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
            href="https://www.linkedin.com/in/fmuiin14/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:no-underline"
            style={{ color: "var(--color-primary)" }}
          >
            <span>&#64;</span>
            <span>fmuiin14 on LinkedIn</span>
          </a>
          <a
            href="mailto:fmuiin14@gmail.com"
            className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:no-underline"
            style={{ color: "var(--color-primary)" }}
          >
            <span>&#9993;</span>
            <span>fmuiin14@gmail.com</span>
          </a>
        </div>
      </section>
    </>
  );
}
