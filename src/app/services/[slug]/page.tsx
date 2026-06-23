import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FAQ from "@/components/sections/landing/FAQ";
import LetsCreate from "@/components/sections/landing/LetsCreate";
import React from "react";
import { dynamicServicesData } from "@/data/dynamic-services-data";
import {
  GenericServiceIntroSection,
  GenericServiceProcessTimeline,
  GenericServiceFlowStack,
  GenericServiceTechHighlights,
} from "@/components/sections/services/GenericServiceComponents";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = dynamicServicesData[slug];
  
  if (!data) {
    return { title: "Service Not Found" };
  }
  
  return {
    title: `${data.heroTitle} | Nexolve Services`,
    description: data.heroDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const data = dynamicServicesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="mt-16 sm:mt-24">
        <GenericServiceIntroSection data={data} />
      </section>

      <GenericServiceProcessTimeline data={data} />
      
      <GenericServiceFlowStack data={data} />

      <GenericServiceTechHighlights data={data} />

      <FAQ />
      <LetsCreate />
    </main>
  );
}
