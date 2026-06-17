import FAQ from "@/components/sections/landing/FAQ";
import CloudServicesFlowStack from "@/components/sections/services/cloud-services/CloudServicesFlowStack";
import CloudServicesIntroSection from "@/components/sections/services/cloud-services/CloudServicesIntroSection";
import CloudServicesProcessTimeline from "@/components/sections/services/cloud-services/CloudServicesProcessTimeline";
import CloudServicesTechHighlights from "@/components/sections/services/cloud-services/CloudServicesTechHighlights";

export const metadata = {
  title: "Cloud Services",
  description:
    "Enterprise cloud architecture, migration, and optimization services — CI/CD automation, infrastructure as code, zero-trust security, and real-time monitoring.",
};

export default function Page() {
  return (
    <section>
      <CloudServicesIntroSection />

      <div>
        <CloudServicesProcessTimeline />
        <CloudServicesFlowStack />
        <CloudServicesTechHighlights />
        <FAQ />
      </div>
    </section>
  );
}
