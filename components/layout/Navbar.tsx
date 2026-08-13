"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { siteConfig, navItems } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
    >
      <div className="mx-auto max-w-[768px] flex items-center justify-between px-6 py-3">
        {/* Logo / Name */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-heading text-lg no-underline hover:no-underline"
          style={{ color: "var(--color-heading)" }}
        >
          <span className="text-xl">&#9781;</span>
          {siteConfig.name}
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors no-underline hover:underline ${
                pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-primary"
                  : ""
              }`}
              style={{
                color:
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/")
                    ? "var(--color-primary)"
                    : "var(--color-text)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text transition-colors"
            style={{ color: "var(--color-text-muted)" }}
            aria-label="View source on GitHub"
          >
            <Code2 size={18} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{ color: "var(--color-text)" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm py-1 no-underline"
              style={{
                color:
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/")
                    ? "var(--color-primary)"
                    : "var(--color-text)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm flex items-center gap-2 no-underline"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Code2 size={16} /> Source
          </a>
        </div>
      )}
    </nav>
  );
}
