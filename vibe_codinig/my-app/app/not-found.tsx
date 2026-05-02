import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[100dvh] flex-1 flex-col items-center justify-center overflow-hidden bg-black px-6 py-16 font-sans">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/not-found-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-90"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.07)_1px,transparent_1px)] bg-[size:56px_56px]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.35] mix-blend-overlay bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.04)_2px,rgba(255,255,255,0.04)_3px)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.25),transparent)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-cyan-300/90 shadow-[0_0_24px_rgba(34,211,238,0.15)] backdrop-blur-sm">
            <span className="size-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            signal lost
          </span>
          <h1
            className="font-mono text-[clamp(4.5rem,18vw,9rem)] font-bold leading-none tracking-tighter text-transparent"
            style={{
              background:
                "linear-gradient(180deg, #ecfeff 0%, #22d3ee 45%, #0891b2 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(34,211,238,0.35))",
            }}
          >
            404
          </h1>
          <p className="max-w-md font-mono text-sm leading-relaxed tracking-wide text-zinc-400">
            <span className="text-cyan-400/80">ERR_ROUTE_NOT_RESOLVED</span>
            <br />
            Requested path does not exist in this deployment matrix.
          </p>
        </div>

        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950/60 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_24px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md">
          <p className="text-sm leading-7 text-zinc-300">
            The coordinates you entered are outside the mapped sector. Verify
            the URL or return to base.
          </p>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <Link
            href="/"
            className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 font-mono text-sm font-medium text-cyan-100 transition-all hover:border-cyan-400/60 hover:bg-cyan-500/20 hover:shadow-[0_0_28px_rgba(34,211,238,0.2)]"
          >
            ← REBOOT TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
