// Personal content. Replace every TODO using PERSONALIZATION.md.
// Empty arrays hide their sections automatically.
import cuhk from "./assets/logos/cuhk.jpg";
import sjtu from "./assets/logos/sjtu.png";
import whu from "./assets/logos/whu.png";
import portrait from "./assets/profile/fang-yanbin.jpg";

export const CV_URL = "Your_Name_CV.pdf";

export const profile = {
  nameEn: "Fang Yanbin",
  nameCn: "",
  role: [
    "Ph.D. Student in Decisions, Operations and Technology, The Chinese University of Hong Kong",
  ],
  location: "",
  photo: portrait,
  links: [
    { label: "Email", href: "mailto:yibofang@link.cuhk.edu.hk" },
    // TODO: Add this after placing the real PDF in public/:
    // { label: "CV (PDF)", href: CV_URL, newTab: true },
  ],
};

export const about = [
  `I am a Ph.D. student (Year 1) in Decisions, Operations and Technology at The Chinese
   University of Hong Kong.`,
  `My current work primarily focuses on design science research involving
   large language models (LLMs). I am also actively exploring my broader
   research interests and compelling research questions.`,
  `I have three adorable cats: Bubu, Quanquan, and Mianmian, from oldest to
   youngest.`,
];

// Keep news newest first. HTML is allowed in news text, authors, and venue.
export const news = [];
export const education = [
  {
    org: "The Chinese University of Hong Kong",
    role: "Ph.D. Student in Decisions, Operations and Technology",
    date: "Aug 2026 – Present",
    logo: cuhk,
    logoScale: 1.25,
  },
  {
    org: "Shanghai Jiao Tong University",
    role: "Master of Management in Management Science and Engineering",
    date: "Sep 2023 – Mar 2026",
    logo: sjtu,
  },
  {
    org: "Wuhan University",
    role: "Bachelor of Management in Information Management and Information Systems",
    date: "Sep 2019 – Jun 2023",
    logo: whu,
    logoScale: 0.93,
  },
];

export const publications = [
  {
    title: "WILC: A Wisdom Integration Framework for LLM Crowds",
    url: "https://aisel.aisnet.org/pacis2025/aiandml/aiandml/12/",
    authors: "<strong>Yanbin Fang</strong>, Xuan Wei, and Wei Chen",
    venue: "<em>Pacific Asia Conference on Information Systems (PACIS)</em>, 2025",
    abstract: "Large language models (LLMs) have demonstrated remarkable capabilities across diverse tasks, yet their performance remains limited when addressing complex real-world problems that demand diverse expertise. Existing approaches to leveraging multiple LLMs face critical limitations, including restricted generalizability, ineffective collaboration, or underutilization of iterative refinement capabilities. To address these challenges, this paper proposes a novel framework, Wisdom Integration for LLM Crowds (WILC), which enables fine-grained query-level collaboration between LLMs through multi-round reflective dialogues. WILC introduces two key innovations: a multi-round reflective dialogue mechanism that iteratively refines solutions, and a contextual bandits approach for dynamically matching the most suitable LLM to each query based on evolving capability requirements. By combining these innovations, WILC achieves adaptive capability complementarity across LLMs without task-specific supervised learning. Extensive experiments on three challenging benchmarks demonstrate that WILC significantly outperforms individual LLMs and existing methods, establishing a new paradigm for effectively harnessing the collective wisdom of LLM crowds.",
  },
  {
    title: "Trust or Doubt? Understanding the Mechanisms of Jargon Use on Doubt from the Source Credibility Perspective",
    url: "https://aisel.aisnet.org/pacis2022/157/",
    authors: "<strong>Yanbin Fang</strong>, Yiwen Zhang, and Yongqiang Sun",
    venue: "<em>Pacific Asia Conference on Information Systems (PACIS)</em>, 2022",
    abstract: "Brands tend to influence the consumption decision-making of customers by controlling the content they see in the user-generated content communities. Considering the significant effects of source credibility on information adoption, it is crucial to understand how the use of professional terms (i.e., jargon) in posts influences the perception of source credibility and consequently impacts the effectiveness of persuasion. To test our conceptual model, we conduct a 2 (jargon use: jargon, no-jargon) × 2 (recommender identity: beauty blogger, common user) between-subject experimental design and employ SPSS and PLS approaches to analyze the data from 212 respondents. The results suggest that jargon use not only has negatively indirect effects on doubt through competence-based source credibility and then through trustworthiness-based source credibility, but also has positively indirect effects on doubt through the two dimensions of source credibility respectively. Moreover, customer expertise moderates the relationship between jargon use and trustworthiness-based source credibility.",
  },
];

export const workingPapers = [
  {
    title: "Temporal Causal Graph Learning for Stock Prediction",
    authors: "Xuan Wei, <strong>Yanbin Fang</strong>, and Yechao Chen",
    meta: "Working paper",
    abstract: "Models transparent and dark causal relationships among stocks while accounting for dynamic market-level temporal trends, using a temporal causal graph learning framework for stock prediction.",
  },
  {
    title: "Causal Prompting for Large Language Models",
    authors: "<strong>Yanbin Fang</strong>, Wei Chen, and Xuan Wei",
    meta: "Working paper",
    abstract: "Uses causal inference and iterative refinement to optimize prompts. A causal estimation model supplies the reward signal for a heuristic-search prompt optimizer.",
  },
];

export const experience = [
  {
    org: "Accounting Fraud Detection and Explainability of Listed Companies",
    desc: "Developed a financial-fraud detection system combining financial and mobile big data. The system forecasts fraud risk over the next one to four quarters and explains the financial indicators driving each prediction.",
    role: "Core Member · School-Enterprise Joint Project",
    date: "Oct 2023 – Dec 2024",
  },
  {
    org: "Stock Prediction Based on Related Stocks and Financial Text Features",
    desc: "Developed a stock-prediction approach combining knowledge-graph representations of news and stock relationships, sentiment features, and LSTM-based deep-learning models.",
    role: "Core Member · Undergraduate Research Project · Supervisor: Liang Hong",
    date: "Mar 2021 – Jun 2021",
  },
];

export const projects = [
  {
    org: "Technical Skills",
    desc: "Programming: Python, SQL, R, MATLAB, Java. AI and LLM tools: PyTorch, LangChain, DSPy, llama.cpp, Ollama, Dify. Development: Git, Docker, Linux shell, SSH, Jupyter Notebook, VS Code, PyCharm, IntelliJ, Eclipse.",
    role: "Programming, AI/LLM, and developer tools",
    date: "",
  },
  {
    org: "Preservation and Dissemination of Culture in Ethnic Areas",
    desc: "Conducted research on preserving and disseminating culture in ethnic areas. The project received a Wuhan University Summer Social Practice Program Top 10 Research Report award and a university-level second prize.",
    role: "Social Practice Research Project",
    date: "Jun 2021 – Sep 2021",
  },
];

export const awards = [
  {
    org: "National Scholarship",
    role: "Awarded for three consecutive years",
    date: "2019 – 2022",
  },
  {
    org: "Top 1% Outstanding Graduate of Wuhan University",
    role: "Undergraduate graduation honor",
    date: "2023",
  },
  {
    org: "Huawei Honor Scholarship",
    role: "Shanghai Jiao Tong University",
    date: "2023 – 2024",
  },
  {
    org: "National Data-Driven Innovation Research Competition",
    role: "National Excellence Award · Top 30 Teams",
    date: "",
  },
  {
    org: "National College Student English Composition Competition",
    role: "National Second Prize",
    date: "2021",
  },
  {
    org: "Innovation and Entrepreneurship Competitions",
    role: "Three provincial third prizes: Internet+, E-Commerce Innovation/Creativity/Entrepreneurship Challenge, and Discovery Cup",
    date: "2020 – 2021",
  },
];
export const teaching = [];

export const lastUpdated = "August 2026";
