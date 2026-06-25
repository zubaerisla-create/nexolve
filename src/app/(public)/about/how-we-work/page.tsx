import React from "react";
import type { Metadata } from "next";
import FAQ from "@/components/sections/landing/FAQ";
import LetsCreate from "@/components/sections/landing/LetsCreate";
import DynamicParallaxImage from "@/components/sections/landing/DynamicParallaxImage";
import WorkflowExplorer from "@/components/sections/about/WorkflowExplorer";
import {
  Sparkles,
  Zap,
  Shield,
  MessageSquare,
  Layers,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work | Nexolve",
  description:
    "Explore our engineering methodology, interactive delivery phases, communication practices, and how we partner with ambitious teams to deploy high-grade technology.",
};

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="w-full py-12 md:py-16 lg:py-20 mt-16 sm:mt-24">
        <div className="flex px-4 sm:px-6 lg:px-10 flex-col xl:flex-row xl:items-end xl:justify-between gap-8 md:gap-10 xl:gap-16 mb-8 md:mb-12 lg:mb-16 max-w-[1920px] mx-auto">
          <h1 className="text-5xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-[8rem] 2xl:text-[9rem] leading-none font-semibold tracking-tight max-w-full xl:max-w-[60%] font-display text-neutral-900">
            How We Work
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-500 max-w-full sm:max-w-2xl xl:max-w-xl pb-2">
            We bridge the gap between abstract strategy and precise code execution. Our transparent, highly structured lifecycle is designed to deliver reliable, production-grade applications that scale.
          </p>
        </div>

        {/* Full-width Parallax Banner */}
        <DynamicParallaxImage
          src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600&auto=format&fit=crop"
          alt="Engineering Team Collaboration"
          containerClassName="w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-[650px] xl:h-[80vh]"
          contentClassName="relative w-full h-full"
          imageClassName="object-cover"
          range={[-180, 100]}
        />
      </section>

      {/* 2. CORE PILLARS SECTION */}
      <section className="mx-auto w-full max-w-[1920px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-[56px] 2xl:px-[72px] text-neutral-900 border-b border-neutral-100">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold block mb-2">
            Operational Principles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-display tracking-tight text-neutral-900">
            Engineered for Predictability
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 mt-4 leading-relaxed">
            Software development shouldn&apos;t be a black box. We hold ourselves to operational standards that ensure you always know what we are building, why we are building it, and how it is performing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-neutral-50 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-950 mb-3 tracking-tight">
                High-Fidelity Scoping
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We deep-dive into database design, third-party integrations, and edge cases prior to development. This thorough architectural planning prevents costly reworks and guarantees shipping deadlines.
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-8">01 / CONCEPTUAL CLARITY</div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-neutral-50 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white mb-6">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-950 mb-3 tracking-tight">
                Iterative Transparency
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                You receive access to active git logs, real-time ticket trackers, and automated deployments. Weekly demo sprints ensure your team inspects functional features instead of static updates.
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-8">02 / CONTINUOUS INTEGRATION</div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-neutral-50 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white mb-6">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-950 mb-3 tracking-tight">
                Ownership & Protection
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We provide a full codebase transfer, custom documentation, admin walkthroughs, and a standard 6-month warranty on launch. We build to ensure your team is fully independent and supported.
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-8">03 / LIFELONG WARRANTY</div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE TIMELINE / ENGINE SECTION */}
      <section className="mx-auto w-full max-w-[1920px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-[56px] 2xl:px-[72px] bg-white border-b border-neutral-100">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold block mb-2">
            The Delivery Cycle
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-display tracking-tight text-neutral-900">
            Interactive Engine Breakdown
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 mt-4 leading-relaxed">
            Select a phase below to inspect exactly what actions, outcomes, tools, and roles define each step of our development process.
          </p>
        </div>

        {/* The interactive timeline component */}
        <div className="w-full mt-8">
          <WorkflowExplorer />
        </div>
      </section>

      {/* 4. COMMUNICATION COMMITMENTS */}
      <section className="mx-auto w-full max-w-[1920px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-[56px] 2xl:px-[72px] bg-neutral-950 text-white rounded-3xl my-12 overflow-hidden relative">
        {/* Decorative subtle top gradient */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-semibold block mb-3">
                Team Cooperation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-display tracking-tight text-white mb-6">
                Cooperating in Lockstep
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-lg">
                Communication is the single most vital factor in software engineering. We don&apos;t wait for monthly summaries; we integrate our tools directly with yours to ensure total alignment.
              </p>
            </div>

            {/* Micro Quote */}
            <div className="border-l-2 border-neutral-700 pl-4 py-1.5 mt-4 hidden lg:block">
              <p className="text-xs italic text-neutral-400 leading-relaxed">
                &ldquo;Align early, build fast, deploy often. Software succeeds when transparency and communication are integrated into the source control.&rdquo;
              </p>
            </div>
          </div>

          {/* Right features column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6 pt-2">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
                <MessageSquare className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-semibold text-neutral-100">
                Shared Slack Channels
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Direct daily communication with our engineers and project lead. Ask questions, sync instantly, and avoid long email delay chains.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
                <Layers className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-semibold text-neutral-100">
                Weekly Demo Loops
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                A live, hands-on review every week to demo progress, check layout responsiveness, and align on next sprint adjustments.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
                <Terminal className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-sm font-semibold text-neutral-100">
                Complete IP Transfer
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                At launch, all assets, database configuration, environments, and intellectual property are handed over with screen-recorded tutorials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ & CALL TO ACTION */}
      <FAQ />
      <LetsCreate />
    </main>
  );
}
