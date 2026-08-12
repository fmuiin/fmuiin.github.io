import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1
        className="text-6xl font-bold mb-4"
        style={{ color: "var(--color-heading)" }}
      >
        404
      </h1>
      <p className="mb-6" style={{ color: "var(--color-text-muted)" }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-lg text-sm font-medium no-underline hover:no-underline hover:opacity-80 transition-opacity"
        style={{ backgroundColor: "var(--color-primary)", color: "#ffffff" }}
      >
        Return Home
      </Link>
    </div>
  );
}
