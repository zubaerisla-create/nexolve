"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { ScrollAnimatedText } from "@/components/shared/ScrollAnimatedText";
import TitleSection from "@/components/element/TitleSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const IMAGE_URL =
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80";

const defaultFaqs = [
  {
    id: 1,
    question: "How does your design process work?",
    answer:
      "Our process includes discovery, strategy, design, feedback, and delivery — ensuring clarity, collaboration, and results at every stage.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A typical branding project takes 4–6 weeks, while full web builds range from 8–16 weeks.",
  },
  {
    id: 3,
    question: "Do you work with startups or only established brands?",
    answer:
      "We work with both. Whether you're a seed-stage startup or a scaling enterprise, we tailor our approach to where you are and where you're going.",
  },
  {
    id: 4,
    question: "Can you handle custom or complex requests?",
    answer:
      "Absolutely. Complex, bespoke projects are where we thrive. Reach out and we'll scope it together.",
  },
];

function useParallax(
  ref: React.RefObject<HTMLDivElement>,
  range: [string, string],
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  return useTransform(smooth, [0, 1], range);
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FaqItem[];
}

export default function FAQ({ faqs: customFaqs }: FAQProps) {
  const displayFaqs = customFaqs && customFaqs.length > 0 ? customFaqs : defaultFaqs;
  const [openId, setOpenId] = useState<number | null>(displayFaqs[0]?.id || 1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useParallax(imageRef as React.RefObject<HTMLDivElement>, [
    "-8%",
    "8%",
  ]);
  const rightY = useParallax(rightRef as React.RefObject<HTMLDivElement>, [
    "20px",
    "-20px",
  ]);

  // Inner parallax crop for the image — must be at top level (Rules of Hooks)
  const { scrollYProgress: imgScrollProgress } = useScroll({
    target: imageRef as React.RefObject<HTMLDivElement>,
    offset: ["start end", "end start"],
  });
  const imgSpring = useSpring(imgScrollProgress, { stiffness: 60, damping: 20 });
  const imgCropY = useTransform(imgSpring, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-12 lg:px-20 py-24 bg-white"
    >
      <div className="max-w-420 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ── Left column ── */}
          <motion.div
            ref={imageRef}
            className="flex flex-col gap-8"
            style={{ y: imageY }}
          >
            {/* Image with parallax inner crop */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                borderRadius: "12px",
                aspectRatio: "3 / 3.8",
              }}
            >
              <motion.img
                src={IMAGE_URL}
                alt="Support"
                className="w-full h-full object-cover"
                style={{ scale: 1.12, y: imgCropY }}
                draggable={false}
              />
            </div>

            {/* CTA below image */}
            <div className="flex flex-col gap-2">
              <p
                className="font-semibold text-slate-900"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "1.05rem",
                }}
              >
                Still have questions?
              </p>
              <p
                className="text-sm text-slate-400"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Let's discuss your project and explore how AI can help your business.
              </p>

              <div className="flex items-center gap-2 mt-3">
                <Button variant={"default"} className=" px-8 py-6" >
                  <Link href="/contact" className="flex items-center gap-1 justify-between">
                    Book a Discovery Call 
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            ref={rightRef}
            className="flex flex-col gap-8"
            style={{ y: rightY }}
          >
            {/* Heading */}
            <ScrollAnimatedText
              title="Answered questions. Everything you might want to know—up front."
              className="text-5xl mt-40"
            />
            <TitleSection
              title="FAQ"
              className="text-[14rem]"
              scrollYProgress={scrollYProgress}
            />

            {/* FAQ Cards — premium redesign */}
            <div className="flex flex-col gap-0 w-full -mt-20 relative z-100 rounded-xl overflow-hidden border border-neutral-100 shadow-sm">
              {displayFaqs.map((faq, idx) => {
                const isOpen = openId === faq.id;
                const isLast = idx === displayFaqs.length - 1;
                return (
                  <div
                    key={faq.id}
                    className="w-full cursor-pointer"
                    style={{
                      background: isOpen ? "#ffffff" : "#fafafa",
                      borderBottom: isLast ? "none" : "1px solid #efefef",
                      transition: "background 0.2s ease",
                    }}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                  >
                    {/* Question row */}
                    <div className="flex items-center justify-between px-5 py-4 gap-4">
                      <div className="flex items-center gap-3">
                        {/* Number badge */}
                        <span
                          className="flex items-center justify-center w-6 h-6 text-white text-xs font-semibold flex-shrink-0 transition-colors duration-200"
                          style={{
                            background: isOpen ? "#0f0f0f" : "#d4d4d4",
                            borderRadius: "999px",
                            fontFamily: "var(--font-dm-sans)",
                          }}
                        >
                          {faq.id}
                        </span>
                        <span
                          className="text-slate-900 text-sm font-medium leading-snug"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {faq.question}
                        </span>
                      </div>

                      {/* +/− icon */}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="flex-shrink-0 select-none leading-none"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "1.3rem",
                          color: isOpen ? "#0f0f0f" : "#aaa",
                        }}
                      >
                        +
                      </motion.span>
                    </div>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <p
                            className="pb-5 text-sm leading-relaxed"
                            style={{
                              fontFamily: "var(--font-dm-sans)",
                              color: "rgba(0,0,0,0.45)",
                              paddingLeft: "calc(1.25rem + 24px + 12px)",
                              paddingRight: "1.25rem",
                            }}
                          >
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
