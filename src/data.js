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
    { label: "yibofang@link.cuhk.edu.hk", href: "mailto:yibofang@link.cuhk.edu.hk" },
    // TODO: Add this after placing the real PDF in public/:
    // { label: "CV (PDF)", href: CV_URL, newTab: true },
  ],
};

export const about = [
  `I am a Ph.D. student (Year 1) in Decisions, Operations and Technology at The Chinese
   University of Hong Kong, advised by Prof. Michael Zhang. My current work
   primarily focuses on design science research involving
   large language models (LLMs). I am also actively exploring my broader
   research interests and compelling research questions.`,
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
    title: "Harnessing the Wisdom of LLM Crowds through Complementarity-Driven Iterative Collaboration",
    url: "https://arxiv.org/abs/2607.29087",
    authors: "<strong>Yanbin Fang</strong>, Xuan Wei, and Wei Chen",
    meta: "Working paper",
    abstract: "Large language models (LLMs) are increasingly deployed in enterprise settings, yet individual models remain bounded by model-specific capability limitations. These heterogeneous boundaries pose a deployment challenge, but also create an opportunity: strategically coordinating multiple LLMs may unlock collective intelligence exceeding any single model. Existing approaches fix how models are combined in advance, overlooking the dynamic, state-dependent role of complementarity in complex problem solving. Drawing on the wisdom-of-crowds paradigm, we reconceptualize collective LLM intelligence as relay-style complementarity: a sequential process in which each successor model is selected to address the specific bottleneck identified in its predecessor's output. To operationalize this, we propose WILC (Wisdom Integration of LLM Crowds), a framework grounded in two design principles. First, iterative reflection-and-refinement establishes a state-preserving workflow through which models diagnose and refine prior outputs. Second, complementarity-driven model selection governs transitions via a dual-gate mechanism: prospective complementarity fit (PCF) identifies the worker most suited to the current bottleneck, while posterior complementarity gain (PCG) evaluates whether the selected transition improves the evolving solution. Experiments across four diverse benchmarks show that WILC outperforms existing approaches, including single-model self-refinement, ensemble methods, and query-routing methods. Under standardized pricing assumptions, WILC matches the average benchmark performance of GPT-5.2 at roughly 7 times lower estimated per-query cost, while facilitating data sovereignty through self-hosted deployment. This study extends wisdom-of-crowds theory from static aggregation to sequential AI complementarity and provides transferable design principles for multi-AI coordination.",
  },
  {
    title: "Governing the Instruction Layer of Generative AI Systems: A Causal Optimization Framework",
    authors: "Wei Chen, <strong>Yanbin Fang</strong>, Shuran Fu, Fasheng Xu, and Xuan Wei",
    meta: "Working paper",
    abstract: "Enterprises increasingly govern generative AI systems through natural language instructions (system prompts, task specifications, and procedural guidelines) that function as operational policies for AI-enabled workflows, yet observed performance can conflate a prompt's contribution with the characteristics of the tasks on which it is used. We formulate prompt policy governance as a causal inference problem: the relevant managerial quantity is the counterfactual change in expected performance from replacing one prompt policy with another for the same query context. We develop Causal Prompt Optimization (CPO), a two-stage design artifact. Stage 1 uses Double Machine Learning on semantic embeddings from controlled offline prompt comparisons to estimate query-conditional prompt effects; Stage 2 uses these estimates to rank prompt candidates without executing each candidate through the task LLM. Across benchmarks in mathematical reasoning (MATH), visualization (VisEval), and data analytics (DABench), CPO attains the highest overall accuracy, with its clearest gain on DABench Hard, where it exceeds the next-best method by 11 percentage points; its advantages on MATH Level 5 and VisEval Hard are smaller. On DABench, performance remains stable across the tested Qwen and GPT training compositions. In a restricted semi-synthetic analysis across all three benchmarks, CPO retains its advantage over an otherwise matched outcome-regression variant when prompt assignment depends on observed query difficulty and overlap is retained. Under the headline cost calibrations, CPO breaks even with online dynamic evaluation after roughly $1,400–$1,600 queries and with repeated static reoptimization after 3–8 policy update cycles over a 100,000-query horizon. The causal infrastructure can appreciate when accumulated data include measured outcomes and adequate prompt variation. These results support causal inference as a foundation for principled prompt policy governance in enterprise AI deployments, provided outcomes are measurable, prompt variation is maintained, and operating scale amortizes the initial evaluation investment.",
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
