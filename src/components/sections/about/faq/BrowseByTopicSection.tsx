"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import TitleSection from "@/components/element/TitleSection";
import { ScrollAnimatedText } from "@/components/shared/ScrollAnimatedText";

type TopicCard = {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
};

const topics: TopicCard[] = [
  {
    id: "overview",
    index: "01",
    title: "Overview",
    description:
      "Essential questions to understand who we are, what we do, and who we work with.",
    image:
      "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "services",
    index: "02",
    title: "Services",
    description:
      "Details about our solutions, consulting offerings, and system capabilities.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "process",
    index: "03",
    title: "Process",
    description:
      "How we approach problems, execute projects, and collaborate with clients.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "support",
    index: "04",
    title: "Support",
    description:
      "Post-launch support, maintenance, updates, and system optimization.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
];

function TopicCardItem({ item, i }: { item: TopicCard; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
      className="group relative flex flex-col overflow-hidden border border-neutral-200 bg-white"
      style={{ borderRadius: "2px" }}
    >
      {/* Image — fixed height */}
      <div className="relative h-52 w-full overflow-hidden flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
        </motion.div>
        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {/* Index badge over image */}
        <span
          className="absolute top-4 left-4 font-mono text-xs tracking-widest text-white/70"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          [{item.index}]
        </span>
      </div>

      {/* Content — flex-grow keeps all cards same height */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3
            className="text-2xl font-semibold leading-tight tracking-tight text-neutral-900 mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {item.title}
          </h3>
          <p
            className="text-sm leading-relaxed text-neutral-500"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            {item.description}
          </p>
        </div>

        {/* Arrow link */}
        <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-neutral-400 tracking-wide uppercase transition-colors duration-200 group-hover:text-neutral-900">
          <span style={{ fontFamily: "var(--font-dm-sans)" }}>Explore</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path
              d="M2 10L10 2M10 2H4M10 2V8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-neutral-900 transition-all duration-300 group-hover:w-full" />
    </motion.article>
  );
}

export default function BrowseByTopicSection() {
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={headerRef}
      className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20 xl:px-16"
    >
      <TitleSection
        title="FAQ"
        scrollYProgress={scrollYProgress}
        topClassName="top-10 md:-top-14"
      />

      <div className="mx-auto max-w-420">
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <ScrollAnimatedText title="Browse by topic" />
          </div>
        </div>

        {/* Grid — items-stretch ensures equal height across each row */}
        <div className="grid grid-cols-1 gap-px bg-neutral-200 sm:grid-cols-2 xl:grid-cols-4">
          {topics.map((item, i) => (
            <div key={item.id} className="bg-white">
              <TopicCardItem item={item} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
