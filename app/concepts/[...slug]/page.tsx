import { getPostBySlug } from "@/lib/markdown";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function ConceptPage({ params }: Props) {
  const { slug } = await params;

  const slugPath = slug.join("/");

  const post = await getPostBySlug(slugPath);

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <article>
        {/* Article Header */}
        <header className="mb-12 border-b border-neutral-200 pb-10">
          <div className="mb-4 flex items-center gap-3 text-sm text-neutral-500">
            <span className="rounded-full bg-neutral-100 px-3 py-1">
              {post.metadata.category || "Concept"}
            </span>

            <span>•</span>

            <span>Engineering Notes</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {post.metadata.title ?? slugPath}
          </h1>

          {post.metadata.description && (
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
              {post.metadata.description}
            </p>
          )}
        </header>

        {/* Markdown Content */}
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </article>
    </main>
  );
}
