import React from "react";
import type { Metadata } from "next";
import FAQ from "@/components/sections/landing/FAQ";
import LetsCreate from "@/components/sections/landing/LetsCreate";
import DynamicParallaxImage from "@/components/sections/landing/DynamicParallaxImage";

export const metadata: Metadata = {
  title: "How We Work | Nexolve",
  description: "Learn about our process, our values, and how we partner with ambitious brands to build digital products.",
};

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="w-full py-12 md:py-16 lg:py-20 mt-16 sm:mt-24">
        <div className="flex px-4 sm:px-6 lg:px-10 flex-col xl:flex-row xl:items-start xl:justify-between gap-8 md:gap-10 xl:gap-16 mb-8 md:mb-12 lg:mb-16 max-w-[1920px] mx-auto">
          <h1 className="text-5xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[8rem] 2xl:text-[10rem] leading-none font-semibold tracking-tight max-w-full xl:max-w-[55%]">
            How We Work
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-neutral-700 max-w-full sm:max-w-2xl xl:max-w-xl">
            We bridge the gap between idea and execution with a transparent, collaborative, and highly structured process designed to deliver exceptional results.
          </p>
        </div>

        <DynamicParallaxImage
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
          alt="How We Work"
          containerClassName="w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-[750px] xl:h-[calc(100vh-100px)]"
          contentClassName="relative w-full h-full"
          imageClassName="object-cover"
          range={[-240, 150]}
        />
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-14 lg:py-16 xl:px-[56px] xl:py-[52px] 2xl:px-[72px] text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="text-[20px] font-medium mb-3 text-black">1. Alignment & Strategy</div>
            <p className="text-[16px] text-black/60 leading-relaxed">
              We start by understanding your goals, user needs, and business constraints to design a clear, risk-reduced roadmap.
            </p>
          </div>
          <div>
            <div className="text-[20px] font-medium mb-3 text-black">2. Iterative Building</div>
            <p className="text-[16px] text-black/60 leading-relaxed">
              Our engineering team builds in weekly sprints, ensuring you always have a live preview to test, inspect, and adjust.
            </p>
          </div>
          <div>
            <div className="text-[20px] font-medium mb-3 text-black">3. Smooth Handoff & Support</div>
            <p className="text-[16px] text-black/60 leading-relaxed">
              We deploy with robust CI/CD, conduct extensive documentation handoffs, and include 6 months of ongoing support.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <LetsCreate />
    </main>
  );
}
