# Portfolio content - single source of truth

Use only the facts in this file. Do not invent numbers, users, clients or results.

## Identity

- Name: Zuhair Ahmed
- Role: AI & Machine Learning Engineer
- One-line positioning: I build LLM applications, RAG systems and explainable machine learning, from the model to a working full-stack product.
- Location: Johor, Malaysia. Open to relocating to Qatar, Saudi Arabia and the UAE.
- Availability: open to full-time AI/ML engineering roles from February 2027.
- Languages: Arabic and English (fluent in both).
- Education: Bachelor of Computer Science (Software Engineering) with Honours, Universiti Tun Hussein Onn Malaysia (UTHM). CGPA 3.40, Dean's List for 3 semesters.

## Links

- Email: zuhairahmed952@gmail.com
- LinkedIn: https://www.linkedin.com/in/zuhairhassan52
- GitHub: https://github.com/Zuhair0000
- ORCID: https://orcid.org/0009-0004-7595-6848
- Resume: /Zuhair_Ahmed_Resume.pdf (place the file in public/)

## Short about (2–3 sentences)

I'm a Software Engineering graduate who works where machine learning meets real products. I've built a bilingual Arabic/English RAG assistant, a passport OCR pipeline with honest pre-registered evaluation, and explainable fraud and credit-risk models. I care about AI that people can check and trust, and Arabic is my advantage for multilingual AI work.

## Experience

### Machine Learning & Software Engineer (Industrial Training)

- Universiti Tun Hussein Onn Malaysia (FSKTM). Client project for Rio Tala Travel & Tourism Agency. Aug 2026 – Jan 2027.
- Building a two-sided AI onboarding platform: a client portal and a staff dashboard (React/TypeScript, Node/Express, FastAPI, MySQL).
- Built a bilingual RAG assistant that answers in the user's language, including Sudanese colloquial Arabic, from English-only company policy documents.
- Built a passport OCR service (FastAPI, MRZ-trained Tesseract) that reads photos and multi-page PDFs, validates check digits, cross-checks the MRZ against the printed page, and sends uncertain reads to staff review without blocking uploads.
- Fixed 10 evaluation criteria before testing and ran them once on a 42-file held-out set: zero silent field errors and every safety gate passed; accuracy gaps on messy images were recorded for the next iteration.
- In progress until Jan 2027: client portal, lead scoring with SHAP explanations, Docker Compose deployment, handover documentation.
- Note: this is a client project. Show NO screenshots or code links for it.

## Research

1. Published - "Toward Improving Software Functionality through Refactoring Operations: An Experimental Study".
   - Authors: Abdullah Almogahed, Manal Othman, Mustafa Moosa Qasim, Said Badreddine, Zuhair Ahmed, Mazni Omar
   - Venue: 2026 6th International Conference on Emerging Smart Technologies and Applications (eSmarTA), IEEE
   - Year: 2026
   - Role: corresponding author
   - DOI: 10.1109/esmarta70636.2026.11652314
   - Link: https://ieeexplore.ieee.org/document/11652314
   - Summary: An experimental study of how ten common refactoring operations, applied 453 times to the jEdit system, affect software functionality measured through cohesion, polymorphism, interface size, design size and inheritance.
2. In submission - Cross-lingual RAG evaluation (Arabic/English) - first-author study, completed, submission in progress. Tests whether RAG design choices that work in English (chunking, embedding model - bge-m3 and multilingual-e5 - hybrid retrieval, reranking) transfer to Arabic, using matched bilingual WHO health fact sheets, GPT-4o-mini as the generator and an LLM judge from a different vendor.

## Projects (in this order)

### 1. Fraud Detection with Explainable AI

- Slug: fraud-detection
- GitHub: https://github.com/Zuhair0000/Fraud-Detection
- Stack: Python, Polars, scikit-learn, PyTorch, Captum, FastAPI, React, Tailwind CSS
- Problem: only 1.15% of applications in the Bank Account Fraud dataset (NeurIPS 2022) are fraud, so a model can be 99% "accurate" by never predicting fraud.
- What I built:
  - Polars data preparation that found 20,594 hidden missing values coded as -1 and turned them into an explicit flag.
  - A leak-free scikit-learn preprocessing pipeline and a Random Forest baseline.
  - A PyTorch network (64 → 32 → 1, dropout) trained with a positive-class weight equal to the legitimate-to-fraud ratio, so a missed fraud costs far more than a false alarm.
  - Captum Integrated Gradients: the API returns the top 3 reasons behind each flagged transaction.
  - A FastAPI service and a React dashboard that loads real held-out transactions and shows the model's decision next to the true label.
- Results (held-out test set of 2,000 transactions, 21 fraud): recall 62% (13 of 21 caught), precision 4% (333 false alarms), threshold 0.5.
- Trade-off: tuned to miss as little fraud as possible; false alarms go to an analyst.
- Next: tune the threshold on a validation set, train on the full dataset, compare with gradient boosting, add API tests.

### 2. SouqYemen - Bilingual Marketplace (Final Year Project)

- Slug: souqyemen
- GitHub: https://github.com/Zuhair0000/souqyemen
- Stack: React 19, Vite, Tailwind CSS, i18next, Socket.IO, Node.js, Express, MySQL, JWT, bcrypt, FastAPI, PyTorch, Docker, Nginx, AWS RDS
- Problem: small businesses in Yemen have few ways to sell online.
- What I built:
  - A marketplace with four user roles: customers, sellers, admins and delivery staff.
  - A full Arabic (right-to-left) and English interface.
  - Real-time customer–seller chat, Google sign-in, password reset by email, seller dashboards with charts and PDF reports, admin approval of new sellers.
  - A neural collaborative filtering recommender in PyTorch (32-dimensional user and product embeddings, 64 → 32 → 1 network), served by its own FastAPI microservice, trained on about 9,500 ratings across 1,000 products, with a popular-products fallback for new users.
  - Each part in its own Docker container; deployed on AWS with Nginx and HTTPS for the final presentation (no longer live).
- Next: automated tests, ranking metrics (precision@k), hybrid content features, real payments.

### 3. Hive Content - AI Content Plan Generator

- Slug: hive-content
- GitHub: https://github.com/Zuhair0000/hive-content
- Stack: Google Gemini API, React, Vite, Tailwind CSS, Node.js, Express, PostgreSQL (Supabase), JWT, bcrypt
- Problem: small businesses struggle to plan consistent social media content.
- What I built:
  - A brief form (business, audience, content type, duration, frequency, details).
  - A structured prompt to Google Gemini that sets the number of posts from duration × frequency and the script length by format (100–120 words for short videos, 700–900 for long videos).
  - Strict JSON output parsed into posts: title, idea, word-for-word script, caption, hashtags, call to action, visual suggestions.
  - Plans saved per user in PostgreSQL, with Content and Schedule views and edit/delete.
- Example: for a travel agency targeting travellers from Yemen it produced posts like "Need a Break? Discover Your Dream Vacation!".
- Next: validate JSON against a schema with automatic retries, show generation progress, regenerate single posts.

### 4. Loan Approval & Credit Risk

- Slug: loan-approval
- GitHub: https://github.com/Zuhair0000/loan-approval-system
- Stack: scikit-learn, pandas, FastAPI, Pydantic, React, Tailwind CSS
- Problem: banks need to catch likely defaults and explain each decision to regulators.
- What I built: a leak-free preprocessing pipeline on the German Credit dataset (20 features), compared Logistic Regression and Random Forest with balanced class weights, served the chosen model with FastAPI to a loan-officer dashboard, and explained decisions with coefficient weights.
- Results (200 applicants, 60 defaults): Logistic Regression recall 80% (48 of 60), precision 56%, accuracy 75%. Random Forest recall 43% (26 of 60), precision 70%, accuracy 78%. Logistic Regression was chosen because missing a default costs a bank far more than a manual review.
- Fairness: the dataset includes sensitive attributes such as foreign-worker status; a production system should remove or audit them.

### 5. E-Commerce Purchase Prediction at Scale

- Slug: ecommerce-purchase-prediction
- GitHub: https://github.com/Zuhair0000/ecommerce-purchase-prediction
- Stack: Python, Polars, Parquet (PyArrow), scikit-learn
- Problem: 42.4 million raw events (a 5.7 GB CSV) are too large to handle comfortably in pandas.
- What I built: lazy loading with Polars, streamed CSV-to-Parquet conversion (about 14 seconds), grouped 42.4M events into 9,244,422 sessions in under 3 seconds, excluded a feature that leaked the target, and trained a class-weighted logistic regression on a 93/7 imbalance (6.8% of sessions purchase).
- Data: 42,448,764 events, 3,022,290 users.
- Next: benchmark against pandas, richer session features, gradient boosting.

### 6. CineMatch - Movie Recommender

- Slug: cinematch
- GitHub: https://github.com/Zuhair0000/movie_recommender_system
- Stack: pandas, NLTK, scikit-learn, FastAPI, React, Tailwind CSS
- What I built: a content-based recommender on the TMDB 5000 dataset that combines genres, keywords, top cast and director into text tags, vectorises them with Bag-of-Words (5,000 features), and pre-computes a 4,806 × 4,806 cosine-similarity matrix so each recommendation is a quick lookup through FastAPI.

## Skills (grouped)

- AI & LLMs: OpenAI API, Google Gemini, LangChain, Hugging Face embeddings, RAG, prompt engineering, tool calling, LLM evaluation
- Machine learning: PyTorch, TensorFlow, scikit-learn, SHAP, Captum, imbalanced learning, recommender systems
- Data: Python, pandas, Polars, NumPy, SQL
- Engineering: FastAPI, Node.js, Express, React, TypeScript, MySQL, PostgreSQL, Docker, AWS, Git, Claude Code
