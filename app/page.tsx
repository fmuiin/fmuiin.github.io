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

      {/* Experience section */}
      <section className="mb-8">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-5">
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3
                className="font-semibold"
                style={{ color: "var(--color-heading)" }}
              >
                Senior Software Engineer
              </h3>
              <span
                className="text-sm shrink-0"
                style={{ color: "var(--color-text-muted)" }}
              >
                2023 - Present
              </span>
            </div>
            <p
              className="text-sm mb-1"
              style={{ color: "var(--color-accent)" }}
            >
              W.Media Global (Singapore)
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Built a scalable event management &amp; ticketing platform. Designed RBAC systems, CI/CD pipelines, payment gateway integrations, and RESTful APIs. Also contributed React-based PWA and custom WordPress plugins.
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3
                className="font-semibold"
                style={{ color: "var(--color-heading)" }}
              >
                Backend Developer
              </h3>
              <span
                className="text-sm shrink-0"
                style={{ color: "var(--color-text-muted)" }}
              >
                2021 - 2023
              </span>
            </div>
            <p
              className="text-sm mb-1"
              style={{ color: "var(--color-accent)" }}
            >
              MNC Portal Indonesia
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Developed and maintained high-traffic digital media platforms across multiple brands. Improved performance, mobile content delivery, and personalization features for news portals.
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3
                className="font-semibold"
                style={{ color: "var(--color-heading)" }}
              >
                Web Developer
              </h3>
              <span
                className="text-sm shrink-0"
                style={{ color: "var(--color-text-muted)" }}
              >
                2020 - 2021
              </span>
            </div>
            <p
              className="text-sm mb-1"
              style={{ color: "var(--color-accent)" }}
            >
              Rynest Technology Indomedia
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Delivered client-focused web apps for education, certification, and healthcare platforms using Laravel and CodeIgniter.
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3
                className="font-semibold"
                style={{ color: "var(--color-heading)" }}
              >
                Web Developer
              </h3>
              <span
                className="text-sm shrink-0"
                style={{ color: "var(--color-text-muted)" }}
              >
                2019
              </span>
            </div>
            <p
              className="text-sm mb-1"
              style={{ color: "var(--color-accent)" }}
            >
              Merry Riana Group
            </p>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Built conversion-focused landing pages for seminars, digital classes, and marketing campaigns. Integrated lead capture systems.
            </p>
          </div>
        </div>
      </section>

      {/* Education section */}
      <section className="mb-8">
        <h2 className="section-title">Education</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3
                className="font-semibold"
                style={{ color: "var(--color-heading)" }}
              >
                Bachelor of Informatics Engineering
              </h3>
              <span
                className="text-sm shrink-0"
                style={{ color: "var(--color-text-muted)" }}
              >
                2014 - 2018
              </span>
            </div>
            <p
              className="text-sm"
              style={{ color: "var(--color-accent)" }}
            >
              Institute of Technology Nurul Fikri
            </p>
          </div>
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3
                className="font-semibold"
                style={{ color: "var(--color-heading)" }}
              >
                Web Development Bootcamp
              </h3>
              <span
                className="text-sm shrink-0"
                style={{ color: "var(--color-text-muted)" }}
              >
                Nov 2018 - Jan 2019
              </span>
            </div>
            <p
              className="text-sm"
              style={{ color: "var(--color-accent)" }}
            >
              Glints x Binar Academy
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-8">
        <h2 className="section-title">Certifications</h2>
        <div className="flex items-baseline justify-between gap-4">
          <span style={{ color: "var(--color-heading)" }}>
            AWS Certified Cloud Practitioner (CLF-C02)
          </span>
          <span
            className="text-sm shrink-0"
            style={{ color: "var(--color-text-muted)" }}
          >
            2026
          </span>
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
