import FAQ from "@/components/sections/landing/FAQ";
import AiIntegrationFlowStack from "@/components/sections/services/ai-integration/AiIntegrationFlowStack";
import AiIntegrationIntroSection from "@/components/sections/services/ai-integration/AiIntegrationIntroSection";
import AiIntegrationProcessTimeline from "@/components/sections/services/ai-integration/AiIntegrationProcessTimeline";
import AiIntegrationTechHighlights from "@/components/sections/services/ai-integration/AiIntegrationTechHighlights";

export const metadata = {
  title: "AI Integration Service",
  description:
    "Enterprise AI integration services — from LLM customization and prompt engineering to cognitive automation and intelligent agent deployment.",
};

export default function Page() {
  return (
    <section>
      <AiIntegrationIntroSection />

      <div>
        <AiIntegrationProcessTimeline />
        <AiIntegrationFlowStack />
        <AiIntegrationTechHighlights />
        <FAQ />
      </div>
    </section>
  );
}
