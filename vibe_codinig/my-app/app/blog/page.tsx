import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "博客",
  description: "关于 Next.js、App Router 与 Web 交付的短文。",
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default function BlogPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-12 px-6 py-16 sm:px-16 sm:py-24">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
                博客
              </h1>
              <p className="mt-2 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                用中文记录的 Next.js 笔记：路由、数据流以及各模块如何拼在一起。
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="shrink-0 text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            ← 首页
          </Link>
        </header>

        <ul className="flex flex-col gap-8">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 sm:p-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500 dark:text-zinc-500">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden>·</span>
                  <span>约 {post.readMinutes} 分钟阅读</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-black group-hover:text-zinc-800 dark:text-zinc-50 dark:group-hover:text-zinc-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="outline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-zinc-400"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
                >
                  阅读全文 →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
