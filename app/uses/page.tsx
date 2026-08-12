import type { Metadata } from "next";
import { usesData } from "@/content/data/uses";

export const metadata: Metadata = {
  title: "Uses",
  description: "Hardware, software, and tools Fathul Muiin uses daily",
};

export default function UsesPage() {
  return (
    <>
      <h1
        className="text-3xl font-bold mb-2"
        style={{ color: "var(--color-heading)" }}
      >
        Uses
      </h1>
      <p className="mb-8" style={{ color: "var(--color-text-muted)" }}>
        Tools, hardware, and software I use on a daily basis.
      </p>

      <div className="space-y-8">
        {usesData.map((category) => (
          <section key={category.title}>
            <h2 className="section-title">{category.title}</h2>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li key={item.name} className="flex flex-col">
                  <span
                    className="font-medium"
                    style={{ color: "var(--color-heading)" }}
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
