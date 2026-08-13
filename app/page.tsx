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
        <div className="space-y-6">
          {/* W.Media Global */}
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
                Mar 2023 - Present
              </span>
            </div>
            <p
              className="text-sm mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              W.Media Global &middot; Singapore &middot; Remote
            </p>
            <p className="text-sm mb-2" style={{ color: "var(--color-text)" }}>
              Built and launched a scalable event management and ticketing
              platform that improved registration speed, streamlined attendee
              operations, and supported repeat event participation across
              multiple event types.
            </p>
            <ul
              className="text-sm list-disc pl-5 space-y-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              <li>
                Architected a Laravel 10-based event platform with multi-tier
                ticketing, dynamic pricing, tax handling, and corporate booking
                workflows
              </li>
              <li>
                Integrated Stripe and multiple payment gateways for secure,
                reliable online transactions
              </li>
              <li>
                Implemented RBAC (Spatie), authentication flows, and RESTful APIs
                for mobile apps and third-party integrations
              </li>
              <li>
                Built real-time analytics and reporting dashboards for
                operational visibility and data-driven event decisions
              </li>
              <li>
                Set up CI/CD pipelines with GitHub Actions, improving development
                reliability through testing and deployment best practices
              </li>
              <li>
                Built a PWA event app using React.js with login, sponsor-speaker
                booking, session rating, agenda viewing, and in-app chat
              </li>
            </ul>
          </div>

          {/* MNC Portal Indonesia */}
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3
                className="font-semibold"
                style={{ color: "var(--color-heading)" }}
              >
                Full-Stack Web Developer
              </h3>
              <span
                className="text-sm shrink-0"
                style={{ color: "var(--color-text-muted)" }}
              >
                Sep 2021 - Feb 2023
              </span>
            </div>
            <p
              className="text-sm mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              MNC Portal Indonesia &middot; Jakarta &middot; On-site
            </p>
            <p className="text-sm mb-2" style={{ color: "var(--color-text)" }}>
              Worked on the development and maintenance of high-traffic digital
              media platforms, contributing to web performance, content delivery,
              and user experience across multiple online news portals.
            </p>
            <ul
              className="text-sm list-disc pl-5 space-y-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              <li>
                Developed and maintained media portal features across multiple
                brands, supporting content presentation and responsive user
                experiences
              </li>
              <li>
                Optimized mobile-friendly and lightweight web experiences,
                improving page speed and accessibility for smartphone users
              </li>
              <li>
                Built frontend and backend components for content-driven
                platforms, ensuring stable performance and efficient delivery
              </li>
              <li>
                Platforms: Hi-Lite SINDOnews, Celebrities.id, Sportstars.id
              </li>
            </ul>
          </div>

          {/* Rynest Technology */}
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
                Oct 2020 - Aug 2021
              </span>
            </div>
            <p
              className="text-sm mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              Rynest Technology Indomedia &middot; Depok &middot; On-site
            </p>
            <p className="text-sm mb-2" style={{ color: "var(--color-text)" }}>
              Delivered client-focused web development projects, building landing
              pages and website solutions tailored to business needs, branding
              requirements, and functional goals.
            </p>
            <ul
              className="text-sm list-disc pl-5 space-y-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              <li>
                Designed and developed high-quality landing pages for client
                campaigns and digital initiatives
              </li>
              <li>
                Built, maintained, and enhanced websites ensuring seamless
                functionality, security, and brand alignment
              </li>
              <li>
                Notable: LSP Perasuransian Syariah — web presence for a
                professional certification institution in the sharia insurance
                sector
              </li>
            </ul>
          </div>

          {/* Merry Riana Group */}
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
                Jul 2019 - Sep 2020
              </span>
            </div>
            <p
              className="text-sm mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              Merry Riana Group &middot; Jakarta &middot; On-site
            </p>
            <p className="text-sm mb-2" style={{ color: "var(--color-text)" }}>
              Contributed to the development and maintenance of digital platforms
              across the Merry Riana Group ecosystem, supporting marketing
              campaigns, lead generation, e-commerce, and online learning
              initiatives.
            </p>
            <ul
              className="text-sm list-disc pl-5 space-y-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              <li>
                Developed conversion-focused landing pages for programs,
                merchandise, seminars, and digital classes
              </li>
              <li>
                Integrated landing pages with internal lead capture system using
                AJAX for efficient data submission
              </li>
              <li>
                Maintained and enhanced multiple websites ensuring stable
                functionality and consistent branding
              </li>
              <li>
                Platforms: merryriana.com, merryrianashop.com,
                merryrianalearningcentre.com, leads.merryriana.com
              </li>
            </ul>
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
