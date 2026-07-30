import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col items-center justify-center px-4 text-center">
      <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--color-ink-muted)" }}>
        404 / Not found
      </span>
      <h1 className="mt-4 font-serif text-3xl" style={{ color: "var(--color-ink)" }}>
        This part of the workspace could not be opened.
      </h1>
      <p className="mt-3 text-sm" style={{ color: "var(--color-ink-muted)" }}>
        The window you&rsquo;re looking for doesn&rsquo;t exist, or has moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg border px-4 py-2 font-mono text-[11px] uppercase tracking-widest"
        style={{ borderColor: "var(--color-accent-blue)", color: "var(--color-accent-blue)" }}
      >
        Return home
      </Link>
    </div>
  );
}
