import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Blog Comparison · Local SEO Experiment",
  description: "Compare different versions of the same article optimized with various AI and human-in-the-loop workflows.",
};

const POST_VERSIONS = [
  {
    version: "Version 1",
    tag: "Baseline AI",
    tagColor: "bg-ink-100 text-ink-800",
    title: "What Are the Best Wedding Venues in Toronto? (Baseline)",
    description: "Written in the default AI tone with standard prompts. Clean, but lacks specific brand voice or targeted SEO optimization.",
    stats: "1,500 words · Standard SEO",
    path: "/blog/top-10-wedding-venues-in-toronto",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=70",
  },
  {
    version: "Version 2",
    tag: "SEO & Voice Matched",
    tagColor: "bg-[#fde68a] text-ink-900 font-bold",
    title: "What Are the Best Wedding Venues in Toronto? (Optimized)",
    description: "Rewritten with a customized brand voice file and keyword optimization mapped precisely to match top-ranking competitors.",
    stats: "2,100 words · Competitor Tuned",
    path: "/blog/top-10-wedding-venues-in-toronto-v2",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=70",
  },
  {
    version: "Version 3",
    tag: "Human Copywritten Polish",
    tagColor: "bg-emerald-100 text-emerald-800 font-bold",
    title: "What Are the Best Wedding Venues in Toronto? (Final)",
    description: "The ultimate version: SEO-tuned, with added human storytelling, rich formatting, custom reviews, and high-converting CTAs.",
    stats: "2,500 words · Human-in-the-Loop",
    path: "/blog/top-10-wedding-venues-in-toronto-v3",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=70",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9]">
      <SiteHeader />

      <main className="flex-1 mx-auto max-w-6xl px-6 py-16">
        <header className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
            SEO Case Study
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tightish text-ink-900 md:text-5xl">
            The Blog Writing Experiment.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            We drafted the exact same article topic using three separate workflows to test which style performs best on Google. Click on any version below to read the output.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-3">
          {POST_VERSIONS.map((post) => (
            <article
              key={post.version}
              className="flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition hover:border-ink-200 hover:shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[16/10] w-full object-cover border-b border-ink-50"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-ink-400">
                    {post.version}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${post.tagColor}`}>
                    {post.tag}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tightish text-ink-900">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                  {post.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-ink-50 pt-4 text-xs">
                  <span className="font-mono text-ink-400">{post.stats}</span>
                  <Link
                    href={post.path}
                    className="font-semibold text-ink-900 hover:underline"
                  >
                    Read post &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20 rounded-2xl border border-ink-100 bg-white p-10 text-center">
          <h2 className="text-xl font-semibold tracking-tightish text-ink-900">
            Why do these differences matter?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-600">
            Google's ranking algorithms look for E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness). Comparing V1 (dry AI) with V3 (rich custom data & storytelling) demonstrates how layering real value satisfies search intent and drives conversions.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
