// All project content lives here. Source: portfolio-content.md.
// Order in this array = order on the site. Edit freely; components only read.
//
// Rules: no invented numbers or claims. Optional fields that are left out
// make the matching case-study section disappear rather than show filler.

export type Screenshot = {
  /** Path under /public. */
  src: string;
  /** What the image shows, for screen readers. */
  alt: string;
  /** Short visible caption. */
  caption: string;
  /** Intrinsic size, used to reserve space and avoid layout shift. */
  width: number;
  height: number;
};

export type DataFigure = { label: string; value: string };

export type ResultsTable = {
  columns: string[];
  rows: string[][];
  /** Index of a row to emphasise (e.g. the chosen model). */
  highlightRow?: number;
};

export type Project = {
  slug: string;
  title: string;
  /** One line, shown in the index and under the case-study title. */
  summary: string;
  /** TODO(Zuhair): roles aren't in portfolio-content.md yet - fill in (e.g. "Solo project"). Hidden when absent. */
  role?: string;
  github: string;
  /** Full stack, shown on the case study. */
  stack: string[];
  /** 3–4 headline technologies for the index row. */
  mainStack: string[];
  /** Short figure for the index row, set in monospace. */
  keyFigure: string;

  problem?: string;
  built: string[];
  results?: {
    /** Test-set / data context, shown above the table. */
    context?: string;
    table?: ResultsTable;
    notes?: string[];
  };
  tradeoffs?: string[];
  next?: string[];

  /** First screenshot = index preview + case-study hero image. */
  screenshots: Screenshot[];
  /** Typeset figures used instead of a screenshot when there are none. */
  dataPanel?: DataFigure[];
};

export const projects: Project[] = [
  {
    slug: "fraud-detection",
    title: "Fraud Detection with Explainable AI",
    summary:
      "A fraud model for heavily imbalanced data that explains every transaction it flags.",
    github: "https://github.com/Zuhair0000/Fraud-Detection",
    stack: [
      "Python",
      "Polars",
      "scikit-learn",
      "PyTorch",
      "Captum",
      "FastAPI",
      "React",
      "Tailwind CSS",
    ],
    mainStack: ["PyTorch", "Captum", "Polars", "FastAPI"],
    keyFigure: "62% fraud recall",
    problem:
      "Only 1.15% of applications in the Bank Account Fraud dataset (NeurIPS 2022) are fraud, so a model can be 99% “accurate” by never predicting fraud.",
    built: [
      "Polars data preparation that found 20,594 hidden missing values coded as -1 and turned them into an explicit flag.",
      "A leak-free scikit-learn preprocessing pipeline and a Random Forest baseline.",
      "A PyTorch network (64 → 32 → 1, dropout) trained with a positive-class weight equal to the legitimate-to-fraud ratio, so a missed fraud costs far more than a false alarm.",
      "Captum Integrated Gradients: the API returns the top 3 reasons behind each flagged transaction.",
      "A FastAPI service and a React dashboard that loads real held-out transactions and shows the model’s decision next to the true label.",
    ],
    results: {
      context:
        "Held-out test set of 2,000 transactions, 21 of them fraud. Decision threshold 0.5.",
      table: {
        columns: ["Metric", "Value", "In counts"],
        rows: [
          ["Recall", "62%", "13 of 21 fraud caught"],
          ["Precision", "4%", "333 false alarms"],
        ],
      },
    },
    tradeoffs: [
      "Tuned to miss as little fraud as possible; false alarms go to an analyst.",
    ],
    next: [
      "Tune the threshold on a validation set.",
      "Train on the full dataset.",
      "Compare with gradient boosting.",
      "Add API tests.",
    ],
    screenshots: [
      {
        src: "/projects/fraud-detection/1.png",
        alt: "Transaction monitor dashboard with a real held-out transaction loaded. The model flags it as high risk, shows the true label (fraud) beside its decision, and lists the three features that contributed most.",
        caption: "A held-out fraud case, flagged, with its top three reasons.",
        width: 2116,
        height: 1768,
      },
      {
        src: "/projects/fraud-detection/2.png",
        alt: "The same dashboard with manually entered values; the transaction is cleared as low risk.",
        caption: "Manual entry: a transaction cleared as low risk.",
        width: 860,
        height: 797,
      },
    ],
  },

  {
    slug: "souqyemen",
    title: "SouqYemen - Bilingual Marketplace",
    summary:
      "My final-year project: an Arabic/English marketplace with a PyTorch recommender.",
    role: "Final Year Project",
    github: "https://github.com/Zuhair0000/souqyemen",
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "i18next",
      "Socket.IO",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "bcrypt",
      "FastAPI",
      "PyTorch",
      "Docker",
      "Nginx",
      "AWS RDS",
    ],
    mainStack: ["PyTorch", "FastAPI", "React", "Docker"],
    keyFigure: "~9,500 ratings · 1,000 products",
    problem: "Small businesses in Yemen have few ways to sell online.",
    built: [
      "A marketplace with four user roles: customers, sellers, admins and delivery staff.",
      "A full Arabic (right-to-left) and English interface.",
      "Real-time customer–seller chat, Google sign-in, password reset by email, seller dashboards with charts and PDF reports, and admin approval of new sellers.",
      "A neural collaborative filtering recommender in PyTorch (32-dimensional user and product embeddings, 64 → 32 → 1 network), served by its own FastAPI microservice, trained on about 9,500 ratings across 1,000 products, with a popular-products fallback for new users.",
      "Each part in its own Docker container; deployed on AWS with Nginx and HTTPS for the final presentation (no longer live).",
    ],
    next: [
      "Automated tests.",
      "Ranking metrics (precision@k).",
      "Hybrid content features.",
      "Real payments.",
    ],
    screenshots: [
      {
        src: "/projects/souqyemen/1.png",
        alt: "SouqYemen product grid in English, with a category sidebar, prices in Yemeni rial and add-to-cart buttons.",
        caption: "Product grid, English.",
        width: 1627,
        height: 968,
      },
      {
        src: "/projects/souqyemen/2.png",
        alt: "The same product grid in Arabic, with the whole layout mirrored right-to-left.",
        caption: "The same page in Arabic, right-to-left.",
        width: 1523,
        height: 960,
      },
      {
        src: "/projects/souqyemen/3.png",
        alt: "A “Recommended For You” section listing products suggested by the recommender, each tagged with a match label.",
        caption: "Recommendations from the PyTorch model.",
        width: 1559,
        height: 959,
      },
      {
        src: "/projects/souqyemen/4.png",
        alt: "Seller dashboard with summary figures, revenue and daily sales charts, and a Download Report button.",
        caption: "Seller dashboard.",
        width: 1539,
        height: 916,
      },
      {
        src: "/projects/souqyemen/5.png",
        alt: "Admin dashboard with platform-wide totals, a report download button and a list of top-selling products.",
        caption: "Admin dashboard.",
        width: 1447,
        height: 961,
      },
      {
        src: "/projects/souqyemen/6.png",
        alt: "Messages inbox listing a conversation with a seller.",
        caption: "Customer–seller messages.",
        width: 1492,
        height: 448,
      },
    ],
  },

  {
    slug: "hive-content",
    title: "Hive Content - AI Content Plan Generator",
    summary:
      "Turns a short business brief into a structured social media content plan with Gemini.",
    github: "https://github.com/Zuhair0000/hive-content",
    stack: [
      "Google Gemini API",
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL (Supabase)",
      "JWT",
      "bcrypt",
    ],
    mainStack: ["Gemini API", "Node.js", "PostgreSQL", "React"],
    keyFigure: "7-field JSON per post",
    problem:
      "Small businesses struggle to plan consistent social media content.",
    built: [
      "A brief form: business, audience, content type, duration, frequency and details.",
      "A structured prompt to Google Gemini that sets the number of posts from duration × frequency and the script length by format (100–120 words for short videos, 700–900 for long videos).",
      "Strict JSON output parsed into posts: title, idea, word-for-word script, caption, hashtags, call to action and visual suggestions.",
      "Plans saved per user in PostgreSQL, with Content and Schedule views and edit/delete.",
    ],
    results: {
      notes: [
        "Example: for a travel agency targeting travellers from Yemen, it produced posts like “Need a Break? Discover Your Dream Vacation!”.",
      ],
    },
    next: [
      "Validate JSON against a schema, with automatic retries.",
      "Show generation progress.",
      "Regenerate single posts.",
    ],
    // Ordered so the generated plan (the interesting part) leads.
    screenshots: [
      {
        src: "/projects/hive-content/3.png",
        alt: "A generated content plan. Each post shows its idea, full script, caption, hashtags, call to action and visual suggestion, with Edit and Delete controls.",
        caption: "A generated plan: one post per card, every field filled.",
        width: 1856,
        height: 959,
      },
      {
        src: "/projects/hive-content/2.png",
        alt: "Create Content Plan form with business name, target audience, content type, duration, posting frequency and additional details.",
        caption: "The brief form.",
        width: 1880,
        height: 943,
      },
      {
        src: "/projects/hive-content/5.png",
        alt: "Schedule view placing the generated posts on a numbered timeline.",
        caption: "Schedule view.",
        width: 1908,
        height: 955,
      },
      {
        src: "/projects/hive-content/4.png",
        alt: "Dashboard listing the user’s previously saved content plans.",
        caption: "Saved plans.",
        width: 1882,
        height: 953,
      },
      {
        src: "/projects/hive-content/1.png",
        alt: "Hive Content landing page with the headline “Plan Your Content with AI”.",
        caption: "Landing page.",
        width: 1902,
        height: 951,
      },
    ],
  },

  {
    slug: "loan-approval",
    title: "Loan Approval & Credit Risk",
    summary:
      "An explainable credit-risk model and loan-officer dashboard, chosen for catching defaults.",
    github: "https://github.com/Zuhair0000/loan-approval-system",
    stack: [
      "scikit-learn",
      "pandas",
      "FastAPI",
      "Pydantic",
      "React",
      "Tailwind CSS",
    ],
    mainStack: ["scikit-learn", "pandas", "FastAPI", "React"],
    keyFigure: "80% default recall",
    problem:
      "Banks need to catch likely defaults and explain each decision to regulators.",
    built: [
      "A leak-free preprocessing pipeline on the German Credit dataset (20 features).",
      "Compared Logistic Regression and Random Forest, both with balanced class weights.",
      "Served the chosen model with FastAPI to a loan-officer dashboard.",
      "Explained decisions with coefficient weights.",
    ],
    results: {
      context: "Test set of 200 applicants, 60 of whom defaulted.",
      table: {
        columns: ["Model", "Recall", "Precision", "Accuracy"],
        rows: [
          ["Logistic Regression", "80% (48 of 60)", "56%", "75%"],
          ["Random Forest", "43% (26 of 60)", "70%", "78%"],
        ],
        highlightRow: 0,
      },
    },
    tradeoffs: [
      "Logistic Regression was chosen despite lower accuracy, because missing a default costs a bank far more than a manual review.",
    ],
    next: [
      "Fairness: the dataset includes sensitive attributes such as foreign-worker status; a production system should remove or audit them.",
    ],
    screenshots: [
      {
        src: "/projects/loan-approval/1.png",
        alt: "Risk assessment dashboard: an applicant profile form on the left and the model’s decision on the right, reject (high risk), with the probability of default.",
        caption: "Loan-officer view: applicant profile and decision.",
        width: 1378,
        height: 697,
      },
    ],
  },

  {
    slug: "ecommerce-purchase-prediction",
    title: "E-Commerce Purchase Prediction at Scale",
    summary:
      "Session-level purchase prediction on 42.4 million events, processed with Polars.",
    github: "https://github.com/Zuhair0000/ecommerce-purchase-prediction",
    stack: ["Python", "Polars", "Parquet (PyArrow)", "scikit-learn"],
    mainStack: ["Polars", "Parquet", "scikit-learn"],
    keyFigure: "42.4M events → 9.24M sessions",
    problem:
      "42.4 million raw events (a 5.7 GB CSV) are too large to handle comfortably in pandas.",
    built: [
      "Lazy loading with Polars.",
      "Streamed CSV-to-Parquet conversion.",
      "Grouped 42.4M events into 9,244,422 sessions.",
      "Excluded a feature that leaked the target.",
      "Trained a class-weighted logistic regression on a 93/7 imbalance (6.8% of sessions purchase).",
    ],
    results: {
      table: {
        columns: ["Step", "Figure"],
        rows: [
          ["Streamed CSV → Parquet", "~14 s"],
          ["42.4M events grouped into sessions", "< 3 s"],
          ["Sessions that purchase", "6.8%"],
        ],
      },
    },
    next: [
      "Benchmark against pandas.",
      "Richer session features.",
      "Gradient boosting.",
    ],
    // No screenshots for this project: the data panel stands in.
    screenshots: [],
    dataPanel: [
      { label: "Raw events", value: "42,448,764" },
      { label: "Users", value: "3,022,290" },
      { label: "Sessions", value: "9,244,422" },
      { label: "Raw CSV", value: "5.7 GB" },
    ],
  },

  {
    slug: "cinematch",
    title: "CineMatch - Movie Recommender",
    summary:
      "A content-based movie recommender where each suggestion is a precomputed lookup.",
    github: "https://github.com/Zuhair0000/movie_recommender_system",
    stack: [
      "pandas",
      "NLTK",
      "scikit-learn",
      "FastAPI",
      "React",
      "Tailwind CSS",
    ],
    mainStack: ["scikit-learn", "NLTK", "FastAPI"],
    keyFigure: "4,806 × 4,806 similarity",
    built: [
      "A content-based recommender on the TMDB 5000 dataset that combines genres, keywords, top cast and director into text tags.",
      "Tags vectorised with Bag-of-Words (5,000 features).",
      "A pre-computed 4,806 × 4,806 cosine-similarity matrix, so each recommendation is a quick lookup through FastAPI.",
    ],
    screenshots: [
      {
        src: "/projects/cinematch/1.png",
        alt: "CineMatch search for “The Avengers” returning five similar films, including Avengers: Age of Ultron, Captain America: Civil War and Iron Man 3.",
        caption: "Recommendations for “The Avengers”.",
        width: 1039,
        height: 588,
      },
    ],
  },
];

export function getProject(slug: string | undefined) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  return {
    project: projects[index]!,
    index,
    prev: projects[index - 1] ?? null,
    next: projects[index + 1] ?? null,
  };
}

/** "01", "02", … */
export const projectNumber = (index: number) =>
  String(index + 1).padStart(2, "0");
