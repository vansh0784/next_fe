import Link from "next/link";

export const metadata = {
  title: "About",
  description: "About Vansh Singh and his engineering notes.",
};

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
        {/* Intro */}
        <section>
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            About
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-neutral-950 dark:text-neutral-100 sm:text-6xl">
            Hey, I'm Vansh.
          </h1>

          <p className="mt-7 max-w-2xl text-xl leading-9 text-neutral-600 dark:text-neutral-400">
            I'm a full-stack developer who enjoys understanding how things work
            under the hood — especially systems involving backend architecture,
            distributed systems, networking, and AI.
          </p>
        </section>

        {/* Why this exists */}
        <section className="mt-24 border-t border-neutral-200 pt-12 dark:border-neutral-800">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Why I keep these notes
          </p>

          <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            <p>
              I learn better when I try to explain something in my own words.
              These notes are a place where I write down concepts that I'm
              learning, things I've understood, and sometimes things that I
              haven't completely figured out yet.
            </p>

            <p>
              The goal isn't to create perfect documentation. It's to build a
              record of how my understanding evolves over time.
            </p>

            <p>
              You'll find notes around system design, networking, security,
              databases, distributed systems, and other engineering topics that
              I find interesting.
            </p>
          </div>
        </section>

        {/* What I work on */}
        <section className="mt-24 border-t border-neutral-200 pt-12 dark:border-neutral-800">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            What I work on
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Backend Engineering",
                description:
                  "Building APIs, services, event-driven systems, real-time workflows, and production backend infrastructure.",
              },
              {
                title: "Distributed Systems",
                description:
                  "Exploring concepts like messaging, consistency, replication, partitioning, scheduling, and distributed coordination.",
              },
              {
                title: "Cloud & Infrastructure",
                description:
                  "Working with AWS, Docker, Nginx, CI/CD, and infrastructure needed to run production systems.",
              },
              {
                title: "AI & Agents",
                description:
                  "Exploring LLM integrations, agentic workflows, context engineering, and voice-based AI systems.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
              >
                <h2 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-24 border-t border-neutral-200 pt-12 dark:border-neutral-800">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Currently
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
              Full Stack Web Developer
            </h2>

            <p className="mt-2 text-neutral-500 dark:text-neutral-400">
              ScratchNest Pvt. Ltd. · Noida, India
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              I work across backend systems, production infrastructure,
              real-time applications, IoT platforms, and AI-powered workflows. A
              lot of my work involves figuring out how individual components can
              work reliably together as a system.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mt-24 border-t border-neutral-200 pt-12 dark:border-neutral-800">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Background
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
              B.Tech in Information Technology
            </h2>

            <p className="mt-2 text-neutral-500 dark:text-neutral-400">
              Gautam Buddha University · 2022–2026
            </p>

            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              CGPA: 8.8 / 10
            </p>
          </div>
        </section>

        {/* Connect */}
        <section className="mt-24 border-t border-neutral-200 pt-12 dark:border-neutral-800">
          <p className="text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Find me
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/vansh0784"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vansh-singh-4b780a206/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
            >
              LinkedIn
            </a>

            <Link
              href="/concepts"
              className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
            >
              Read my notes
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
