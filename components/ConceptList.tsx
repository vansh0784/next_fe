import type { Post } from "@/lib/markdown";
import ConceptCard from "./ConceptCard";

type ConceptListProps = {
  posts: Post[];
};

export default function ConceptList({ posts }: ConceptListProps) {
  if (posts.length === 0) {
    return (
      <section className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-16 text-center dark:border-neutral-700 dark:bg-neutral-900/50">
        <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
          No concepts yet
        </h2>

        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          New concepts will appear here once they are added to the knowledge
          repository.
        </p>
      </section>
    );
  }

  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <ConceptCard key={post.slug} post={post} />
      ))}
    </section>
  );
}
