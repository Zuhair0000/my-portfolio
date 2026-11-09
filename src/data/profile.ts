// Everything on the site that isn't a project. Source: portfolio-content.md.
// Edit here; components only read from this file.

export const profile = {
  name: "Zuhair Ahmed",
  role: "AI & Machine Learning Engineer",
  positioning:
    "I build LLM applications, RAG systems and explainable machine learning, from the model to a working full-stack product.",
  location: "Johor, Malaysia",
  relocation: ["Qatar", "Saudi Arabia", "the UAE"],
  availableFrom: "February 2027",
  availability: "Open to full-time AI/ML engineering roles from February 2027.",
  resumeUrl: "/Zuhair_Ahmed_Resume.pdf",
  about: [
    "I'm a Software Engineering graduate who works where machine learning meets real products. I've built a bilingual Arabic/English RAG assistant, a passport OCR pipeline with honest pre-registered evaluation, and explainable fraud and credit-risk models.",
    "I care about AI that people can check and trust, and Arabic is my advantage for multilingual AI work.",
  ],
  languages: ["Arabic (fluent)", "English (fluent)"],
  education: {
    degree: "Bachelor of Computer Science (Software Engineering) with Honours",
    school: "Universiti Tun Hussein Onn Malaysia (UTHM)",
    details: ["CGPA 3.40", "Dean's List for 3 semesters"],
  },
} as const;

export const links = {
  email: "zuhairahmed952@gmail.com",
  linkedin: "https://www.linkedin.com/in/zuhairhassan52",
  github: "https://github.com/Zuhair0000",
  orcid: "https://orcid.org/0009-0004-7595-6848",
} as const;

export type ExperienceRole = {
  title: string;
  org: string;
  context: string;
  period: string;
  bullets: string[];
  inProgress?: string;
};

export const experience: ExperienceRole[] = [
  {
    title: "Machine Learning & Software Engineer (Industrial Training)",
    org: "Universiti Tun Hussein Onn Malaysia (FSKTM)",
    context: "Client project for Rio Tala Travel & Tourism Agency",
    period: "Aug 2026 – Jan 2027",
    // Client project: no screenshots or code links, by design.
    bullets: [
      "Building a two-sided AI onboarding platform: a client portal and a staff dashboard (React/TypeScript, Node/Express, FastAPI, MySQL).",
      "Built a bilingual RAG assistant that answers in the user's language, including Sudanese colloquial Arabic, from English-only company policy documents.",
      "Built a passport OCR service (FastAPI, MRZ-trained Tesseract) that reads photos and multi-page PDFs, validates check digits, cross-checks the MRZ against the printed page, and sends uncertain reads to staff review without blocking uploads.",
      "Fixed 10 evaluation criteria before testing and ran them once on a 42-file held-out set: zero silent field errors and every safety gate passed; accuracy gaps on messy images were recorded for the next iteration.",
    ],
    inProgress:
      "In progress until Jan 2027: client portal, lead scoring with SHAP explanations, Docker Compose deployment, handover documentation.",
  },
];

export type Paper = {
  title: string;
  status: "Published" | "In submission";
  /** In publication order. The owner's name is shown in bold. */
  authors?: string[];
  venue: string;
  year?: number;
  role: string;
  summary?: string;
  /** Publisher page (e.g. IEEE Xplore). The title links here when set. */
  url?: string;
  /** Bare DOI, without the https://doi.org/ prefix. */
  doi?: string;
};

/** Highlighted in author lists. */
export const authorName = "Zuhair Ahmed";

export const research: Paper[] = [
  {
    title:
      "Toward Improving Software Functionality through Refactoring Operations: An Experimental Study",
    status: "Published",
    authors: [
      "Abdullah Almogahed",
      "Manal Othman",
      "Mustafa Moosa Qasim",
      "Said Badreddine",
      "Zuhair Ahmed",
      "Mazni Omar",
    ],
    venue:
      "2026 6th International Conference on Emerging Smart Technologies and Applications (eSmarTA), IEEE",
    year: 2026,
    role: "Corresponding author",
    summary:
      "An experimental study of how ten common refactoring operations, applied 453 times to the jEdit system, affect software functionality measured through cohesion, polymorphism, interface size, design size and inheritance.",
    url: "https://ieeexplore.ieee.org/document/11652314",
    doi: "10.1109/esmarta70636.2026.11652314",
  },
  {
    title: "Cross-lingual RAG evaluation (Arabic/English)",
    status: "In submission",
    venue: "Working paper",
    role: "First author",
    summary:
      "Tests whether RAG design choices that work in English (chunking, embedding model - bge-m3 and multilingual-e5 - hybrid retrieval, reranking) transfer to Arabic, using matched bilingual WHO health fact sheets, GPT-4o-mini as the generator and an LLM judge from a different vendor.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "AI & LLMs",
    items: [
      "OpenAI API",
      "Google Gemini",
      "LangChain",
      "Hugging Face embeddings",
      "RAG",
      "Prompt engineering",
      "Tool calling",
      "LLM evaluation",
    ],
  },
  {
    group: "Machine learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "SHAP",
      "Captum",
      "Imbalanced learning",
      "Recommender systems",
    ],
  },
  {
    group: "Data",
    items: ["Python", "pandas", "Polars", "NumPy", "SQL"],
  },
  {
    group: "Engineering",
    items: [
      "FastAPI",
      "Node.js",
      "Express",
      "React",
      "TypeScript",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "Claude Code",
    ],
  },
];

export const sections = [
  { id: "work", n: "01", label: "Work" },
  { id: "experience", n: "02", label: "Experience" },
  { id: "research", n: "03", label: "Research" },
  { id: "about", n: "04", label: "About" },
  { id: "contact", n: "05", label: "Contact" },
] as const;
