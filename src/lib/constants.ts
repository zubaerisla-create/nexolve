export const SITE_NAME = "Nexolve";
export const SITE_TAGLINE = "Available Worldwide";
export const SITE_EMAIL = "Available Worldwide";
export const SITE_DESCRIPTION =
  "We partner with ambitious brands to create digital experiences that drive growth, command attention, and deliver measurable results.";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
    hasDropdown: false,
  },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdown: {
      columns: [
        {
          heading: "AI Engineering",
          items: [
            { label: "AI Agents", href: "/services/ai-agents" },
            { label: "RAG Systems", href: "/services/rag-systems" },
            { label: "AI Automation", href: "/services/ai-automation" },
            { label: "Custom AI Solutions", href: "/services/custom-ai" },
          ],
        },
        {
          heading: "Product Development",
          items: [
            { label: "Web Development", href: "/services/web" },
            { label: "Mobile Development", href: "/services/app" },
            { label: "SaaS Platforms", href: "/services/saas" },
            { label: "UI/UX Design", href: "/services/ui-ux" },
          ],
        },
        {
          heading: "Long-Term Partnership",
          items: [
            { label: "Cloud Infrastructure", href: "/services/cloud" },
            { label: "DevOps & CI/CD", href: "/services/devops" },
            { label: "Maintenance & Support", href: "/services/maintenance" },
            { label: "Technical Consulting", href: "/services/consulting" },
          ],
        },
      ],
    },
  },
    {
    label: "Projects",
    href: "/projects",
    hasDropdown: false,
  },
    {
    label: "Blogs",
    href: "/blogs",
    hasDropdown: false,
  },
    {
    label: "About",
    href: "/about",
    hasDropdown: true,
    dropdown: {
      columns: [
        {
          heading: "Company",
          items: [
            { label: "About Nexolve", href: "/about/story" },
            { label: "Meet The Team", href: "/about/team" },
            { label: "How We Work", href: "/about/how-we-work" },
          ],
        },
        {
          heading: "Connect",
          items: [
            { label: "Book Strategy Call", href: "/contact" },
            { label: "Contact Us", href: "/contact" },
            { label: "FAQ", href: "/about/faq" },
          ],
        },
      ],
    },
  },

  { label: "Contact", href: "/contact" },
];

export const MOBILE_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Study", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
];

export const HERO_SERVICES = [
  { label: "Web Development", href: "/services/web" },
   { label: "Mobile Development", href: "/services/app" },
   { label: "AI Engineering", href: "/services/ai" },
   { label: "Cloud Infrastructure", href: "/services/cloud" },
   { label: "UI/UX Design", href: "/services/ui-ux" },
  { label: "Technical Consulting", href: "/services/project-design" },
 
 
  
];
