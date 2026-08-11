import Link from "next/link";
import type { Post } from "@/lib/markdown";

type ConceptCardProps = {
  post: Post;
};

export default function ConceptCard({ post }: ConceptCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-600">
          {post.category || "Concept"}
        </span>

        <span className="text-neutral-400 transition group-hover:text-black">
          →
        </span>
      </div>

      <h2 className="text-xl font-semibold tracking-tight">{post.title}</h2>

      <p className="mt-3 flex-1 text-sm leading-6 text-neutral-600">
        {post.description || "Explore this concept."}
      </p>

      <Link
        href={`/concepts/${post.slug}`}
        className="mt-6 text-sm font-medium underline underline-offset-4"
      >
        Read concept
      </Link>
    </article>
  );
}
