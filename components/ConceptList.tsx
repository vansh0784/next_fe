import type { Post } from "@/lib/markdown";
import ConceptCard from "./ConceptCard";

type ConceptListProps = {
  posts: Post[];
};

export default function ConceptList({ posts }: ConceptListProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <ConceptCard key={post.slug} post={post} />
      ))}
    </section>
  );
}
