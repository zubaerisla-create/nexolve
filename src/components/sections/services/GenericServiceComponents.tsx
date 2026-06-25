"use client";

import { motion, useInView, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TitleSection from "@/components/element/TitleSection";
import { ScrollAnimatedText } from "@/components/shared/ScrollAnimatedText";
import DynamicParallaxImage from "@/components/sections/landing/DynamicParallaxImage";
import { ServiceDetailData, WorkflowStep, TechItem } from "@/data/dynamic-services-data";

// --- Intro Section ---
export function GenericServiceIntroSection({ data }: { data: ServiceDetailData }) {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20">
      <div className="flex px-4 sm:px-6 lg:px-10 flex-col xl:flex-row xl:items-start xl:justify-between gap-8 md:gap-10 xl:gap-16 mb-8 md:mb-12 lg:mb-16 max-w-[1920px] mx-auto">
        <h1 className="text-5xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[8rem] 2xl:text-[10rem] leading-none font-semibold tracking-tight max-w-full xl:max-w-[55%]">
          {data.heroTitle}
        </h1>

        <p className="text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-neutral-700 max-w-full sm:max-w-2xl xl:max-w-xl">
          {data.heroDescription}
        </p>
      </div>

      <DynamicParallaxImage
        src={data.heroImage}
        alt={`${data.heroTitle} hero image`}
        containerClassName="w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-[750px] xl:h-[calc(100vh-100px)]"
        contentClassName="relative w-full h-full"
        imageClassName="object-cover"
        range={[-240, 150]}
      />
    </div>
  );
}

// --- Process Timeline ---
export function GenericServiceProcessTimeline({ data }: { data: ServiceDetailData }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { amount: 0.1, once: false });
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={headerRef}
      style={{
        opacity: headerInView ? 1 : 0,
        transform: headerInView ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
      className="bg-[#f7f7f5] px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      <TitleSection scrollYProgress={scrollYProgress} title="Process" />
      <div className="mx-auto max-w-400 mt-10">
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <ScrollAnimatedText
              title={data.processTitle}
              className="text-4xl md:text-6xl xl:text-7xl"
            />
          </div>
          <p className="max-w-2xl text-sm md:text-lg leading-7 md:leading-8 text-neutral-700">
            {data.processDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data.steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              className="flex flex-col rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white text-sm font-semibold flex-shrink-0">
                {String(step.id).padStart(2, "0")}
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-black/45">
                {step.eyebrow}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] leading-tight text-black">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-700 flex-grow">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Flow Stack ---
function GenericFlowCardItem({
  item,
  index,
  total,
  progress,
  serviceName,
}: {
  item: WorkflowStep;
  index: number;
  total: number;
  progress: MotionValue<number>;
  serviceName: string;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = (index + 1) * segment;
  const prevStart = Math.max(0, start - segment);

  const firstCardY = useTransform(progress, [0, segment], ["0%", "0%"]);
  const stackedCardY = useTransform(
    progress,
    [prevStart, start, end],
    ["100%", "0%", "0%"]
  );

  const y = index === 0 ? firstCardY : stackedCardY;
  const scale = useTransform(progress, [start, end], [1, 0.92]);
  const opacity = useTransform(progress, [start, end], [1, 0.96]);

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 1,
        transformOrigin: "top center",
      }}
      className="absolute inset-0 will-change-transform"
    >
      <div className="flex h-screen w-full items-center justify-center bg-[#f7f7f5]">
        <div className="grid h-[calc(100vh-2rem)] w-full grid-cols-1 overflow-hidden border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative h-[50vh] min-h-[320px] lg:h-full">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority={index < 2}
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
            <div className="absolute left-4 top-4 flex items-center gap-3 md:left-6 md:top-6">
              <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                {item.eyebrow}
              </span>
              <span className="text-sm font-medium text-white">
                {item.id} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-10 xl:p-12 text-black">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                {serviceName} Workflow
              </p>

              <h2 className="mt-4 max-w-[14ch] text-3xl leading-[0.95] font-semibold tracking-[-0.06em] text-black md:text-5xl xl:text-6xl">
                {item.title}
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-700 md:text-base md:leading-8">
                {item.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {item.deliverables.map((deliverable) => (
                  <span
                    key={deliverable}
                    className="rounded-full border border-black/10 bg-[#f7f7f5] px-4 py-2 text-xs font-medium text-black/75 md:text-sm"
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 text-sm text-black/40">
              <span>Scroll to continue</span>
              <button 
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 hover:text-black transition-colors duration-200 cursor-pointer"
              >
                Next phase
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function GenericServiceFlowStack({ data }: { data: ServiceDetailData }) {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#f7f7f5] text-neutral-900"
      style={{
        height: `${data.steps.length * 100}vh`,
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full w-full">
          {data.steps.map((item, index) => (
            <GenericFlowCardItem
              key={item.id}
              item={item}
              index={index}
              total={data.steps.length}
              progress={scrollYProgress}
              serviceName={data.heroTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Tech Highlights ---
export function GenericServiceTechHighlights({ data }: { data: ServiceDetailData }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { amount: 0.1, once: false });
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={headerRef}
      style={{
        opacity: headerInView ? 1 : 0,
        transform: headerInView ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
      className="bg-white relative px-4 py-16 sm:px-6 lg:px-10 lg:py-24"
    >
      <TitleSection scrollYProgress={scrollYProgress} title="Foundation" />
      <div className="mx-auto max-w-375 mt-10">
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <ScrollAnimatedText title={data.techTitle} />
          </div>
          <p className="max-w-2xl text-sm md:text-lg leading-7 md:leading-8 text-neutral-700">
            {data.techDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.techItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.04 }}
              className="rounded-[24px] border border-black/10 bg-[#f7f7f5] p-6"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.04em] leading-tight text-black">
                {item.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-neutral-700">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
