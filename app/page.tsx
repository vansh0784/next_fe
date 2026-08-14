import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";

export default function Home() {
  const posts = getAllPosts();
  const recentPosts = posts.slice(0, 6);

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pt-32">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-widest text-neutral-500">
            Engineering Notes
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-6xl lg:text-7xl">
            Things I learn,
            <br />
            <span className="text-neutral-400">things I understand.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
            A collection of my notes and understanding around system design,
            networking, security, databases, and other engineering concepts.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/concepts"
              className="inline-flex h-11 items-center rounded-full bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Explore concepts
            </Link>

            <a
              href="https://github.com/vansh0784/url_shortner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-neutral-200 px-6 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50"
            >
              View notes on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Recent concepts */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">
                Knowledge
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Recent concepts
              </h2>
            </div>

            <Link
              href="/concepts"
              className="hidden text-sm font-medium text-neutral-500 transition hover:text-neutral-950 sm:block"
            >
              View all →
            </Link>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/concepts/${post.slug}`}
                  className="group bg-white p-7 transition hover:bg-neutral-50"
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                    {post.category || "Concept"}
                  </p>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-neutral-950">
                    {post.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-neutral-500">
                    {post.description ||
                      "Notes and understanding about this engineering concept."}
                  </p>

                  <span className="mt-6 inline-block text-sm font-medium text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-950">
                    Read concept →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-neutral-300 px-6 py-16 text-center">
              <p className="text-sm text-neutral-500">No concepts yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-neutral-400">
                Why this exists
              </p>
            </div>

            <div className="max-w-2xl">
              <p className="text-2xl leading-10 tracking-tight text-neutral-800 sm:text-3xl">
                I learn by trying to explain things. These notes are my attempt
                to turn what I learn into something I can come back to later.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
