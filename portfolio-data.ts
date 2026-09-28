// Portfolio content. Copy is taken from the owner's brief (exact wording,
// em/en dashes converted to commas, colons and parentheses; no invented
// numbers; [ADD: ...] placeholders dropped, sentences kept qualitative).

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  {
    value: 15,
    suffix: "+",
    label: "Years in SaaS Delivery & QA Leadership",
  },
  {
    value: 17,
    suffix: "+",
    label: "Concurrent Product Pipelines Directed (Augmedix-Commure)",
  },
  { value: 40, suffix: "+", label: "Team Members Led" },
  { value: 3, suffix: "", label: "AI-Built Digital Products Shipped Solo" },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Technical",
    items: [
      "**AI-Assisted Product Development** (Claude, Higgsfield, 'vibe coding')",
      "**Cloud & SaaS Platforms** (AWS, GCP, Microservices, Containers, CI/CD)",
      "**Web Technologies** (JavaScript, HTML/CSS, working knowledge of Python, Angular, Node.js)",
      "**QA & Release Engineering** (test strategy, release management, enterprise QA tooling)",
      "**Delivery Methodologies** (Agile, Scrum, Hybrid Agile/Waterfall, structured recovery and reset planning)",
    ],
  },
  {
    title: "Leadership & Soft Skills",
    items: [
      "Executive & Steering-Committee Communication",
      "Cross-Functional Leadership Through Influence (Sales, Product, Engineering, QA, Business)",
      "Team Mentorship & Development (teams up to 40+)",
      "Risk, Dependency & Escalation Management",
      "Budget Planning, Recruiting & Resource Allocation",
      "Customer Trust-Building with Global, Distributed Stakeholders",
    ],
  },
];

export type Experience = {
  company: string;
  roles: string[];
  dates: string;
  summary: string;
};

export const experience: Experience[] = [
  {
    company: "Exabyting Technologies",
    roles: ["Senior Project Manager"],
    dates: "Sep 2025 to Aug 2026",
    summary:
      "Owned end-to-end delivery of concurrent SaaS engagements for fintech clients; managed **4 concurrent** multi-stakeholder project pipelines; defined KPIs and standardized delivery frameworks across cross-functional teams.",
  },
  {
    company: "Augmedix-Commure",
    roles: [
      "Senior Manager, Release Process & Analytics",
      "Senior Software Test Manager",
      "Software Test Manager",
    ],
    dates: "Oct 2017 to Aug 2025",
    summary:
      "Directed enterprise-scale release delivery across **17+ concurrent product pipelines** for a global health-tech SaaS platform; led Analytics and QA teams of **40+**; represented the org at 2024 leadership summits in San Francisco.",
  },
  {
    company: "SoftwarePeople",
    roles: ["Senior QA Engineer"],
    dates: "Mar 2014 to Oct 2017",
    summary:
      "Owned test strategy and delivery quality for digital marketing and brand-management SaaS platforms; primary client contact for demos and status calls.",
  },
  {
    company: "2020 Technologies",
    roles: ["QA Specialist"],
    dates: "Jan 2013 to Feb 2014",
    summary:
      "Executed smoke, functional, and regression testing for enterprise design software with international QA teams.",
  },
  {
    company: "Exling LLC",
    roles: ["Senior SQA Engineer / Team Lead"],
    dates: "Oct 2009 to Dec 2012",
    summary:
      "Led an **11-member team** supporting enterprise SaaS delivery; maintained daily communication with US-based clients; traveled on-site to the USA in 2010.",
  },
  {
    company: "Panoramic Ltd.",
    roles: ["Trainee Software Developer"],
    dates: "Apr 2009 to Aug 2009",
    summary:
      "Developed internal tools and web applications using Java and PHP.",
  },
];

export type Project = {
  name: string;
  meta: string;
  tag: "Solo build" | "Program led" | "Hands-on QA" | "Engineering";
  oneliner: string;
  s: string;
  t: string;
  a: string;
  r: string;
  href?: string;
  image?: string;
  photoSlot?: string;
  social?: boolean;
};

export const projects: { label: string; note: string; items: Project[] }[] = [
  {
    label: "Products I've Built",
    note: "Designed, built and shipped solo with AI-assisted development.",
    items: [
      {
        name: "KiwiDrive",
        image: "/assets/proj/kiwidrive.jpg",
        meta: "Digital guide",
        tag: "Solo build",
        oneliner:
          "A bilingual digital guide helping Bangladeshi newcomers learn New Zealand's driving rules and road signs.",
        s: "Bangladeshi newcomers relocating to New Zealand face a steep, confusing learning curve around NZ driving laws and road signs, with no consolidated resource in their own language.",
        t: "Build a self-serve, accessible guide covering NZ driving rules and road signage for a Bangladeshi audience, in both Bangla and English.",
        a: "Independently designed, wrote, and published a 3-part digital ebook resource, a Bangla edition, an English edition, and a dedicated complete road-sign reference, using AI-assisted development (Claude + Higgsfield) to go from idea to live product without a traditional dev team.",
        r: "Shipped and **live** at kiwiroad.higgsfield.app, giving the Bangladeshi immigrant community in NZ a language-accessible driving resource.",
        href: "https://kiwiroad.higgsfield.app/",
      },
      {
        name: "Drip",
        image: "/assets/proj/drip.jpg",
        meta: "Ecommerce storefront",
        tag: "Solo build",
        oneliner:
          "An ecommerce storefront for a health brand selling natural fruit and medicinal herb extracts.",
        s: "Drip, a health-focused product company, needed a way to sell and promote its natural fruit and medicinal herbal extract products online.",
        t: "Design and launch a functioning ecommerce website to showcase the catalog and support online sales.",
        a: "Independently built and deployed a full ecommerce site, product catalog, promotional content, and purchase flow, using AI-assisted development.",
        r: "Gave the company a **live, direct-to-consumer sales channel** at dripbd.higgsfield.app.",
        href: "https://dripbd.higgsfield.app/",
      },
      {
        name: "Pocket Social Media Manager",
        image: "/assets/proj/pocket-social.jpg",
        social: true,
        meta: "SaaS",
        tag: "Solo build",
        oneliner:
          "A SaaS tool that auto-generates and posts social content in English, Bangla, or Banglish for Bangladeshi users.",
        s: "Bangladeshi individuals and small businesses managing social media across multiple languages had no affordable, localized automation tool built for their specific language mix (English, Bangla, and Banglish).",
        t: "Build a SaaS product that automates social media post generation and publishing across all three language modes.",
        a: "Designed and built the SaaS application end-to-end, multi-language content generation, scheduling, and publishing, independently using AI-assisted development.",
        r: "A **live, working SaaS product** at pocket-social-manager.vercel.app, demonstrating full end-to-end product thinking from identifying a localization gap to shipping a working SaaS tool.",
        href: "https://pocket-social-manager.vercel.app/",
      },
    ],
  },
  {
    label: "Programs I've Led",
    note: "Enterprise delivery, confidential client work.",
    items: [
      {
        name: "MFS Gift Card",
        image: "/assets/proj/mfs-giftcard.jpg",
        meta: "Exabyting",
        tag: "Program led",
        oneliner:
          "A gift-card purchase and gifting feature for one of Bangladesh's leading mobile financial services (MFS) platforms.",
        s: "A leading MFS provider wanted to let users purchase and gift digital gift cards to themselves and loved ones directly within a leading MFS app.",
        t: "As Project Manager, own day-to-day delivery of the feature: development follow-ups, feature refinement, and testing.",
        a: "Ran daily development stand-ups and follow-ups with engineering, drove feature scoping and iterative improvement, and owned QA/testing through to release.",
        r: "Delivered a **production gift-card feature** for one of Bangladesh's most widely used fintech platforms.",
      },
      {
        name: "Bono",
        image: "/assets/proj/bono.jpg",
        meta: "Austria dating platform",
        tag: "Program led",
        oneliner:
          "A location-aware dating web and mobile app for the Austrian market.",
        s: "A client needed a dating platform for Austria with location-based discovery, including a mobile app.",
        t: "Plan and lead delivery of the web and mobile app, including a localized-map feature for area-based match discovery.",
        a: "Owned project planning end-to-end and led the delivery team through build and release, including the map-based local-area discovery feature.",
        r: "Shipped a **live dating platform** (web + mobile) with map-based discovery for the Austrian market.",
      },
      {
        name: "Liaison Marsark",
        image: "/assets/proj/liaison.jpg",
        meta: "Data extraction",
        tag: "Program led",
        oneliner:
          "A data extraction solution for parsing logistics invoices arriving in inconsistent formats.",
        s: "A logistics client needed to extract structured data from invoices that arrived in many different, inconsistent formats.",
        t: "Deliver a solution capable of extracting and standardizing data across varied invoice formats.",
        a: "Directed delivery of the extraction project, coordinating closely with engineering to handle format variability and edge cases.",
        r: "Delivered an **automated data-extraction capability** that reduced manual processing of multi-format logistics invoices.",
      },
      {
        name: "MRC",
        meta: "Exabyting / MFS",
        image: "/assets/proj/mfs-mrc.jpg",
        tag: "Program led",
        oneliner:
          "A multi-app integration feature letting mobile operators publish custom deals directly to MFS customers.",
        s: "A leading MFS provider needed a way for multiple partner applications to integrate and let mobile operators upload custom deals for customers.",
        t: "Deliver a feature enabling multi-app integration for mobile-operator deal publishing.",
        a: "Managed delivery of the integration feature connecting multiple applications into the MFS ecosystem.",
        r: "Delivered a **production integration** enabling mobile operators to publish custom deals directly to MFS customers.",
      },
      {
        name: "Live Provider App",
        image: "/assets/proj/live-provider.jpg",
        meta: "Augmedix",
        tag: "Program led",
        oneliner:
          "An app letting doctors live-stream and document patient conversations directly for EHR integration.",
        s: "Doctors needed a way to live-stream and document patient conversations without manual note-taking, feeding directly into EHR systems.",
        t: "Deliver a reliable live-streaming and documentation app for clinical use, one of Augmedix's most significant products.",
        a: "Owned QA and release delivery for the Live Provider app across its release pipeline as part of Augmedix's Release/QA leadership.",
        r: "Enabled doctors to **live-stream and document patient encounters** directly into EHR workflows, one of the most significant products delivered during the Augmedix tenure.",
      },
      {
        name: "SP3 (Google Glass Solution)",
        image: "/assets/proj/sp3.jpg",
        meta: "Augmedix",
        tag: "Program led",
        oneliner:
          "A Google Glass wearable app doctors used to document patient conversations hands-free.",
        s: "Doctors needed a hands-free way to document patient conversations during live exams.",
        t: "Deliver a Google Glass based wearable documentation solution for clinical use.",
        a: "Owned QA and release delivery for the Google Glass solution as part of the Augmedix product suite.",
        r: "Delivered a **wearable documentation tool** used by doctors during live patient visits, supporting EHR documentation workflows.",
      },
      {
        name: "Notes AI Transcription App",
        image: "/assets/proj/notes-ai.jpg",
        meta: "Augmedix",
        tag: "Program led",
        oneliner:
          "A fast AI transcription tool built for ER doctors' documentation needs.",
        s: "ER doctors needed fast, accurate transcription of patient conversations under high time pressure.",
        t: "Deliver an AI-powered transcription tool fast and reliable enough for emergency-room use.",
        a: "Owned QA and release delivery for the AI transcription product used by ER physicians.",
        r: "Delivered a **fast AI transcription tool** supporting quicker EHR charting in time-critical care settings.",
      },
    ],
  },
  {
    label: "Earlier Career: Hands-on QA & Engineering",
    note: "Where I built my foundation, 2009 to 2017.",
    items: [
      {
        name: "Dell Share",
        photoSlot: "Memories with my SoftwarePeople colleagues",
        meta: "SoftwarePeople / Dell",
        tag: "Hands-on QA",
        oneliner:
          "Dell's marketing platform, used by branding and marketing agencies to publish Dell ads across hundreds of cloud servers and websites.",
        s: "Dell's branding and marketing agencies relied on Dell Share to generate and publish Dell ads across hundreds of cloud servers and websites, so every feature release had to work reliably at scale.",
        t: "As Senior QA Engineer, make sure each new module and feature met quality standards before it went out.",
        a: "Took part in planning and project analysis for each module, designed and executed its test cases, and ran day-to-day testing of every feature being released.",
        r: "Contributed to **tested, release-ready features** for the ad-publishing platform behind a global brand's agency marketing.",
      },
      {
        name: "Marcombox",
        photoSlot: "Traveling abroad with the SoftwarePeople team",
        meta: "SoftwarePeople",
        tag: "Hands-on QA",
        oneliner:
          "A Jira-style project management tool with its own workflows, used by enterprise corporations.",
        s: "Enterprise corporations used Marcombox, a Jira-style project management tool, to run their own custom workflows, so defects in core flows would directly disrupt their day-to-day work.",
        t: "As QA Engineer, validate the product's features and workflows before each release reached enterprise users.",
        a: "Wrote test cases, ran UAT testing, and covered the core functional and end-to-end test flows across the tool's workflow features.",
        r: "Helped deliver **UAT-validated releases** of an enterprise project management tool.",
      },
      {
        name: "Furniture Manufacturing Software",
        photoSlot: "Tribute to Shahida Parveen, an empowering woman leader in tech",
        meta: "2020 Technologies / Canadian manufacturer",
        tag: "Hands-on QA",
        oneliner:
          "Software that used robotic measurement devices to size wood cuts for furniture assembly.",
        s: "A Canadian manufacturer relied on software that worked with robotic measurement devices to size wood and wood cuts that would later be assembled into furniture, where accuracy matters on every cut.",
        t: "As QA Specialist, verify the software behaved correctly across its measurement and cut-sizing scenarios.",
        a: "Executed smoke, functional, and regression testing on the measurement and cut-sizing features, working with international cross-functional QA teams.",
        r: "Helped ship **tested releases** of manufacturing software used for precise wood cutting and furniture production.",
      },
      {
        name: "Excel-to-Web Financial Platform",
        photoSlot: "My USA trip, May 2010",
        meta: "Exling LLC / Alenian, Florida, USA",
        tag: "Hands-on QA",
        oneliner:
          "A platform that turned Excel-designed pages into full websites, used by hundreds of client businesses to organize finances and ROI data.",
        s: "A Florida-based client ran a platform that hundreds of businesses used to organize their finances and ROI data. Pages were designed in Excel and automatically converted into full websites under the client's domain.",
        t: "Design the Excel-based UI and UX pages that the platform converted into live, client-facing web pages.",
        a: "Designed Excel page layouts as the platform's UI/UX layer and uploaded them to generate full websites, while leading an 11-member QA team and working on-site with the client in the USA in 2010.",
        r: "Delivered **client-facing financial web pages** for a platform serving **hundreds of client businesses**.",
      },
      {
        name: "Front-End UI Components",
        photoSlot: "My gaming setup",
        meta: "Panoramic Ltd.",
        tag: "Engineering",
        oneliner:
          "Front-end UI components and layouts for a web application, built as a trainee developer.",
        s: "A web application needed its front-end model and reusable UI components built and tested.",
        t: "As a trainee front-end developer, design and implement the application's UI elements and layouts.",
        a: "Designed and implemented buttons, UI components, and page layouts, and tested the front end as it was built.",
        r: "Built a **hands-on engineering foundation** that still shapes how I approach QA and delivery today.",
      },
    ],
  },
];

export type Certification = { name: string; note?: string; mark?: string };

export const certifications: Certification[] = [
  { name: "PMP", mark: "PMI" },
  { name: "Certified ScrumMaster (CSM)", mark: "SA", note: "Scrum Alliance, 2012" },
  {
    name: "ISTQB Certified Tester Foundation Level (CTFL)",
    mark: "ISTQB",
    note: "2010",
  },
  {
    name: "Advanced Certification of Management Professionals (ACMP 4.0)",
    mark: "IBA",
    note: "IBA, 2017",
  },
];

export const contact = {
  headline: "Let's Talk",
  line: "Open to Technical Program Manager, SaaS Delivery, and related leadership roles.",
  email: { label: "bapon.bu@gmail.com", href: "mailto:bapon.bu@gmail.com" },
  phone: { label: "+880 1780-444466", href: "https://wa.me/8801780444466" },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mosabber-ahmed-53798b16/",
  },
  github: { label: "GitHub", href: "https://github.com/MosabberUddin" },
  location: "Dhaka, Bangladesh",
};
export type Slide = { src?: string; caption: string };

export const experiencePhotos: Record<string, Slide[]> = {
  "Exabyting Technologies": [{ caption: "Team at Exabyting" }, { caption: "Delivery planning session" }],
  "Augmedix-Commure": [{ caption: "Augmedix team, Dhaka" }, { caption: "Leadership summit, San Francisco 2024" }],
  SoftwarePeople: [{ caption: "SoftwarePeople colleagues" }, { caption: "Team trips abroad" }],
  "2020 Technologies": [{ caption: "2020 Technologies team" }, { caption: "QA lab days" }],
  "Exling LLC": [{ caption: "On-site in the USA, May 2010" }, { caption: "Exling QA team" }],
  "Panoramic Ltd.": [{ caption: "Where it all started" }, { caption: "First developer desk" }],
};

export const experienceProjects: Record<string, { label: string; href: string }[]> = {
  "Exabyting Technologies": [
    { label: "MFS Gift Card", href: "#proj-mfs-gift-card" },
    { label: "MFS MRC", href: "#proj-mrc" },
    { label: "Bono", href: "#proj-bono" },
    { label: "Liaison Marsark", href: "#proj-liaison-marsark" },
  ],
};
