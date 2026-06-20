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
        // {
        //   heading: "Strategy",
        //   items: [
        //     { label: "Brand Strategy", href: "/services/brand-strategy" },
        //     { label: "Market Research", href: "/services/market-research" },
        //     { label: "Growth Consulting", href: "/services/growth" },
        //   ],
        // },
        {
          heading: "Design",
          items: [
            {
              label: "UI/UX Design",
              href: "/services/ui-ux",
            },
            // { label: "Motion Graphics", href: "/services/motion" },
            { label: "Product Design", href: "/services/product-design" },
          ],
        },
        {
          heading: "Development",
          items: [
            { label: "Web Development", href: "/services/web" },
            { label: "App Development", href: "/services/app" },
            { label: "CMS Integration", href: "/services/cms" },
            { label: "Performance Audit", href: "/services/audit" },
          ],
        },
        {
          heading: "AI & Cloud",
          items: [
            { label: "AI Integration", href: "/services/ai" },
            { label: "Cloud Services", href: "/services/cloud" },
          ],
        },
      ],
    },
  },
  {
    label: "Case Study",
    href: "/case-studies",
    hasDropdown: false,
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
            {
              label: "Our Story",
              href: "/about/story",
            },
            { label: "The Team", href: "/about/team" },
          ],
        },
        {
          heading: "More",
          items: [
            { label: "FAQ", href: "/about/faq" },
            { label: "Contact Us", href: "/about/contact" },
          ],
        },
      ],
    },
  },
];

export const MOBILE_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Study", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/aboutcontact" },
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
