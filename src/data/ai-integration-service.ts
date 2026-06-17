import { AiIntegrationServiceData } from "@/types/ai-integration-service";

export const aiIntegrationServiceData: AiIntegrationServiceData = {
  heroTitle: "AI Integration",
  heroDescription:
    "We integrate advanced machine learning and artificial intelligence capabilities into your business systems. From LLM customization and prompt engineering to cognitive automation and predictive analysis, we build solutions that make your platforms smarter and more efficient.",
  heroImage:
    "https://images.unsplash.com/photo-1770233621425-5d9ee7a0a700?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  processTitle: "How we implement intelligence into products",
  processDescription:
    "Our AI integration process aligns deep technical capability with clear business goals, ensuring every model or automation we deploy creates measurable, secure, and user-aligned value.",
  workflowIntro:
    "We bridge the gap between complex AI research and production-grade applications, ensuring models are fast, secure, and deeply integrated into your workflows.",
  steps: [
    {
      id: 1,
      eyebrow: "Discovery",
      title: "We define the AI strategy and evaluate technical feasibility",
      description:
        "We identify critical bottlenecks, audit your data sources, select suitable AI capabilities, and establish performance metrics before writing any code.",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop",
      alt: "Team workshop defining AI integration objectives",
      deliverables: [
        "AI feasibility report",
        "Data maturity audit",
        "API & model selection",
        "Success metrics",
      ],
    },
    {
      id: 2,
      eyebrow: "Design & Modeling",
      title: "We construct robust prompt systems and plan model architectures",
      description:
        "We build structured prompts, select model versions, design vector database schemas, and map out cognitive pipelines that guarantee repeatable outputs.",
      image:
        "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1600&auto=format&fit=crop",
      alt: "Engineer planning model pipelines and data flows",
      deliverables: [
        "Prompt engineering rules",
        "Vector database schema",
        "Pipeline architecture",
        "Context window planning",
      ],
    },
    {
      id: 3,
      eyebrow: "Integration",
      title: "We connect intelligent agents with your existing core state",
      description:
        "We implement API endpoints, orchestrate agent tools, and wire model outputs directly into your UI and databases using secure, real-time protocols.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
      alt: "Developer coding AI API integrations into backend services",
      deliverables: [
        "Model API integrations",
        "Agent tool configurations",
        "Database connections",
        "UI state synchronization",
      ],
    },
    {
      id: 4,
      eyebrow: "Safety & Tuning",
      title: "We enforce input guardrails and optimize token consumption",
      description:
        "We test edge cases, mask PII, monitor token usage, set up safety filters, and fine-tune prompt templates to ensure secure and cost-efficient execution.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
      alt: "Developer validating AI security filters and response accuracy",
      deliverables: [
        "PII masking rules",
        "Safety guardrail filters",
        "Cost-efficiency reports",
        "Response reliability tests",
      ],
    },
    {
      id: 5,
      eyebrow: "Production & Scaling",
      title: "We establish performance monitors and enable semantic caching",
      description:
        "We set up analytics for response times and costs, implement semantic response caching to minimize latency, and support model updates and scaling.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
      alt: "Monitoring dashboard showing AI model performance metrics",
      deliverables: [
        "Semantic caching setup",
        "Usage dashboard analytics",
        "Response monitoring",
        "Deployment support",
      ],
    },
  ],
  techTitle: "Built for intelligence, safety, and performance",
  techDescription:
    "We select models, guardrails, and hosting strategies that keep responses accurate, costs predictable, and user data secure.",
  techItems: [
    {
      id: 1,
      name: "Foundational Models",
      description:
        "Deep integration with state-of-the-art models like GPT-4, Claude 3.5, Gemini, and custom open-source architectures.",
    },
    {
      id: 2,
      name: "Robust Prompt Architecture",
      description:
        "Structured, version-controlled engineering to ensure stable, predictable model behaviors across all user inputs.",
    },
    {
      id: 3,
      name: "Safety Guardrails",
      description:
        "Real-time moderation, automated PII masking, and output verification systems to prevent inappropriate behavior.",
    },
    {
      id: 4,
      name: "Latency Optimization",
      description:
        "Fast streaming responses, semantic query caching, and hardware-optimized hosting to ensure instant responsiveness.",
    },
  ],
};
