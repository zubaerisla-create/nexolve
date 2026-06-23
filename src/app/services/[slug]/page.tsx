import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DynamicParallaxImage from "@/components/sections/landing/DynamicParallaxImage";
import FAQ from "@/components/sections/landing/FAQ";
import LetsCreate from "@/components/sections/landing/LetsCreate";
import React from "react";

interface ServiceData {
  title: string;
  description: string;
  image: string;
}

const serviceDataMap: Record<string, ServiceData> = {
  "ai-agents": {
    title: "AI Agents",
    description: "We design and deploy autonomous AI agents capable of reasoning, planning, and executing complex multi-step workflows to supercharge your operational efficiency.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop"
  },
  "rag-systems": {
    title: "RAG Systems",
    description: "Unlock the full potential of your proprietary data with Retrieval-Augmented Generation. We build secure, hallucination-free AI systems that ground their answers in your specific knowledge base.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop"
  },
  "ai-automation": {
    title: "AI Automation",
    description: "Streamline repetitive, high-volume tasks with intelligent automation. We integrate AI into your existing pipelines to reduce manual labor and eliminate bottlenecks.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
  },
  "custom-ai": {
    title: "Custom AI Solutions",
    description: "Bespoke machine learning models and AI integrations tailored exactly to your unique business requirements, data architecture, and industry compliance standards.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
  },
  "saas": {
    title: "SaaS Platforms",
    description: "End-to-end architecture, design, and development of scalable Software-as-a-Service platforms. Built for high availability, multi-tenancy, and rapid user growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
  },
  "devops": {
    title: "DevOps & CI/CD",
    description: "Accelerate your development lifecycle with robust DevOps practices. We implement automated testing, continuous integration, and seamless deployment pipelines.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1600&auto=format&fit=crop"
  },
  "maintenance": {
    title: "Maintenance & Support",
    description: "Keep your digital products running flawlessly. We provide continuous monitoring, performance tuning, security patching, and dedicated technical support.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"
  },
  "consulting": {
    title: "Technical Consulting",
    description: "Strategic guidance for complex technical challenges. From architecture reviews to tech stack selection, we help you make informed decisions that align with your business goals.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop"
  }
};

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = serviceDataMap[slug];
  
  if (!data) {
    return { title: "Service Not Found" };
  }
  
  return {
    title: `${data.title} | Nexolve Services`,
    description: data.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const data = serviceDataMap[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="w-full py-12 md:py-16 lg:py-20 mt-16 sm:mt-24">
        <div className="flex px-4 sm:px-6 lg:px-10 flex-col xl:flex-row xl:items-start xl:justify-between gap-8 md:gap-10 xl:gap-16 mb-8 md:mb-12 lg:mb-16 max-w-[1920px] mx-auto">
          <h1 className="text-5xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[8rem] 2xl:text-[10rem] leading-none font-semibold tracking-tight max-w-full xl:max-w-[55%]">
            {data.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-neutral-700 max-w-full sm:max-w-2xl xl:max-w-xl">
            {data.description}
          </p>
        </div>

        <DynamicParallaxImage
          src={data.image}
          alt={data.title}
          containerClassName="w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-[750px] xl:h-[calc(100vh-100px)]"
          contentClassName="relative w-full h-full"
          imageClassName="object-cover"
          range={[-240, 150]}
        />
      </section>

      <FAQ />
      <LetsCreate />
    </main>
  );
}
