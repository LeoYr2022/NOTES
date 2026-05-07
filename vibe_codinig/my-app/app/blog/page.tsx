import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <div className="flex flex-col flex-1 items-center bg-md-surface font-sans">
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
              <h1 className="text-3xl font-medium tracking-tight text-md-on-surface">
                博客
              </h1>
              <p className="mt-2 max-w-xl text-lg leading-8 text-md-on-surface-variant">
                用中文记录的 Next.js 笔记：路由、数据流以及各模块如何拼在一起。
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="shrink-0 text-sm font-medium text-md-primary underline-offset-4 hover:underline"
          >
            ← 首页
          </Link>
        </header>

        <ul className="flex flex-col gap-8">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Card className="group">
                <CardHeader className="gap-3 pb-0">
                  <CardDescription className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden>·</span>
                    <span>约 {post.readMinutes} 分钟阅读</span>
                  </CardDescription>
                  <CardTitle className="group-hover:text-md-primary">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="outline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-md-primary"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3">
                  <p className="text-base leading-7 text-md-on-surface-variant">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button
                    variant="link"
                    className="h-auto p-0 text-sm font-medium"
                    asChild
                  >
                    <Link href={`/blog/${post.slug}`}>阅读全文 →</Link>
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
