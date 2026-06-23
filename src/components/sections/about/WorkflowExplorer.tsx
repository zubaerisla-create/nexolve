"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Code,
  Rocket,
  ShieldCheck,
  Check,
  Users,
  MessageSquare,
  Sparkles,
  ChevronDown,
} from "lucide-react";

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgLight: string;
  glowColor: string;
  activities: string[];
  deliverables: string[];
  clientRole: string;
  tech: string[];
}

const phases: Phase[] = [
  {
    id: 1,
    title: "Discovery & Strategy",
    subtitle: "Scoping & Blueprinting",
    description:
      "We align on target outcomes, user personas, technical requirements, and system design before writing a single line of code. This minimizes risk and ensures architectural alignment.",
    icon: Search,
    color: "from-blue-600 to-cyan-500",
    bgLight: "bg-blue-50/10",
    glowColor: "rgba(59, 130, 246, 0.15)",
    activities: [
      "Discovery workshops & target KPI alignment",
      "User persona mapping & user journey definition",
      "Technical architecture blueprints & database schemes",
      "High-fidelity wireframes & clickable Figma prototypes",
    ],
    deliverables: [
      "Product Requirement Document (PRD)",
      "Interactive Figma Prototype",
      "System Architecture Diagram",
      "Detailed Project Roadmap & Sprints",
    ],
    clientRole:
      "Participate in discovery syncs, share system requirements, and approve design mockups and product blueprint.",
    tech: ["Figma", "Whimsical", "Linear", "Notion"],
  },
  {
    id: 2,
    title: "Product Engineering",
    subtitle: "Weekly Sprints & Quality Code",
    description:
      "Our engineering team builds using weekly agile sprints, keeping you updated with live staging links to inspect, test, and provide ongoing feedback.",
    icon: Code,
    color: "from-violet-600 to-indigo-500",
    bgLight: "bg-indigo-50/10",
    glowColor: "rgba(99, 102, 241, 0.15)",
    activities: [
      "Agile weekly development cycles (sprints)",
      "Strict code formatting, linting, & peer review audits",
      "Automated unit, integration, & end-to-end testing",
      "Weekly staging deployment & live product demonstrations",
    ],
    deliverables: [
      "Production-Grade Git Repository",
      "Staging Environments (Weekly builds)",
      "Interactive API Documentation",
      "Sprint Burn-down & Progress Reports",
    ],
    clientRole:
      "Test staging builds, participate in weekly demo sessions, and align on next sprint's backlog priorities.",
    tech: ["Next.js", "TypeScript", "Node.js", "Docker", "Jest"],
  },
  {
    id: 3,
    title: "Launch & Transition",
    subtitle: "Safe Deployments & Handoffs",
    description:
      "We launch your product using fully automated, zero-downtime CI/CD pipelines, followed by developer handovers and live team training sessions.",
    icon: Rocket,
    color: "from-rose-500 to-orange-500",
    bgLight: "bg-rose-50/10",
    glowColor: "rgba(244, 63, 94, 0.15)",
    activities: [
      "Production infrastructure provisioning & optimization",
      "Zero-downtime automated CI/CD pipeline setup",
      "Penetration testing, vulnerability scanning & auditing",
      "SEO indexing, structured data, & analytics installation",
    ],
    deliverables: [
      "Live Production System",
      "Developer Handover & System Documentation",
      "Video Onboarding & Training Materials",
      "Sentry & Datadog Monitoring Dashboards",
    ],
    clientRole:
      "Sign off on final staging build, assist with custom domain mapping, and receive administrator onboarding.",
    tech: ["AWS", "Vercel", "GitHub Actions", "Sentry", "Google Analytics"],
  },
  {
    id: 4,
    title: "Support & Evolution",
    subtitle: "Warranty & Continuous Improvement",
    description:
      "Every Nexolve build includes a standard 6-month post-launch warranty. We actively monitor servers, optimize speed, and plan feature iterations.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50/10",
    glowColor: "rgba(16, 185, 129, 0.15)",
    activities: [
      "24/7 server monitoring & automated crash alerts",
      "Rapid-response bug fixing & security patch deployments",
      "Monthly performance audits & Core Web Vitals checks",
      "Strategic roadmap planning for future feature rollouts",
    ],
    deliverables: [
      "6-Month Support Warranty Agreement",
      "Monthly Server & Analytics Health Audits",
      "Dedicated SLA Support Channel Access",
      "Phase 2 Product Iteration Roadmap",
    ],
    clientRole:
      "Submit bugs or new requests through our portal, review monthly reports, and prioritize roadmap items.",
    tech: ["Datadog", "LogRocket", "Slack SLA", "HelpScout"],
  },
];

export default function WorkflowExplorer() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [expandedMobileTab, setExpandedMobileTab] = useState<number | null>(1);

  const activePhase = phases.find((p) => p.id === activeTab) || phases[0];
  const ActiveIcon = activePhase.icon;

  const toggleMobileTab = (id: number) => {
    setExpandedMobileTab(expandedMobileTab === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* --- DESKTOP LAYOUT (md and up) --- */}
      <div className="hidden md:grid grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[550px]">
        {/* Left Navigation: Timeline Vertical */}
        <div className="col-span-5 flex flex-col justify-start relative pl-6 border-l border-neutral-200 py-4">
          {phases.map((phase) => {
            const isSelected = phase.id === activeTab;
            const PhaseIcon = phase.icon;

            return (
              <button
                key={phase.id}
                onClick={() => setActiveTab(phase.id)}
                className="group relative flex flex-col items-start text-left mb-10 last:mb-0 transition-all duration-300 focus:outline-hidden w-full cursor-pointer"
              >
                {/* Active Indicator Bar on Timeline */}
                {isSelected && (
                  <motion.div
                    layoutId="activeTimelineIndicator"
                    className={`absolute -left-[27px] top-1.5 w-[6px] h-10 rounded-full bg-linear-to-b ${phase.color}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Outer Bullet Circle */}
                <div
                  className={`absolute -left-[35px] top-2.5 w-4.5 h-4.5 rounded-full border bg-white flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "border-neutral-900 scale-110 shadow-sm"
                      : "border-neutral-300 group-hover:border-neutral-600"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isSelected ? "bg-neutral-900" : "bg-transparent group-hover:bg-neutral-300"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="pl-4">
                  <span
                    className={`text-[11px] font-mono tracking-widest uppercase transition-colors duration-300 ${
                      isSelected ? "text-neutral-950 font-bold" : "text-neutral-400 group-hover:text-neutral-600"
                    }`}
                  >
                    PHASE 0{phase.id}
                  </span>
                  <h3
                    className={`text-lg lg:text-xl font-semibold tracking-tight transition-colors duration-300 mt-1 ${
                      isSelected ? "text-neutral-950" : "text-neutral-400 group-hover:text-neutral-700"
                    }`}
                  >
                    {phase.title}
                  </h3>
                  <p
                    className={`text-xs mt-1 transition-all duration-300 max-w-[280px] leading-relaxed ${
                      isSelected ? "text-neutral-600" : "text-neutral-400/80 group-hover:text-neutral-500 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {phase.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Detail Panel */}
        <div className="col-span-7 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-neutral-50 border border-neutral-100 rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full relative overflow-hidden shadow-xs"
              style={{
                boxShadow: `0 20px 40px -15px ${activePhase.glowColor}`,
              }}
            >
              {/* Top Banner & Header */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-linear-to-br ${activePhase.color} flex items-center justify-center text-white`}
                    >
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                        Phase 0{activePhase.id}
                      </span>
                      <h4 className="text-sm font-semibold text-neutral-500">
                        {activePhase.subtitle}
                      </h4>
                    </div>
                  </div>
                  <span className="text-4xl lg:text-5xl font-black text-neutral-200/60 select-none font-mono">
                    0{activePhase.id}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900 mb-3">
                  {activePhase.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-8">
                  {activePhase.description}
                </p>

                {/* Split lists: Activities & Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  {/* Activities */}
                  <div>
                    <h5 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 font-semibold">
                      What We Do
                    </h5>
                    <ul className="space-y-3.5">
                      {activePhase.activities.map((act, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[13px] text-neutral-700 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0" />
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h5 className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 font-semibold">
                      What You Get
                    </h5>
                    <ul className="space-y-3">
                      {activePhase.deliverables.map((del, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[13px] text-neutral-800 font-medium">
                          <Check className="w-4 h-4 text-neutral-900 flex-shrink-0" />
                          {del}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Metadata: Communication & Tech Stack */}
              <div className="border-t border-neutral-200/80 pt-6 mt-4 flex flex-col gap-5">
                {/* Communication */}
                <div className="flex items-start gap-3 bg-white/60 rounded-xl p-3.5 border border-neutral-200/50">
                  <Users className="w-4.5 h-4.5 text-neutral-800 mt-0.5 flex-shrink-0" />
                  <div>
                    <h6 className="text-[11px] font-semibold text-neutral-800 leading-none mb-1">
                      Client Involvement
                    </h6>
                    <p className="text-xs text-neutral-500 leading-normal">
                      {activePhase.clientRole}
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] text-neutral-400 font-mono mr-1">
                    Tools / Stack:
                  </span>
                  {activePhase.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md border border-neutral-200/70 bg-white text-[10px] font-medium text-neutral-600 hover:border-neutral-300 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- MOBILE LAYOUT (Accordion style) --- */}
      <div className="md:hidden flex flex-col gap-4">
        {phases.map((phase) => {
          const isExpanded = expandedMobileTab === phase.id;
          const PhaseIcon = phase.icon;

          return (
            <div
              key={phase.id}
              className={`border border-neutral-100 rounded-2xl overflow-hidden transition-all duration-300 ${
                isExpanded ? "bg-neutral-50 shadow-xs" : "bg-white"
              }`}
              style={{
                boxShadow: isExpanded
                  ? `0 12px 24px -10px ${phase.glowColor}`
                  : "none",
              }}
            >
              {/* Accordion Trigger Header */}
              <button
                onClick={() => toggleMobileTab(phase.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg bg-linear-to-br ${phase.color} flex items-center justify-center text-white flex-shrink-0`}
                  >
                    <PhaseIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Phase 0{phase.id}
                    </span>
                    <h3 className="text-base font-semibold text-neutral-900 leading-tight">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-neutral-400"
                >
                  <ChevronDown className="w-4.5 h-4.5" />
                </motion.div>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-neutral-200/50">
                      <p className="text-xs text-neutral-400 font-medium mb-2.5">
                        {phase.subtitle}
                      </p>
                      <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                        {phase.description}
                      </p>

                      <div className="space-y-5">
                        {/* What We Do */}
                        <div>
                          <h5 className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2 font-bold">
                            What We Do
                          </h5>
                          <ul className="space-y-2">
                            {phase.activities.map((act, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-[12px] text-neutral-700 leading-relaxed">
                                <span className="w-1 h-1 rounded-full bg-neutral-950 mt-1.5 flex-shrink-0" />
                                {act}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What You Get */}
                        <div>
                          <h5 className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2 font-bold">
                            What You Get
                          </h5>
                          <ul className="space-y-2">
                            {phase.deliverables.map((del, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-[12px] text-neutral-800 font-medium">
                                <Check className="w-3.5 h-3.5 text-neutral-900 flex-shrink-0" />
                                {del}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Client Involvement */}
                        <div className="bg-white/80 rounded-xl p-3 border border-neutral-200/40 mt-2">
                          <div className="flex items-start gap-2">
                            <Users className="w-3.5 h-3.5 text-neutral-700 mt-0.5 flex-shrink-0" />
                            <div>
                              <h6 className="text-[10px] font-semibold text-neutral-800 leading-none mb-1">
                                Client Involvement
                              </h6>
                              <p className="text-[11px] text-neutral-500 leading-normal">
                                {phase.clientRole}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-2">
                          <span className="text-[9px] text-neutral-400 font-mono">
                            Stack:
                          </span>
                          {phase.tech.map((t) => (
                            <span
                              key={t}
                              className="px-1.5 py-0.5 rounded bg-white border border-neutral-200/70 text-[9px] font-medium text-neutral-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
