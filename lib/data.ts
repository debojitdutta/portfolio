export const profile = {
  name: "Debojit Dutta",
  role: "Software Developer & ML Enthusiast",
  location: "India",
  email: "debojitdutta109@gmail.com",

  description:
    "I build practical software and intelligent systems with a focus on Python, machine learning, computer vision, and modern web technologies.",

  github: "https://github.com/debojitdutta",
  linkedin: "https://linkedin.com/in/debojit-dutta-5871291ba",
  resume: "/resume.pdf",
  about: "I'm a computer applications student and aspiring software developer interested in building practical software and intelligent systems. My interests sit at the intersection of software development, machine learning, computer vision, and experimentation. I prefer learning by building rather than simply following tutorials.",

};

export const technologies = [
  "Python",
  "Java",
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "TensorFlow",
  "OpenCV",
  "MediaPipe",
  "Git",
  "GitHub",
];

export const projects = [
  {
    title: "AirPaint",
    category: "Compter Vision",
    description:
      "A computer-vision virtual whiteboard that lets users draw and interact with a digital canvas using hand gestures.",
    technologies: ["Python", "OpenCV", "MediaPipe", "PySide6"],
    github: "https://github.com/debojitdutta/Airpaint",
    demo: "",
    image: "/projects/airpaint.png",
    featured: true,
  },

  {
    title: "Image Background Remover AI",
    category: "Desktop Application",
    description:
      "A desktop application for removing image backgrounds with a clean graphical interface.",
    technologies: ["Python", "PySide6", "rembg", "Pillow"],
    github: "https://github.com/debojitdutta/ImageBgRemoverAI",
    demo: "",
    image: "/projects/image-bg-remover.png",
    featured: true,
  },

  {
    title: "Sentinel",
    category: "Machine Learning",
    description:
      "An experimental anomaly-detection system designed to monitor system signals and identify unusual behavior.",
    technologies: ["Python", "Machine Learning", "Anomaly Detection"],
    github: "https://github.com/debojitdutta/Sentinel",
    demo: "",
    image: "/projects/sentinel.png",
    featured: true,
  },
];

export const education = [
  {
    period: "2025 — Present",
    title: "MCA - Master of Computer Applications",
    institution: "Techno India University",
    description:
      "Studying advanced topics including deep learning, data mining, web technologies, Java, and blockchain.",
  },
  {
    period: "2022 — 2025",
    title: "BCA - Bachelor of Computer Applications",
    institution: "Gauhati University",
    description:
      "Built a foundation in programming, databases, software development, and computer science.",
  },
];