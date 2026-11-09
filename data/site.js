// All editable content lives here. Items marked TODO are placeholders.
export const site = {
  name: "Manish Magaju",
  role: "Software Developer",
  location: "Bhaktapur, Nepal",
  tagline: "Turning Ideas into Digital Experiences.",
  email: "your-email@example.com", // TODO: replace
  resume: "/resume.pdf", // TODO: put your resume at public/resume.pdf
  url: "https://example.com", // TODO: your deployed domain
};

export const socials = [
  { label: "GitHub", href: "https://github.com/YOUR_USERNAME", icon: "github" }, // TODO
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_USERNAME", icon: "linkedin" }, // TODO
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const about = [
  "I'm a software developer from Bhaktapur, Nepal, who enjoys building fast, accessible and well-structured web applications. [TODO: personalise this introduction]",
  "I got into web development by building small projects and learning the fundamentals first: HTML, CSS and JavaScript, then React, Next.js and the Node.js ecosystem. [TODO: edit your journey]",
  "When I hit a problem I break it into small pieces, build the simplest version that works, then refine it for clarity and performance. [TODO: edit your approach]",
];
export const interests = ["Full-stack web development", "Clean UI and design systems", "Performance and accessibility", "Learning in public"];

export const skills = [
  { group: "Frontend", icon: "layout", items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"] },
  { group: "Backend", icon: "server", items: ["Node.js", "Express.js"] },
  { group: "Database", icon: "database", items: ["MongoDB", "MySQL"] },
  { group: "Tools", icon: "wrench", items: ["Git", "GitHub", "VS Code", "Vercel"] },
];

// Leave live / github empty ("") until you have real URLs; the button is then disabled.
export const projects = [
  { title: "Proxima International Academy Website", description: "Website for an academy: programs, information pages and contact. [TODO: refine description]", tech: ["Next.js", "Tailwind CSS"], live: "", github: "", hue: "from-indigo-500/40 to-violet-500/20" },
  { title: "Quiz Application", description: "Interactive quiz app with questions, scoring and results. [TODO: refine description]", tech: ["React.js", "JavaScript"], live: "", github: "", hue: "from-sky-500/40 to-indigo-500/20" },
  { title: "Newanext Website", description: "Responsive website built with modern web tooling. [TODO: refine description]", tech: ["Next.js", "Tailwind CSS"], live: "", github: "", hue: "from-violet-500/40 to-fuchsia-500/20" },
  { title: "Personal Project", description: "Placeholder for another personal project. [TODO: replace]", tech: ["Node.js", "Express.js", "MongoDB"], live: "", github: "", hue: "from-blue-500/40 to-cyan-500/20" },
];

export const timeline = [
  { period: "[TODO: years]", title: "[TODO: Degree / Program]", place: "[TODO: Institution]", text: "Education details go here.", type: "Education" },
  { period: "[TODO: years]", title: "Web development projects", place: "Self-directed and client work", text: "Built the websites and apps listed above. [TODO: add detail]", type: "Experience" },
  { period: "[TODO: year]", title: "[TODO: Learning milestone]", place: "[TODO: Course / certification]", text: "Add a milestone, course or certification.", type: "Learning" },
];
