export type CloudServicesWorkflowStep = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  deliverables: string[];
};

export type CloudServicesTechItem = {
  id: number;
  name: string;
  description: string;
};

export type CloudServicesServiceData = {
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  processTitle: string;
  processDescription: string;
  workflowIntro: string;
  steps: CloudServicesWorkflowStep[];
  techTitle: string;
  techDescription: string;
  techItems: CloudServicesTechItem[];
};
