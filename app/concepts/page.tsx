import { getAllPosts } from "@/lib/markdown";
import ConceptList from "@/components/ConceptList";

export default function ConceptsPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <section className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Knowledge Base
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-100 sm:text-5xl">
            Engineering Knowledge
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            Concepts I've learned, explored, and documented while building
            things.
          </p>
        </section>

        <ConceptList posts={posts} />
      </div>
    </main>
  );
}
