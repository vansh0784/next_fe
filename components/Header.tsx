import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Vansh's Notes
        </Link>

        <div className="flex items-center gap-6 text-sm text-neutral-600">
          <Link href="/concepts" className="transition hover:text-black">
            Concepts
          </Link>

          <Link href="/about" className="transition hover:text-black">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
