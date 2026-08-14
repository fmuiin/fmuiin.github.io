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
              Led development of 3 core products (ticketing platform, PWA event
              app, custom WordPress plugins) serving 1,000+ registrations per
              event cycle across 5+ event types in the APAC region. Reduced
              overall engineering release cycle by 80% through CI/CD automation.
            </p>
            <ul
              className="text-sm list-disc pl-5 space-y-1.5"
              style={{ color: "var(--color-text-muted)" }}
            >
              <li>
                Architected tickets.w.media — a Laravel 10 ticketing platform
                replacing the legacy WordPress-based system. Delivered 3x faster
                registration flow with multi-tier ticketing, dynamic pricing,
                and Stripe integration for 100% automated payment processing
              </li>
              <li>
                Built apps.w.media — a React.js PWA serving 500+ attendees per
                event with login, booking, rating, agenda, chat, and sponsor
                features. Improved attendee experience by ~20% compared to
                non-app events. Capacitor-ready for native iOS &amp; Android
                deployment
              </li>
              <li>
                Set up CI/CD with GitHub Actions — automated testing, linting,
                and deployment pipelines reducing release cycles from hours to
                minutes. Also developed custom WordPress plugins from scratch
                for features unavailable in the ecosystem (e.g. lock popup gate
                for gated content, custom event widgets)
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
              Maintained 2 major news platforms (Okezone &amp; SINDOnews)
              including all sub-channels (bola.okezone.com, news.okezone.com,
              tekno.sindonews.com, etc.) serving tens of millions of monthly
              readers across 10+ sub-portals.
            </p>
            <ul
              className="text-sm list-disc pl-5 space-y-1.5"
              style={{ color: "var(--color-text-muted)" }}
            >
              <li>
                Built hi-lite.sindonews.com from scratch — a scroll-based
                lightweight mobile news portal optimized for smartphone users,
                reducing page weight by ~60% compared to the main site for
                faster load on mobile networks
              </li>
              <li>
                Coordinated with the ads team on placement strategy and
                scheduling across all portals, directly supporting media revenue
                and company ad earnings
              </li>
              <li>
                Implemented AI/ML-powered personalization on Hi-Lite, delivering
                interest-based article recommendations that improved user
                retention by ~15% through tailored content feeds
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
              Delivered 4+ client web projects on time across education,
              certification, and healthcare sectors with Laravel &amp;
              CodeIgniter.
            </p>
            <ul
              className="text-sm list-disc pl-5 space-y-1.5"
              style={{ color: "var(--color-text-muted)" }}
            >
              <li>
                Built production-ready web apps for Qonstanta, LSP Perasuransian
                Syariah, and Kitamedicare from requirements to deployment
              </li>
              <li>
                Designed and developed landing pages and admin workflows for
                client campaigns and digital initiatives
              </li>
              <li>
                Maintained websites ensuring seamless functionality, security,
                and consistent brand alignment across clients
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
              Supported 4 web platforms and built 20+ conversion-focused landing
              pages driving lead generation for seminars, e-commerce, and digital
              classes.
            </p>
            <ul
              className="text-sm list-disc pl-5 space-y-1.5"
              style={{ color: "var(--color-text-muted)" }}
            >
              <li>
                Developed landing pages with AJAX-based lead capture integration,
                streamlining data submission for marketing campaigns
              </li>
              <li>
                Maintained and enhanced merryriana.com, merryrianashop.com,
                merryrianalearningcentre.com, and leads.merryriana.com
              </li>
              <li>
                Ensured stable functionality, consistent branding, and smooth UX
                across all platforms supporting marketing operations
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
