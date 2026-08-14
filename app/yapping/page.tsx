import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yapping",
  description: "Audio thoughts and ramblings by Fathul Muiin",
};

export default function YappingPage() {
  return (
    <>
      <h1
        className="text-3xl font-bold mb-2"
        style={{ color: "var(--color-heading)" }}
      >
        Yapping
      </h1>
      <p className="mb-8" style={{ color: "var(--color-text-muted)" }}>
        Audio thoughts, ramblings, and casual conversations about tech, career,
        and life.
      </p>

      {/* Placeholder for future audio content */}
      <div
        className="rounded-xl p-8 text-center"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <p
          className="text-4xl mb-4"
          aria-hidden="true"
        >
          🎙️
        </p>
        <p
          className="font-medium mb-2"
          style={{ color: "var(--color-heading)" }}
        >
          Coming soon
        </p>
        <p
          className="text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          Audio episodes are on the way. Stay tuned!
        </p>
      </div>
    </>
  );
}
