export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Next.js 入门：从脚手架到第一条路由",
    excerpt:
      "App Router、服务端组件与内置优化如何帮你少拼胶水、更快交付全栈 React 应用。",
    date: "2026-04-18",
    readMinutes: 6,
    paragraphs: [
      "Next.js 在 app 目录下提供基于文件的路由：每个 page.tsx 对应一条 URL，layout.tsx 则能在多次导航之间保持布局不卸载。图片、字体等也有开箱即用的生产级默认配置。",
      "你可以从官方模板或 create-next-app 起步，再逐步扩展页面。路由与 UI 同目录存放，心智负担小，重构时也更容易定位代码。",
    ],
  },
  {
    slug: "app-router-and-data",
    title: "App Router 与数据获取：何时在服务端拉数",
    excerpt:
      "服务端异步组件、流式渲染与 Suspense 如何配合，以及把逻辑和路由放在一起为什么更省事。",
    date: "2026-04-28",
    readMinutes: 8,
    paragraphs: [
      "在 App Router 里，服务端组件可以直接 async/await 拉取数据，敏感信息不会进客户端 bundle，首屏也能少发一些 JavaScript。",
      "对较慢的数据块，可以配合 loading.tsx 与 Suspense 做局部占位，先出壳再流式填充。把边界划清楚，每条路由仍然独立、好推理。",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
