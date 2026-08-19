// Personal content. Replace every TODO using PERSONALIZATION.md.
// Empty arrays hide their sections automatically.
export const CV_URL = "Your_Name_CV.pdf";

export const profile = {
  nameEn: "Fang Yanbin",
  nameCn: "",
  role: ["Your academic title", "Your institution"],
  location: "Your city, country/region",
  photo: null, // TODO: import and use your portrait; see PERSONALIZATION.md
  links: [
    { label: "Email", href: "mailto:your.email@example.edu" },
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "Google Scholar", href: "https://scholar.google.com/" },
    // TODO: Add this after placing the real PDF in public/:
    // { label: "CV (PDF)", href: CV_URL, newTab: true },
  ],
};

export const about = [
  `TODO: Add a short biography: current role, institution, adviser (if relevant),
   previous education, and a concise description of your research interests.`,
  `TODO: Add a second paragraph about your current research agenda, methods,
   collaborations, or the questions that motivate your work.`,
];

// Keep news newest first. HTML is allowed in news text, authors, and venue.
export const news = [];
export const education = [];
export const publications = [];
export const workingPapers = [];
export const experience = [];
export const projects = [];
export const awards = [];
export const teaching = [];

export const lastUpdated = "August 2026";
