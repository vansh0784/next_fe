import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur dark:border-neutral-800/80 dark:bg-neutral-950/90">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-neutral-950 dark:text-neutral-100"
        >
          Vansh's Notes
        </Link>

        <div className="flex items-center gap-7 text-sm">
          <Link
            href="/concepts"
            className="text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            Concepts
          </Link>

          <Link
            href="/about"
            className="text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            About
          </Link>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
