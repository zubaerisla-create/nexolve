import FAQ from "@/components/sections/landing/FAQ";
import WebDevFlowStack from "@/components/sections/services/web-development/WebDevFlowStack";
import WebDevIntroSection from "@/components/sections/services/web-development/WebDevIntroSection";
import WebDevProcessTimeline from "@/components/sections/services/web-development/WebDevProcessTimeline";
import WebDevTechHighlights from "@/components/sections/services/web-development/WebDevTechHighlights";
import { webDevelopmentServiceData } from "@/data/web-development-service";

export const metadata = {
  title: "Web Development Service",
  description:
    "High-performing web development services focused on scalable architecture, responsive UX, SEO, and conversion-driven digital products.",
};

function page() {
  return (
    <section>
      <WebDevIntroSection />

      <div>
        <WebDevProcessTimeline />
        <WebDevFlowStack />
        <WebDevTechHighlights />
        <FAQ faqs={webDevelopmentServiceData.faqs} />
      </div>
    </section>
  );
}

export default page;
