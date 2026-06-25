export type WorkflowStep = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  deliverables: string[];
};

export type TechItem = {
  id: number;
  name: string;
  description: string;
};

export type ServiceDetailData = {
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  processTitle: string;
  processDescription: string;
  workflowIntro: string;
  steps: WorkflowStep[];
  techTitle: string;
  techDescription: string;
  techItems: TechItem[];
  faqs?: {
    id: number;
    question: string;
    answer: string;
  }[];
};

export const dynamicServicesData: Record<string, ServiceDetailData> = {
  "ai-agents": {
    heroTitle: "AI Agents",
    heroDescription:
      "We design and deploy autonomous AI agents capable of reasoning, planning, and executing complex workflows to automate your operations.",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    processTitle: "How we design and deploy autonomous AI agents",
    processDescription:
      "Our process ensures AI agents are safe, context-aware, and aligned with your operational guardrails.",
    workflowIntro:
      "We bridge the gap between AI reasoning and action, ensuring agents are fast, secure, and deeply integrated into your workflows.",
    steps: [
      {
        id: 1,
        eyebrow: "Discovery",
        title: "Audit business logic & map agent capabilities",
        description:
          "We analyze your operations to find tasks suitable for agentic automation, defining the limits and rules the agent must follow.",
        image:
          "https://res.cloudinary.com/drjnf5j1k/image/upload/v1782411109/ai-agent_vb4uvs.webp",
        alt: "Discovery workshop",
        deliverables: [
          "Logic auditing",
          "Tool selection",
          "Success benchmarks",
          "Security rules",
        ],
      },
      {
        id: 2,
        eyebrow: "Architecture",
        title: "Design cognitive pipelines, memory, & tool access",
        description:
          "We define how the agent reasons (ReAct, Plan-and-Solve) and structure vector databases for long-term memory.",
        image:
          "https://i.ibb.co.com/jv8rmygB/ai-agent-2.png",
        alt: "Agent architecture layout",
        deliverables: [
          "Memory strategy",
          "Reasoning model",
          "API schema",
          "Database connection",
        ],
      },
      {
        id: 3,
        eyebrow: "Integration",
        title: "Implement LLM reasoning and system API connections",
        description:
          "We code tools and integrations, letting the agent query databases, fetch web pages, or generate files securely.",
        image:
          "https://thumbs.dreamstime.com/b/ai-agents-assistants-human-uses-laptop-tablet-to-manage-important-things-life-introduction-artificial-intelligence-375633193.jpg?w=992",
        alt: "Developer writing integration code",
        deliverables: [
          "API orchestration",
          "Sandbox setups",
          "Vector indexes",
          "LLM routing",
        ],
      },
      {
        id: 4,
        eyebrow: "Alignment",
        title: "Establish safety guardrails, evaluations, & prompt limits",
        description:
          "We set up strict moderations, check cost limits, and mask sensitive user data to prevent prompt injection or infinite loops.",
        image:
          "https://i.ibb.co.com/Kz8CHMTV/ai-agent-4.png",
        alt: "Agent safety review",
        deliverables: [
          "Loop prevention",
          "PII protection",
          "Cost bounds",
          "Response testing",
        ],
      },
      {
        id: 5,
        eyebrow: "Optimization",
        title: "Analyze agent telemetry, cost optimization, & caching",
        description:
          "We setup agent tracing and implement prompt caching to increase speed and decrease API token usage.",
        image:
          "https://i.ibb.co.com/ynnMskyR/ai-agent5.png",
        alt: "Agent telemetry screen",
        deliverables: [
          "Trace dashboard",
          "Semantic caching",
          "Quantization check",
          "Scaling strategy",
        ],
      },
    ],
    techTitle: "Built for reasoning, action, and reliability",
    techDescription:
      "We use state-of-the-art orchestration libraries and safety guardrails to ensure agents execute tasks predictably.",
    techItems: [
      {
        id: 1,
        name: "Orchestration Stacks",
        description:
          "Deep integration with LangChain, LlamaIndex, and AutoGen for building complex, multi-agent reasoning paths.",
      },
      {
        id: 2,
        name: "Semantic Memory",
        description:
          "Vector databases like Pinecone, pgvector, or Milvus to store long-term user memory and context files.",
      },
      {
        id: 3,
        name: "Secure Sandboxes",
        description:
          "Docker containers and sandboxed runtimes to execute agent-generated code safely without security risks.",
      },
      {
        id: 4,
        name: "Telemetry Tracing",
        description:
          "LangSmith and Phoenix integration to visualize prompt traces, tool latency, and agent decision nodes.",
      },
    ],
    faqs: [
      { id: 1, question: "How long does it take to build an AI agent?", answer: "Most AI agent projects take 4–10 weeks depending on complexity, integrations, and business requirements." },
      { id: 2, question: "Can AI agents integrate with our existing systems?", answer: "Yes. We can connect AI agents with CRMs, ERPs, databases, APIs, and internal business tools." },
      { id: 3, question: "How secure are AI agents?", answer: "We implement access controls, monitoring, guardrails, and testing to ensure secure operation." },
      { id: 4, question: "Do you provide post-launch support?", answer: "Yes. Every project includes ongoing support, optimization, and maintenance." },
      { id: 5, question: "What tasks can AI agents automate?", answer: "Customer support, internal operations, document processing, lead qualification, reporting, and workflow automation." },
    ],
  },
  "rag-systems": {
    heroTitle: "RAG Systems",
    heroDescription:
      "Unlock the power of your proprietary data with Retrieval-Augmented Generation. We build secure, hallucination-free search and chat systems.",
    heroImage:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
    processTitle: "How we build secure and high-precision RAG systems",
    processDescription:
      "From data ingestion to hybrid retrieval, we optimize every step to guarantee maximum search relevance.",
    workflowIntro:
      "We design custom RAG systems that pull relevant contexts with millisecond latency, serving grounded answers with zero halluncinations.",
    steps: [
      {
        id: 1,
        eyebrow: "Discovery",
        title: "Audit data sources, formats, and compliance requirements",
        description:
          "We analyze your target data (PDFs, docs, databases) and ensure compliance with GDPR, HIPAA, or inner security clearances.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        alt: "Data auditing team",
        deliverables: [
          "Format assessment",
          "Compliance matrix",
          "Volume analysis",
          "Access rules",
        ],
      },
      {
        id: 2,
        eyebrow: "Chunking",
        title: "Optimize text splitting, embedding models, and metadata",
        description:
          "We design chunking strategies (semantic, parent-child) and choose high-performance embedding models suitable for your domain.",
        image:
          "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?q=80&w=1632&auto=format&fit=crop",
        alt: "Chunking architecture planning",
        deliverables: [
          "Chunk strategies",
          "Embedding benchmark",
          "Metadata fields",
          "Parsing pipelines",
        ],
      },
      {
        id: 3,
        eyebrow: "Indexing",
        title: "Setup vector databases like Pinecone or Qdrant for indexing",
        description:
          "We setup vector collections with proper index partitions (HNSW) to allow sub-second, multi-dimensional search lookup.",
        image:
          "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600&auto=format&fit=crop",
        alt: "Database indexing setups",
        deliverables: [
          "Vector DB setup",
          "Index configuration",
          "Scale partitioning",
          "Update protocols",
        ],
      },
      {
        id: 4,
        eyebrow: "Retrieval",
        title: "Combine semantic search with keyword BM25 and reranking",
        description:
          "We configure hybrid query parsers and apply cross-encoder re-ranking to deliver the absolute best context to the LLM.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        alt: "Retrieval performance check",
        deliverables: [
          "Hybrid query setup",
          "Re-ranking model",
          "Retrieval QA tests",
          "Latency optimization",
        ],
      },
      {
        id: 5,
        eyebrow: "Evaluation",
        title: "Verify response accuracy using Ragas or custom test sets",
        description:
          "We benchmark the final answers against ground truths, evaluating faithfulness, answer relevance, and context recall.",
        image:
          "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?q=80&w=1693&auto=format&fit=crop",
        alt: "Evaluation trace panel",
        deliverables: [
          "Evaluation dataset",
          "Accuracy metrics",
          "Drift monitoring",
          "Pipeline adjustment",
        ],
      },
    ],
    techTitle: "Architected for accuracy, speed, and privacy",
    techDescription:
      "We leverage advanced indexing strategies and LLM guardrails to keep responses grounded in your data.",
    techItems: [
      {
        id: 1,
        name: "Hybrid Retrieval",
        description:
          "Integrating dense vectors and sparse keywords (BM25) to find exact terms alongside conceptual meaning.",
      },
      {
        id: 2,
        name: "Cross-Encoder Re-ranking",
        description:
          "Applying models like Cohere or BGE-Reranker to re-order the top search results for maximum precision.",
      },
      {
        id: 3,
        name: "Enterprise Vector Stores",
        description:
          "Provisioning enterprise-grade engines like Qdrant, Pinecone, and pgvector for lightning-fast indexing.",
      },
      {
        id: 4,
        name: "Document-Level Security",
        description:
          "Row-level security and ACL filters embedded into vector schemas to prevent unauthorized document access.",
      },
    ],
    faqs: [
      { id: 1, question: "What types of documents can a RAG system process?", answer: "PDFs, Word documents, spreadsheets, databases, websites, knowledge bases, and internal documentation." },
      { id: 2, question: "Can RAG systems work with private company data?", answer: "Yes. We build secure systems that operate on your proprietary data while maintaining strict access controls." },
      { id: 3, question: "How accurate are RAG-based answers?", answer: "Accuracy depends on data quality and implementation. We use evaluation frameworks and retrieval optimization to maximize reliability." },
      { id: 4, question: "Which vector databases do you support?", answer: "Pinecone, Weaviate, Qdrant, ChromaDB, Milvus, and other enterprise vector databases." },
      { id: 5, question: "Do you provide maintenance and updates?", answer: "Yes. We continuously monitor and improve retrieval quality and system performance." },
    ],
  },
  "ai-automation": {
    heroTitle: "AI Automation",
    heroDescription:
      "Automate high-volume cognitive tasks, data entry, and business logic with intelligent pipelines.",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    processTitle: "How we implement intelligent workflow automation",
    processDescription:
      "We replace manual, error-prone tasks with resilient, cost-effective automated pipelines.",
    workflowIntro:
      "We design serverless automation pipelines that handle variable loads, integrate seamlessly, and speed up business processes.",
    steps: [
      {
        id: 1,
        eyebrow: "Discovery",
        title: "Audit workflows to identify automation targets and ROI",
        description:
          "We analyze your operations to find tasks suitable for automation, calculating time saved and model running costs.",
        image:
          "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop",
        alt: "Discovery session",
        deliverables: [
          "Workflow audit",
          "Cost analysis",
          "ROI estimation",
          "Security checks",
        ],
      },
      {
        id: 2,
        eyebrow: "Design",
        title: "Map inputs, outputs, classification nodes, and logic branches",
        description:
          "We design how structured data is extracted and mapped, drawing logic flows and fallback routes.",
        image:
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1600&auto=format&fit=crop",
        alt: "Pipeline design diagram",
        deliverables: [
          "Data structures",
          "Logic branching",
          "Fallback strategies",
          "Interface mapping",
        ],
      },
      {
        id: 3,
        eyebrow: "Integration",
        title: "Connect to databases, SaaS APIs, and legacy applications",
        description:
          "We integrate pipeline APIs into your CRMs, ERPs, or internal tools using webhooks and database connections.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
        alt: "API coding integration",
        deliverables: [
          "API endpoints",
          "Database connection",
          "Webhook listeners",
          "SaaS plugins",
        ],
      },
      {
        id: 4,
        eyebrow: "Fallback Setup",
        title: "Implement fallback models and human-in-the-loop triggers",
        description:
          "We configure automated fallback triggers if confidence scores fall below thresholds, routing tasks to human approval.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
        alt: "Fallback and validation testing",
        deliverables: [
          "Confidence scoring",
          "Review dashboards",
          "Slack alert setups",
          "Failover procedures",
        ],
      },
      {
        id: 5,
        eyebrow: "Optimization",
        title: "Optimize token limits, batch processing, and caching",
        description:
          "We aggregate calls to reduce token overhead, batch process documents, and cache identical outputs.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
        alt: "Throughput evaluation screen",
        deliverables: [
          "Batch protocols",
          "Token audits",
          "Latency optimization",
          "Scaling metrics",
        ],
      },
    ],
    techTitle: "Built for throughput, resilience, and efficiency",
    techDescription:
      "We deploy serverless automation pipelines that handle variable loads without system latency.",
    techItems: [
      {
        id: 1,
        name: "Workflow Engines",
        description:
          "Deploying resilient workflows using temporal, n8n, or AWS Step Functions for robust process execution.",
      },
      {
        id: 2,
        name: "Structured Parsing",
        description:
          "Leveraging tools like Instructor, Pydantic, or GPT-4o structured outputs to parse raw data to JSON.",
      },
      {
        id: 3,
        name: "Human-in-the-Loop",
        description:
          "Custom dashboard tools and webhook integrations to prompt manual review when confidence drops.",
      },
      {
        id: 4,
        name: "Serverless Runners",
        description:
          "AWS Lambda and Google Cloud Run configurations to execute pipelines on-demand, reducing idle costs.",
      },
    ],
    faqs: [
      { id: 1, question: "What business processes can be automated?", answer: "Data entry, reporting, email handling, lead management, document workflows, and internal operations." },
      { id: 2, question: "Will automation replace human employees?", answer: "Automation is designed to eliminate repetitive tasks and improve efficiency, allowing teams to focus on higher-value work." },
      { id: 3, question: "Can automation integrate with existing tools?", answer: "Yes. We support integrations with CRM, ERP, email, databases, and third-party platforms." },
      { id: 4, question: "How quickly can automation deliver ROI?", answer: "Many businesses see measurable efficiency gains within weeks of deployment." },
      { id: 5, question: "Can workflows be modified later?", answer: "Absolutely. Automation systems are designed to evolve with your business needs." },
    ],
  },
  "custom-ai": {
    heroTitle: "Custom AI Solutions",
    heroDescription:
      "Bespoke AI model development, fine-tuning, and domain-specific integrations built for your product.",
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    processTitle: "How we train and deploy custom AI solutions",
    processDescription:
      "From curating dataset pipelines to model quantization, we build solutions tailored to your infrastructure.",
    workflowIntro:
      "We manage the entire lifecycle of custom machine learning models, ensuring high accuracy, low latency, and private deployments.",
    steps: [
      {
        id: 1,
        eyebrow: "Discovery",
        title: "Define goals, evaluate datasets, and plan compute budgets",
        description:
          "We assess your data maturity, select base models (e.g. Llama-3, Qwen-2), and set budget benchmarks.",
        image:
          "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop",
        alt: "Architecture planning",
        deliverables: [
          "Compute budget",
          "Dataset assessment",
          "Base model plan",
          "Metrics matrix",
        ],
      },
      {
        id: 2,
        eyebrow: "Dataset Prep",
        title: "Clean, label, and partition training datasets",
        description:
          "We construct automated pipelines to filter noise, format input-output tokens, and split train-test benchmarks.",
        image:
          "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1600&auto=format&fit=crop",
        alt: "Dataset labeling",
        deliverables: [
          "Labeling pipelines",
          "Token configurations",
          "Split sets",
          "Vulnerability audits",
        ],
      },
      {
        id: 3,
        eyebrow: "Fine-tuning",
        title: "Fine-tune open-source models using LoRA/QLoRA or train from scratch",
        description:
          "We run parameter-efficient fine-tuning (LoRA, QLoRA) on high-end GPUs, keeping weights focused on domain tasks.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
        alt: "Model training progress",
        deliverables: [
          "LoRA adapters",
          "Loss curve reports",
          "Hyperparameter tuning",
          "Validation outputs",
        ],
      },
      {
        id: 4,
        eyebrow: "Quantization",
        title: "Optimize models (FP16 to INT8/INT4) for fast local deployment",
        description:
          "We apply quantization techniques to reduce model file size and memory footprint, speeding up inference times.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
        alt: "Model quantization",
        deliverables: [
          "Quantized model formats",
          "VRAM requirements",
          "Latency test runs",
          "Compatibility metrics",
        ],
      },
      {
        id: 5,
        eyebrow: "Serving",
        title: "Serve models via vLLM, Ollama, or Triton inference servers",
        description:
          "We deploy models on scalable inference servers with continuous batching and secure private API protection.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
        alt: "Serving server status",
        deliverables: [
          "vLLM/Triton deploy",
          "API credentials",
          "Scaling policies",
          "Monitoring hooks",
        ],
      },
    ],
    techTitle: "Engineered for high performance and low compute costs",
    techDescription:
      "We select open-source models and optimization tools that cut infrastructure costs by up to 80%.",
    techItems: [
      {
        id: 1,
        name: "High-Throughput Engines",
        description:
          "vLLM and Triton Inference Server deployments for continuous request batching and low P99 latencies.",
      },
      {
        id: 2,
        name: "Fine-tuning Toolkits",
        description:
          "Axolotl, Unsloth, and PyTorch configurations to run super-fast model updates on H100 or A10G GPUs.",
      },
      {
        id: 3,
        name: "Open-Source Models",
        description:
          "Llama 3, Mistral, and Qwen integration to maintain complete data ownership and host models locally.",
      },
      {
        id: 4,
        name: "Model Compression",
        description:
          "GPTQ, AWQ, and GGUF quantization formats to fit high-capability models into lower-cost cloud GPUs.",
      },
    ],
    faqs: [
      { id: 1, question: "How do you determine the right AI solution?", answer: "We start with a discovery phase to understand your goals, data, workflows, and business challenges." },
      { id: 2, question: "Can you build industry-specific AI systems?", answer: "Yes. Every solution is tailored to your industry, requirements, and operational processes." },
      { id: 3, question: "Which AI models do you support?", answer: "OpenAI, Gemini, Claude, open-source models, and hybrid deployments." },
      { id: 4, question: "Do you provide on-premise deployments?", answer: "Yes. Depending on security and compliance requirements." },
      { id: 5, question: "Can AI solutions scale as our business grows?", answer: "Yes. Scalability is considered during architecture and infrastructure planning." },
    ],
  },
  "saas": {
    heroTitle: "SaaS Platforms",
    heroDescription:
      "End-to-end architecture, development, and scaling of multi-tenant Software-as-a-Service applications.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    processTitle: "How we build secure and scalable SaaS platforms",
    processDescription:
      "We plan for tenant isolation, subscription billing, and modular expansion from day one.",
    workflowIntro:
      "We engineer SaaS platforms with clean separation of tenant environments, high throughput, and seamless billing layers.",
    steps: [
      {
        id: 1,
        eyebrow: "Discovery",
        title: "Audit tenant models, database requirements, and compliance",
        description:
          "We design SaaS tenancy strategies (multi-db vs single-db logical separation) and plan sub-account models.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
        alt: "Tenancy roadmap design",
        deliverables: [
          "Tenancy selection",
          "Compliance matrix",
          "Data lifecycle policy",
          "Tenant capacity models",
        ],
      },
      {
        id: 2,
        eyebrow: "Architecture",
        title: "Design multi-tenant database isolation and IAM policies",
        description:
          "We isolate tenant data schemas to prevent leakages and setup RBAC roles for organization users.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop",
        alt: "Database schematic drawing",
        deliverables: [
          "RBAC schema",
          "Database boundaries",
          "Multi-tenant IAM",
          "API routing design",
        ],
      },
      {
        id: 3,
        eyebrow: "Core Dev",
        title: "Implement authentication, subscription billing, and main dashboard",
        description:
          "We build secure authentication loops, onboarding screens, tenant billing portals, and standard dashboards.",
        image:
          "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop",
        alt: "Dashboard development screen",
        deliverables: [
          "Authentication flows",
          "Tenant workspace",
          "Billing webhooks",
          "Feature gates",
        ],
      },
      {
        id: 4,
        eyebrow: "Integrations",
        title: "Hook up Stripe, analytics tools, and transactional emails",
        description:
          "We bind SaaS core to Stripe billing, Loops/Resend email dispatchers, and usage analytic counters.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
        alt: "Integration setups",
        deliverables: [
          "Stripe subscriptions",
          "Analytics hooks",
          "Resend email dispatch",
          "Webhooks manager",
        ],
      },
      {
        id: 5,
        eyebrow: "Scaling",
        title: "Monitor tenant usage, load testing, and database indexing",
        description:
          "We configure horizontal server scalers, optimize heavy search indexes, and conduct stress tests.",
        image:
          "https://plus.unsplash.com/premium_photo-1683134153517-32015af21911?q=80&w=1470&auto=format&fit=crop",
        alt: "SaaS scaling monitor dashboard",
        deliverables: [
          "Auto-scaling configuration",
          "DB query optimization",
          "Load test reports",
          "24/7 logging profiles",
        ],
      },
    ],
    techTitle: "Built for scalability, speed, and clean code",
    techDescription:
      "We use modern, component-driven stacks that allow rapid feature iteration while maintaining reliability.",
    techItems: [
      {
        id: 1,
        name: "Secure Multi-Tenancy",
        description:
          "Clean separation of user and tenant resources utilizing row-level security or custom schema routers.",
      },
      {
        id: 2,
        name: "Stripe Billing Engine",
        description:
          "Complex billing support including usage-based pricing, seats, metered metrics, and coupons.",
      },
      {
        id: 3,
        name: "Modern Auth & IAM",
        description:
          "Enterprise auth flows with MFA, SSO, social logins, and token managers using Clerk or NextAuth.",
      },
      {
        id: 4,
        name: "Performant Backend APIs",
        description:
          "Fast API endpoints leveraging Next.js Route Handlers, tRPC, or GraphQL for efficient client data sync.",
      },
    ],
    faqs: [
      { id: 1, question: "Can you build a SaaS product from scratch?", answer: "Yes. We handle architecture, design, development, deployment, and scaling." },
      { id: 2, question: "Do you support subscription billing?", answer: "Yes. We integrate Stripe, Paddle, and other billing platforms." },
      { id: 3, question: "Can SaaS platforms support multiple tenants?", answer: "Yes. We design scalable multi-tenant architectures." },
      { id: 4, question: "How do you ensure scalability?", answer: "Through cloud-native infrastructure, optimized databases, and performance-focused architecture." },
      { id: 5, question: "Do you provide ongoing support?", answer: "Yes. Long-term maintenance and platform improvements are available." },
    ],
  },
  "devops": {
    heroTitle: "DevOps & CI/CD",
    heroDescription:
      "Accelerate your development lifecycle with robust DevOps practices. We implement automated testing, continuous integration, and seamless deployment pipelines.",
    heroImage:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1600&auto=format&fit=crop",
    processTitle: "How we automate your delivery pipelines",
    processDescription:
      "We build fast, secure, and reliable deployment workflows that reduce delivery cycle times.",
    workflowIntro:
      "We provision modern DevOps setups that reduce release errors, speed up test pipelines, and automate infrastructure scaling.",
    steps: [
      {
        id: 1,
        eyebrow: "Discovery",
        title: "Audit current deployment cycle, manual gates, and bottlenecks",
        description:
          "We analyze developer environments, test run times, cloud environments, and configuration secrets.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        alt: "DevOps auditing team",
        deliverables: [
          "Pipeline assessment",
          "Secret audits",
          "Bottlenecks map",
          "Access policy review",
        ],
      },
      {
        id: 2,
        eyebrow: "Setup CI",
        title: "Configure automated linting, unit tests, and security scans on push",
        description:
          "We design automated quality checks that execute on pull requests, ensuring broken code never hits target branches.",
        image:
          "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?q=80&w=1632&auto=format&fit=crop",
        alt: "CI script configurations",
        deliverables: [
          "Automated linting config",
          "Test runner pipelines",
          "Vulnerability scan",
          "Branch policies",
        ],
      },
      {
        id: 3,
        eyebrow: "Containerize",
        title: "Dockerize services to achieve identical dev-prod environments",
        description:
          "We author lightweight multi-stage Dockerfiles and docker-compose templates to align environment states.",
        image:
          "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600&auto=format&fit=crop",
        alt: "Docker image building",
        deliverables: [
          "Dockerfile authoring",
          "Compose configs",
          "Container registry setup",
          "Image size reduction",
        ],
      },
      {
        id: 4,
        eyebrow: "Setup CD",
        title: "Configure deployment scripts using Kubernetes or serverless bounds",
        description:
          "We build release scripts utilizing rolling updates or blue-green strategies to enable zero-downtime deployments.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        alt: "CD pipeline active deploy",
        deliverables: [
          "Zero-downtime deploys",
          "Secrets management",
          "Rollback automation",
          "Release notifications",
        ],
      },
      {
        id: 5,
        eyebrow: "Monitoring",
        title: "Implement Datadog, Prometheus, or Grafana dashboards for metrics",
        description:
          "We provision alert monitors, error trace trackers, and logging aggregators for full infrastructure visibility.",
        image:
          "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?q=80&w=1693&auto=format&fit=crop",
        alt: "DevOps metrics screens dashboard",
        deliverables: [
          "Metric collections",
          "Alert parameters",
          "Uptime reports",
          "Log aggregations",
        ],
      },
    ],
    techTitle: "Engineered for speed, security, and zero downtime",
    techDescription:
      "We use industry-standard automation tools to keep deployments safe and predictable.",
    techItems: [
      {
        id: 1,
        name: "GitOps Automation",
        description:
          "GitHub Actions, GitLab CI, and ArgoCD configurations for code-driven release management.",
      },
      {
        id: 2,
        name: "Kubernetes & Containers",
        description:
          "Highly resilient container architectures using Docker, Kubernetes, and Helm templates.",
      },
      {
        id: 3,
        name: "Infrastructure as Code",
        description:
          "Terraform and CloudFormation setups for version-controlled, predictable cloud assets.",
      },
      {
        id: 4,
        name: "Observability Stacks",
        description:
          "Prometheus, Grafana, and Sentry implementation to trace runtime logs and infrastructure health.",
      },
    ],
    faqs: [
      { id: 1, question: "What is DevOps and why is it important?", answer: "DevOps improves deployment speed, reliability, collaboration, and operational efficiency." },
      { id: 2, question: "Do you set up CI/CD pipelines?", answer: "Yes. We automate testing, deployment, and release workflows." },
      { id: 3, question: "Which tools do you use?", answer: "GitHub Actions, GitLab CI/CD, Jenkins, Docker, Kubernetes, and cloud-native services." },
      { id: 4, question: "Can you improve an existing DevOps setup?", answer: "Absolutely. We audit, optimize, and modernize existing workflows." },
      { id: 5, question: "Do you provide monitoring solutions?", answer: "Yes. We implement logging, alerting, and observability systems." },
    ],
  },
  "maintenance": {
    heroTitle: "Maintenance & Support",
    heroDescription:
      "Keep your digital products running flawlessly. We provide continuous monitoring, performance tuning, security patching, and dedicated technical support.",
    heroImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    processTitle: "How we ensure stability and zero system failures",
    processDescription:
      "We proactively patch security risks, optimize database queries, and monitor uptime.",
    workflowIntro:
      "We support your application round-the-clock, resolving server errors, applying package updates, and safeguarding user data.",
    steps: [
      {
        id: 1,
        eyebrow: "Onboarding",
        title: "Audit application health, system dependencies, and logs",
        description:
          "We analyze your active codebase, evaluate third-party packages, check server logs, and map all dependencies.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        alt: "System audit",
        deliverables: [
          "Package health review",
          "Logging audit",
          "Credential evaluation",
          "Server configuration map",
        ],
      },
      {
        id: 2,
        eyebrow: "Monitoring",
        title: "Setup real-time alert systems for server downtime and runtime errors",
        description:
          "We configure real-time notification alerts to dispatch instantly if services fail or experience performance degradation.",
        image:
          "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?q=80&w=1632&auto=format&fit=crop",
        alt: "Alert triggers configuration",
        deliverables: [
          "Downtime triggers",
          "Sentry SDK config",
          "Slack/SMS alerts",
          "Diagnostic dashboards",
        ],
      },
      {
        id: 3,
        eyebrow: "Patching",
        title: "Update system packages, node modules, and database versions monthly",
        description:
          "We execute monthly dependency updates, audit vulnerability CVE patches, and upgrade runtime engines.",
        image:
          "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600&auto=format&fit=crop",
        alt: "Upgrading system packages",
        deliverables: [
          "Monthly upgrades",
          "Security patches",
          "API deprecation checks",
          "Regression testing",
        ],
      },
      {
        id: 4,
        eyebrow: "Backups",
        title: "Configure automated DB backups, snapshots, and disaster recovery",
        description:
          "We configure automated database replication, snapshot routines, and verify recovery time objectives (RTO).",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        alt: "Backup and recovery check",
        deliverables: [
          "Database snapshots",
          "S3 bucket replication",
          "Recovery test cycles",
          "Disaster recovery rules",
        ],
      },
      {
        id: 5,
        eyebrow: "SLA Support",
        title: "Establish support channels with fast SLAs to resolve critical issues",
        description:
          "We define critical support windows and response times, ensuring engineers respond to server issues within minutes.",
        image:
          "https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?q=80&w=1693&auto=format&fit=crop",
        alt: "SLA support tracking dashboard",
        deliverables: [
          "Helpdesk setup",
          "SLA response window",
          "Uptime validation",
          "Escalation pathways",
        ],
      },
    ],
    techTitle: "Built for maximum uptime and application longevity",
    techDescription:
      "We monitor your system 24/7 to catch and fix issues before they affect your users.",
    techItems: [
      {
        id: 1,
        name: "Proactive Alerting",
        description:
          "PagerDuty and Datadog setup to trigger instant notifications for high CPU loads or service errors.",
      },
      {
        id: 2,
        name: "Automated Backups",
        description:
          "Regular snapshot configurations and storage replication with verified data restores.",
      },
      {
        id: 3,
        name: "Dependency Upgrades",
        description:
          "Strict dependency checks using Dependabot or Snyk to prevent security vulnerabilities.",
      },
      {
        id: 4,
        name: "Code Audits",
        description:
          "Comprehensive code reviews to identify technical debt, security vulnerabilities, and logic flaws.",
      },
      {
        id: 5,
        name: "SLA Commitments",
        description:
          "Dedicated engineer assignments ensuring rapid triage and patch execution for live bugs.",
      },
    ],
    faqs: [
      { id: 1, question: "What does your support service include?", answer: "Bug fixes, monitoring, security updates, performance improvements, and technical consultation." },
      { id: 2, question: "How long does support last?", answer: "Every project includes a support period, with extended plans available." },
      { id: 3, question: "Do you offer emergency support?", answer: "Yes. Critical issues receive priority response." },
      { id: 4, question: "Can you maintain software built by another company?", answer: "Yes. We can audit, stabilize, and support third-party systems." },
      { id: 5, question: "How are support requests managed?", answer: "Through structured communication channels and issue tracking systems." },
    ],
  },
  "consulting": {
    heroTitle: "Technical Consulting",
    heroDescription:
      "Strategic guidance for complex technical challenges. From architecture reviews to tech stack selection, we help you make informed decisions that align with your business goals.",
    heroImage:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop",
    processTitle: "How we consult and outline your roadmap",
    processDescription:
      "We analyze your business requirements to construct optimized software design briefs.",
    workflowIntro:
      "We consult tech stacks, audit legacy software systems, and detail execution pathways focused on budget efficiency.",
    steps: [
      {
        id: 1,
        eyebrow: "Discovery",
        title: "Deep-dive workshops to audit goals, budget, and constraints",
        description:
          "We align with business owners, auditing budget constraints, timeframes, and future feature scopes.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        alt: "Strategic workshop",
        deliverables: [
          "Scope definition",
          "Budget boundaries",
          "Integration list",
          "Goal alignment map",
        ],
      },
      {
        id: 2,
        eyebrow: "Tech Audit",
        title: "Analyze legacy codebases, systems, and team capacity",
        description:
          "We review active software products, analyzing database schemas, code quality, and integration bottlenecks.",
        image:
          "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?q=80&w=1632&auto=format&fit=crop",
        alt: "Code and tech audit",
        deliverables: [
          "Legacy code report",
          "Database evaluations",
          "Bottleneck highlights",
          "Complexity analysis",
        ],
      },
      {
        id: 3,
        eyebrow: "Architecture",
        title: "Select database engines, frameworks, hosting, and API strategies",
        description:
          "We select core software stacks (e.g. Next.js, Postgres, AWS), drawing topology structures for optimal scaling.",
        image:
          "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600&auto=format&fit=crop",
        alt: "System architecture modeling",
        deliverables: [
          "Stack comparison",
          "Network topologies",
          "Security recommendations",
          "Cost configurations",
        ],
      },
      {
        id: 4,
        eyebrow: "Roadmap Plan",
        title: "Define sprint scopes, estimation models, and resource sizing",
        description:
          "We structure phase releases, sizing sprint requirements and estimating delivery timelines.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        alt: "Sprint planning session",
        deliverables: [
          "Phase breakdowns",
          "Sprint structures",
          "Resource estimates",
          "Risk mitigation plan",
        ],
      },
      {
        id: 5,
        eyebrow: "Review & Sync",
        title: "Bi-weekly syncs to verify architecture progress and resolve blockers",
        description:
          "We conduct project touchpoints, reviewing execution quality and resolving architectural hurdles.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
        alt: "Review touchpoint meeting",
        deliverables: [
          "Triage meetings",
          "Quality audits",
          "Hurdle resolution",
          "Handoff summaries",
        ],
      },
    ],
    techTitle: "Grounded in pragmatism, scale, and performance",
    techDescription:
      "We provide tech-agnostic recommendations focused solely on budget efficiency and business growth.",
    techItems: [
      {
        id: 1,
        name: "Detailed Blueprints",
        description:
          "System diagrams, database entity relations, and data topologies for developers to build from.",
      },
      {
        id: 2,
        name: "Tech-Agnostic Audits",
        description:
          "Honest cost-benefit analysis of competing framework technologies and hosting environments.",
      },
      {
        id: 3,
        name: "Scaling Roadmaps",
        description:
          "Clear, step-by-step technical growth strategies to migrate applications from MVP to large clusters.",
      },
      {
        id: 4,
        name: "Compliance Checks",
        description:
          "System architectural preparation for security reviews, GDPR compliance, or SOC2 readiness.",
      },
    ],
    faqs: [
      { id: 1, question: "What types of consulting do you provide?", answer: "Architecture reviews, AI strategy, cloud planning, DevOps, and digital transformation." },
      { id: 2, question: "Can you help validate a startup idea?", answer: "Yes. We assist with technical feasibility, architecture, and MVP planning." },
      { id: 3, question: "Do you provide CTO-level guidance?", answer: "Yes. We offer strategic technical consulting for startups and growing businesses." },
      { id: 4, question: "Can consulting lead to implementation?", answer: "Absolutely. We can move from strategy to full execution." },
      { id: 5, question: "How are consulting engagements structured?", answer: "One-time workshops, project-based engagements, or ongoing advisory partnerships." },
    ],
  },
};
