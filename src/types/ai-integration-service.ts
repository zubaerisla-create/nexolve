export type AiIntegrationWorkflowStep = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  deliverables: string[];
};

export type AiIntegrationTechItem = {
  id: number;
  name: string;
  description: string;
};

export type AiIntegrationServiceData = {
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  processTitle: string;
  processDescription: string;
  workflowIntro: string;
  steps: AiIntegrationWorkflowStep[];
  techTitle: string;
  techDescription: string;
  techItems: AiIntegrationTechItem[];
};
