import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag, Calendar, User } from "lucide-react";
import { insights } from "@/data/insights";
import CTASection from "@/sections/home/CTASection";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const insight = insights.find((i) => i.slug === params.slug);
  if (!insight) return { title: "Not Found" };
  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = insights.find((i) => i.slug === params.slug);
  if (!insight) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-neo-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neo-orange/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <a
            href="/insights/"
            className="inline-flex items-center gap-2 text-neo-muted hover:text-neo-orange transition-colors text-sm mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </a>

          {/* Category badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold text-neo-orange bg-neo-orange/10 border border-neo-orange/20 px-3 py-1 rounded-full">
              {insight.category}
            </span>
            {insight.featured && (
              <span className="text-xs font-bold text-neo-text bg-neo-surface border border-neo-border px-3 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neo-text mb-6 leading-tight">
            {insight.title}
          </h1>

          <p className="text-neo-muted text-xl leading-relaxed mb-8">{insight.excerpt}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-neo-subtle text-sm pb-8 border-b border-neo-border">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-neo-orange" />
              {insight.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-neo-orange" />
              {insight.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-neo-orange" />
              {insight.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-neo-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {insight.content.map((section, i) => (
              <div key={i}>
                <h2 className="text-neo-text text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-1 h-7 bg-neo-orange rounded-full flex-shrink-0" />
                  {section.heading}
                </h2>
                <div className="pl-4">
                  {section.body.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className="text-neo-muted leading-relaxed mb-4 whitespace-pre-line"
                      dangerouslySetInnerHTML={{
                        __html: para.replace(/\*\*(.+?)\*\*/g, '<strong class="text-neo-text font-semibold">$1</strong>'),
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-neo-border">
            <div className="flex flex-wrap gap-2 items-center">
              <Tag className="w-4 h-4 text-neo-orange" />
              {insight.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-neo-muted bg-neo-surface border border-neo-border px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related articles */}
          <div className="mt-12 pt-8 border-t border-neo-border">
            <h3 className="text-neo-text font-bold text-lg mb-6">More Insights</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {insights
                .filter((i) => i.slug !== insight.slug)
                .slice(0, 2)
                .map((related) => (
                  <a
                    key={related.slug}
                    href={`/insights/${related.slug}/`}
                    className="p-4 rounded-xl border border-neo-border bg-neo-card hover:border-neo-orange/30 transition-all duration-200 group"
                  >
                    <span className="text-xs font-bold text-neo-orange bg-neo-orange/10 px-2 py-0.5 rounded-full">
                      {related.category}
                    </span>
                    <p className="text-neo-text font-semibold text-sm mt-2 mb-1 leading-snug group-hover:text-neo-orange transition-colors">
                      {related.title}
                    </p>
                    <span className="text-neo-subtle text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {related.readTime}
                    </span>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
