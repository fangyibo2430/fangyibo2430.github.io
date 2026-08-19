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
    date: "Aug 2026 – Present",
    logo: cuhk,
    logoScale: 1.25,
    url: "https://www.cuhk.edu.hk/",
  },
  {
    org: "Shanghai Jiao Tong University",
    role: "Master of Management in Management Science and Engineering",
    date: "Sep 2023 – Mar 2026",
    logo: sjtu,
    url: "https://www.acem.sjtu.edu.cn/en/",
  },
  {
    org: "Wuhan University",
    role: "Bachelor of Management in Information Management and Information Systems",
    date: "Sep 2019 – Jun 2023",
    logo: whu,
    logoScale: 0.93,
    url: "https://sim.whu.edu.cn/",
  },
];

export const publications = [
  {
    title: "WILC: A Wisdom Integration Framework for LLM Crowds",
    url: "https://aisel.aisnet.org/pacis2025/aiandml/aiandml/12/",
    authors: "<strong>Yanbin Fang</strong>, Xuan Wei, and Wei Chen",
    venue: "<em>Pacific Asia Conference on Information Systems (PACIS)</em>, 2025",
    abstract: "Large language models perform strongly across many tasks but can struggle with complex real-world problems that require diverse expertise. WILC enables fine-grained, query-level collaboration among LLMs through multi-round reflective dialogue and contextual-bandit matching. Experiments across three challenging benchmarks show that it outperforms individual LLMs and existing multi-model approaches.",
  },
  {
    title: "Trust or Doubt? Understanding the Mechanisms of Jargon Use on Doubt from the Source Credibility Perspective",
    url: "https://aisel.aisnet.org/pacis2022/157/",
    authors: "<strong>Yanbin Fang</strong>, Yiwen Zhang, and Yongqiang Sun",
    venue: "<em>Pacific Asia Conference on Information Systems (PACIS)</em>, 2022",
    abstract: "This study examines how the use of professional jargon in user-generated content shapes consumer doubt through competence- and trustworthiness-based source credibility. Using a 2 × 2 experiment that varies jargon use and recommender identity, the authors analyze responses from 212 participants with SPSS and PLS. The results reveal multiple indirect effects of jargon on doubt and show that customer expertise moderates how jargon influences trustworthiness-based credibility.",
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
