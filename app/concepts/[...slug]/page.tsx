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
    <main className="min-h-[calc(100vh-4rem)] bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
        <article>
          {/* Article Header */}
          <header className="mb-12 border-b border-neutral-200 pb-10 dark:border-neutral-800">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium dark:bg-neutral-800 dark:text-neutral-300">
                {post.metadata.category || "Concept"}
              </span>

              <span className="text-neutral-300 dark:text-neutral-700">•</span>

              <span>Engineering Notes</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-100 sm:text-5xl">
              {post.metadata.title ?? slugPath}
            </h1>

            {post.metadata.description && (
              <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
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
      </div>
    </main>
  );
}
