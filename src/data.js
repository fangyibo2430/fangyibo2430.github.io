// Personal content. Replace every TODO using PERSONALIZATION.md.
// Empty arrays hide their sections automatically.
export const CV_URL = "Your_Name_CV.pdf";

export const profile = {
  nameEn: "Fang Yanbin",
  nameCn: "",
  role: [
    "Ph.D. Student in Decisions, Operations and Technology",
    "The Chinese University of Hong Kong",
  ],
  location: "",
  photo: null, // TODO: import and use your portrait; see PERSONALIZATION.md
  links: [
    { label: "Email", href: "mailto:yibo_fang@sjtu.edu.cn" },
    { label: "GitHub", href: "https://github.com/fangyibo2430" },
    // TODO: Add this after placing the real PDF in public/:
    // { label: "CV (PDF)", href: CV_URL, newTab: true },
  ],
};

export const about = [
  `I am a Ph.D. student in Decisions, Operations and Technology at The Chinese
   University of Hong Kong. Before beginning my doctoral studies, I studied
   Management Science and Engineering at Shanghai Jiao Tong University and
   Information Management and Information Systems at Wuhan University.`,
  `My research explores how artificial intelligence can support complex
   decision-making. My current interests include collaboration among large
   language models, causal learning and prompting, financial prediction, and
   data-driven business analytics.`,
];

// Keep news newest first. HTML is allowed in news text, authors, and venue.
export const news = [];
export const education = [
  {
    org: "The Chinese University of Hong Kong",
    role: "Ph.D. Student in Decisions, Operations and Technology",
    date: "Present",
    url: "https://www.cuhk.edu.hk/",
  },
  {
    org: "Shanghai Jiao Tong University, Antai College of Economics and Management",
    role: "Master of Management in Management Science and Engineering · Supervisor: Xuan Wei · GPA: 3.83/4.0 (Rank: 7/48)",
    date: "Sep 2023 – 2025",
    url: "https://www.acem.sjtu.edu.cn/en/",
  },
  {
    org: "Wuhan University, School of Information Management",
    role: "Bachelor of Management in Information Management and Information Systems · GPA: 3.93/4.0 (Rank: 1/70)",
    date: "Sep 2019 – Jun 2023",
    url: "https://sim.whu.edu.cn/",
  },
];

export const publications = [
  {
    title: "Trust or Doubt? Understanding the Mechanisms of Jargon Use on Doubt from the Source Credibility Perspective",
    authors: "<strong>Yanbin Fang</strong>, Yiwen Zhang, and Yongqiang Sun",
    venue: "<em>Pacific Asia Conference on Information Systems (PACIS)</em>, 2022",
    abstract: "Investigates how professional jargon influences consumer doubt through competence-based and trustworthiness-based source credibility. The study uses a 2 × 2 between-subject experiment and analyzes responses from 212 participants using SPSS and PLS.",
  },
  {
    title: "Research on the Method of Identifying Potential Interdisciplinary Knowledge Association Based on Link Prediction",
    authors: "Jin Mao, <strong>Yanbin Fang</strong>, and Hongyi Lan",
    venue: "<em>China Intelligence Science Annual Conference and Development Forum of Intelligence Science and Intelligence Work</em>, 2022",
    abstract: "Develops an interdisciplinary knowledge-discovery framework based on link prediction and validates it in the field of medical informatics.",
  },
];

export const workingPapers = [
  {
    title: "WILC: A Wisdom Integration Framework for LLM Crowds",
    authors: "<strong>Yanbin Fang</strong>, Xuan Wei, and Wei Chen",
    meta: "Conditionally accepted by PACIS 2025",
    abstract: "Introduces Wisdom Integration for LLM Crowds, a framework for dynamic, query-level collaboration among heterogeneous LLMs. It combines multi-round reflective dialogue with contextual-bandit matching of queries to models.",
  },
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
