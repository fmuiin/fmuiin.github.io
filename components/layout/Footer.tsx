import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[768px] px-6 py-8 text-center">
      <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
        &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights
        Reserved.
      </p>
    </footer>
  );
}
