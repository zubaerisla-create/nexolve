import { CloudServicesServiceData } from "@/types/cloud-services-service";

export const cloudServicesServiceData: CloudServicesServiceData = {
  heroTitle: "Cloud Services",
  heroDescription:
    "We design, migrate, and optimize secure, high-performance cloud environments that scale with your business. From multi-cloud architectures and serverless hosting to continuous deployment pipelines and real-time monitoring, we build stable foundations for modern applications.",
  heroImage:
    "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  processTitle: "How we build stable and scalable cloud platforms",
  processDescription:
    "Our cloud engineering process focuses on resilience, security-first policies, and resource efficiency, giving your product the infrastructure it needs to support millions of users.",
  workflowIntro:
    "We design cloud environments that reduce operational complexity, automate repetitive tasks, and keep your applications fast and secure.",
  steps: [
    {
      id: 1,
      eyebrow: "Discovery",
      title: "We audit existing infrastructure and assess security needs",
      description:
        "We evaluate your current deployment architecture, analyze performance bottlenecks, check compliance requirements, and map out a risk-free migration or optimization path.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
      alt: "Team auditing cloud architecture and compliance",
      deliverables: [
        "Infrastructure audit",
        "Security threat assessment",
        "Migration roadmap",
        "Cost estimation model",
      ],
    },
    {
      id: 2,
      eyebrow: "Architecture",
      title: "We design resilient, secure, and cost-efficient network bounds",
      description:
        "We model multi-region setups, define access boundaries, design database failover strategies, and structure cost-management plans suited for your product load.",
      image:
        "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Architect drawing cloud infrastructure layout diagrams",
      deliverables: [
        "Network topology design",
        "IAM permission matrix",
        "Failover disaster plan",
        "Resource grouping schemas",
      ],
    },
    {
      id: 3,
      eyebrow: "Provisioning",
      title: "We build infrastructure-as-code and automate deployments",
      description:
        "We write clean Terraform or CloudFormation templates to spin up resources reproducibly, and build CI/CD pipelines that handle automated tests and zero-downtime releases.",
      image:
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600&auto=format&fit=crop",
      alt: "Developer writing Terraform configurations and CI/CD pipelines",
      deliverables: [
        "Terraform/IaC templates",
        "CI/CD release pipelines",
        "Docker container scripts",
        "Kubernetes orchestration",
      ],
    },
    {
      id: 4,
      eyebrow: "Migration & QA",
      title: "We migrate data safely and perform extensive load testing",
      description:
        "We execute zero-downtime database migrations, perform simulated load tests to ensure stability under heavy traffic, and verify failover behaviors.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      alt: "Database administrator monitoring database migration logs",
      deliverables: [
        "Data migration validation",
        "Simulated load test results",
        "Auto-scaling verification",
        "Failover trigger logs",
      ],
    },
    {
      id: 5,
      eyebrow: "Optimization",
      title: "We set up real-time alerting and monitor resource efficiency",
      description:
        "We hook up monitoring dashboards, configure performance alarms, and establish automated cleanups to ensure you only pay for the cloud resources you actually use.",
      image:
        "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?q=80&w=1693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Real-time infrastructure performance and cost dashboard",
      deliverables: [
        "Alerting & logging setup",
        "Real-time cost dashboard",
        "Resource tuning reports",
        "Ongoing support plan",
      ],
    },
  ],
  techTitle: "Designed for uptime, security, and efficiency",
  techDescription:
    "We build cloud foundations using modern automation and industry-standard security frameworks to keep operations smooth and costs optimized.",
  techItems: [
    {
      id: 1,
      name: "Infrastructure as Code",
      description:
        "Reproducible and trackable environment setups using Terraform, Helm, or CloudFormation for complete state parity.",
    },
    {
      id: 2,
      name: "CI/CD Automation",
      description:
        "Automated build, test, and release pipelines (GitHub Actions, GitLab CI) ensuring safe, zero-downtime production deployments.",
    },
    {
      id: 3,
      name: "Zero-Trust Security",
      description:
        "Strict Identity & Access Management (IAM), transport-layer encryption, VPC isolations, and automated security scans.",
    },
    {
      id: 4,
      name: "Smart Cost Optimization",
      description:
        "Granular resource scaling, spot instances utilization, and scheduled shutdowns of non-production workloads.",
    },
  ],
  faqs: [
    { id: 1, question: "Which cloud providers do you support?", answer: "AWS, Google Cloud, Azure, DigitalOcean, and other major platforms." },
    { id: 2, question: "Can you migrate existing applications to the cloud?", answer: "Yes. We handle migration planning, execution, and optimization." },
    { id: 3, question: "How do you ensure security?", answer: "We implement best practices for access control, encryption, monitoring, and backups." },
    { id: 4, question: "Do you provide cost optimization?", answer: "Yes. We continuously review infrastructure to reduce unnecessary expenses." },
    { id: 5, question: "Can infrastructure scale automatically?", answer: "Yes. Auto-scaling and load balancing are part of our cloud solutions." },
  ],
};
