import hero from "../assets/hero.png";
import about from "../assets/about.png";
export const PERSONAL = {
  name: "Ranjit Bhardwaj",
  initials: "RB",
  role: "AI & ML Engineer · Python Developer · Cloud Computing Learner",
  bio: `Crafting intelligent systems at the intersection of AI and human experience.
Passionate about machine learning, computer vision, and building software
that makes a meaningful difference in the world.`,
  about: `I'm an aspiring AI & ML engineer with a deep passion for building intelligent systems.
From sentiment analysis to computer vision pipelines, I transform complex problems into
elegant, data-driven solutions. I believe technology should not just work — it should inspire.

Currently pursuing my studies with a focus on machine learning, deep learning, and cloud computing.
I actively contribute to open source, compete in hackathons, and continuously push what I can build.`,
  location: "India",
  github: "https://github.com/ranjit1401",
  linkedin: "",
  email: "ranjit@example.com",
  instagram: "#",
  currentlyLearning: "Cloud Computing & Generative AI",
  // REPLACE with your real photo URL:
  heroImage: hero,
  aboutImage: about,
};

export const TITLES = [
  "AI & ML Student",
  "Python Developer",
  "Machine Learning Enthusiast",
  "Cloud Computing Learner",
];

export const SKILLS = [
  { name: "Python",           size: 120 },
  { name: "Machine Learning", size: 110 },
  { name: "Deep Learning",    size: 100 },
  { name: "TensorFlow",       size: 88  },
  { name: "Pandas",           size: 84  },
  { name: "NumPy",            size: 84  },
  { name: "OpenCV",           size: 76  },
  { name: "SQL",              size: 72  },
  { name: "React",            size: 84  },
  { name: "JavaScript",       size: 76  },
  { name: "FastAPI",          size: 76  },
  { name: "Git",              size: 72  },
  { name: "GitHub",           size: 76  },
  { name: "Docker",           size: 72  },
  { name: "Cloud",            size: 72  },
  { name: "Vercel",           size: 68  },
  { name: "MongoDB",          size: 72  },
  { name: "PostgreSQL",       size: 80  },
  { name: "Figma",            size: 68  },
  { name: "HTML",             size: 68  },
  { name: "CSS",              size: 68  },
];

export const PROJECTS = [
  {
    title: "AI Sentiment Analyzer",
    tag: "Machine Learning",
    description: "Real-time sentiment analysis engine using transformer models — processing social media streams with 94% accuracy across 12 languages.",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    // REPLACE with actual project screenshots:
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=560&fit=crop&auto=format",
    github: "https://github.com/ranjit1401",
    live: "#",
  },
  {
    title: "Computer Vision Pipeline",
    tag: "Deep Learning",
    description: "Object detection and tracking using YOLOv8 and OpenCV for real-time surveillance analytics on edge devices.",
    tech: ["OpenCV", "YOLOv8", "Python", "NumPy"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=560&fit=crop&auto=format",
    github: "https://github.com/ranjit1401",
    live: "#",
  },
  {
    title: "Predictive Analytics Dashboard",
    tag: "Full Stack",
    description: "End-to-end ML pipeline with real-time dashboards for BI. Auto-retrains weekly from live data sources.",
    tech: ["React", "FastAPI", "PostgreSQL", "Pandas"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=560&fit=crop&auto=format",
    github: "https://github.com/ranjit1401",
    live: "#",
  },
  {
    title: "NLP Research Assistant",
    tag: "Research",
    description: "LLM-powered tool that summarizes academic papers, extracts key insights, and generates structured literature reviews automatically.",
    tech: ["Python", "LangChain", "MongoDB", "Vercel"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=560&fit=crop&auto=format",
    github: "https://github.com/ranjit1401",
    live: "#",
  },
  {
    title: "Generative Art Platform",
    tag: "AI",
    description: "Stable Diffusion-based platform for high-resolution AI art generation with community gallery and prompt engineering tools.",
    tech: ["Python", "Stable Diffusion", "React", "Docker"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=560&fit=crop&auto=format",
    github: "https://github.com/ranjit1401",
    live: "#",
  },
];

export const EXPERIENCES = [
  {
    title: "AI & Cloud Intern",
    org: "IBM SkillBuild",
    period: "2024 – 2025",
    type: "Internship",
    description: "Completed advanced AI and cloud computing modules. Built ML models on IBM Watson and deployed on IBM Cloud. Earned certifications in AI Fundamentals and Cloud Essentials.",
    tags: ["IBM Watson", "Cloud", "AI", "Python"],
  },
  {
    title: "ML Research Intern",
    org: "CSRBOX",
    period: "2025",
    type: "Internship",
    description: "Developed machine learning models for social impact analytics. Built data pipelines processing 50,000+ records. Presented findings to non-technical stakeholders.",
    tags: ["Machine Learning", "Data Science", "Python", "Pandas"],
  },
  {
    title: "Open Source Contributor",
    org: "Various Projects",
    period: "2024 – Present",
    type: "Open Source",
    description: "Active contributor to ML and Python open-source projects. Submitted 20+ PRs, resolved critical bugs, and added new features to community tools.",
    tags: ["Git", "Python", "GitHub", "Community"],
  },
  {
    title: "Hackathon Participant",
    org: "National Events",
    period: "2024 – Present",
    type: "Achievement",
    description: "Participated in 5+ national hackathons. Placed in top 3 twice for AI-based solutions. Built full-stack ML projects under 24–48 hour constraints.",
    tags: ["AI", "Full Stack", "Innovation", "Team Lead"],
  },
];

export const CERTS = [
  { name: "IBM AI Fundamentals",      org: "IBM SkillBuild",        dot: "#0F62FE" },
  { name: "Cloud Computing Essentials",org: "NPTEL",                dot: "#FF6F00" },
  { name: "AWS Cloud Practitioner",   org: "Amazon Web Services",   dot: "#FF9900" },
  { name: "Google Cloud Foundations", org: "Google Cloud",          dot: "#4285F4" },
  { name: "AI & ML Learning Path",    org: "Microsoft Learn",       dot: "#00A4EF" },
];

export const TIMELINE = [
  { year: "2024",   event: "Started Programming Journey",  sub: "Python · HTML · CSS"         },
  { year: "2024",   event: "First AI & ML Projects",       sub: "Models · Data Analysis"      },
  { year: "2025",   event: "Hackathons & Competitions",    sub: "5+ Events · 2 Top Prizes"    },
  { year: "2025",   event: "Open Source & Internships",    sub: "IBM · CSRBOX · 20+ PRs"      },
  { year: "Future", event: "ML Engineer",                  sub: "Building Intelligent Systems" },
];

export const EDUCATION = [
  { degree: "B.Tech in Computer Science & Engineering", school: "University — India", year: "2023 – 2027", note: "Pursuing" },
  { degree: "Higher Secondary (12th)",                  school: "Science Stream — India", year: "2023",       note: "Distinction" },
];

export const ACHIEVEMENTS = [
  { title: "Hackathon Top Placements",    detail: "Placed in top 3 at 2 national hackathons for AI-based solutions out of 5+ participations." },
  { title: "Open Source Contributor",     detail: "20+ merged PRs across ML and Python open-source projects on GitHub." },
  { title: "IBM SkillBuild Top Performer",detail: "Completed advanced AI & Cloud Computing track with distinction and certifications." },
  { title: "Student Leadership",          detail: "Led the technical team for college tech fest, coordinating 200+ participants across events." },
];
