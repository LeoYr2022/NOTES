import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Next.js",
  description:
    "Next.js is a React framework for production: routing, rendering, and tooling in one stack.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16 sm:px-16 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
            <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
              About Next.js
            </h1>
          </div>
          <Link
            href="/"
            className="shrink-0 text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            ← Home
          </Link>
        </div>

        <div className="flex flex-col gap-8 text-zinc-600 dark:text-zinc-400">
          <p className="text-lg leading-8">
            <strong className="font-medium text-zinc-950 dark:text-zinc-50">
              Next.js
            </strong>{" "}
            is a full-stack React framework. You build UI with components, and
            Next.js adds file-based routing, multiple rendering strategies
            (static, dynamic, streaming), and APIs so you can ship fast,
            SEO-friendly apps without wiring everything by hand.
          </p>

          <section className="flex flex-col gap-3">
            <h2 className="text-base font-semibold text-black dark:text-zinc-50">
              Why teams use it
            </h2>
            <ul className="list-inside list-disc space-y-2 text-base leading-7">
              <li>
                <span className="font-mono text-sm text-zinc-800 dark:text-zinc-300">
                  app/
                </span>{" "}
                directory for layouts, pages, and nested routes (App Router).
              </li>
              <li>
                Server Components by default, with Client Components when you
                need interactivity in the browser.
              </li>
              <li>
                Built-in optimizations: images, fonts, and scripts tuned for
                production.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-base font-semibold text-black dark:text-zinc-50">
              Learn more
            </h2>
            <p className="text-base leading-7">
              Official docs and tutorials live on{" "}
              <a
                href="https://nextjs.org/docs"
                className="font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                nextjs.org/docs
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
