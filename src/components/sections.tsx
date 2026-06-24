"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  ShoppingBag,
  Coins,
  Dumbbell,
  Smartphone,
  Leaf,
  MapPin,
  LayoutDashboard,
  Clapperboard,
  Users,
  FileText,
  Zap,
  ShieldCheck,
  Scale,
  type LucideIcon,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: "web" | "mobile" | "saas";
  link?: string;
  dashboardLink?: string;
  videoFile?: string;
  gradient: string;
  featured?: boolean;
}

interface Cert {
  title: string;
  issuer: string;
  year: string;
  icon: string;
  verifyUrl?: string;
  color: string;
}

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  current?: boolean;
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const projects: Project[] = [
  {
    id: 1,
    title: "Family Store",
    description:
      "Egyptian e-commerce platform specializing in cosmetics and personal care products. Features 100% authentic brand-certified products, fast domestic shipping, 7-day returns, and secure encrypted payments.",
    tags: ["Next.js", "E-commerce", "React", "TypeScript"],
    category: "web",
    link: "https://www.family-onlinestore.com/",
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    featured: true,
  },
  {
    id: 2,
    title: "Mohra Gold",
    description:
      "Gold investment platform offering certified gold bars and coins with insured home delivery throughout Egypt. Streamlined 3-step purchase flow with secure payment processing and affiliate program.",
    tags: ["Next.js", "Fintech", "React", "E-commerce"],
    category: "web",
    link: "https://www.mohra-gold.com",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    featured: true,
  },
  {
    id: 3,
    title: "CoachPilot",
    description:
      "AI-powered all-in-one platform for online fitness coaches. Automates meal plans, workout programs, client management, and progress check-ins via an AI Copilot that understands natural language.",
    tags: ["Next.js", "AI", "SaaS", "Node.js", "TypeScript"],
    category: "saas",
    link: "https://www.coachplt.com",
    dashboardLink: "https://dashboard.coachplt.com/dashboard",
    gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    featured: true,
  },
  {
    id: 4,
    title: "GigSwap",
    description:
      "Cross-platform mobile app with secure Supabase authentication (refresh tokens + secure storage), real-time chat via WebSockets, and smooth integration between app components.",
    tags: ["React Native", "Supabase", "WebSockets", "Expo"],
    category: "mobile",
    videoFile: "gigswap.mp4",
    gradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
    featured: true,
  },
  {
    id: 5,
    title: "Gisr El Khalil",
    description:
      "Professional multilingual website for a global agricultural exports firm based in Alexandria. Showcases premium fresh produce (fruits, vegetables, legumes) exported to Africa, Europe, and Asia.",
    tags: ["Next.js", "UI/UX", "Multilingual", "SEO"],
    category: "web",
    link: "https://www.gisrelkhalil.com/en",
    gradient: "linear-gradient(135deg, #84cc16 0%, #4d7c0f 100%)",
    featured: true,
  },
  {
    id: 6,
    title: "Around App",
    description:
      "All-in-one mobile platform for studios and clients to manage product and service transactions and bookings with an advanced feature set.",
    tags: ["React Native", "Expo", "Redux", "Node.js"],
    category: "mobile",
    videoFile: "Around.mp4",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
  },
  {
    id: 7,
    title: "Around Admin Dashboard",
    description:
      "Powerful admin panel managing user accounts, bookings, orders, and push notifications to ensure smooth platform operations.",
    tags: ["React", "Node.js", "Dashboard"],
    category: "web",
    videoFile: "RecordingAroundAdmin.mp4",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
  },
  {
    id: 8,
    title: "Tantt App",
    description:
      "Connects professionals with industry experts for knowledge sharing, consultations, and short-form construction videos. Real-time chat in production.",
    tags: ["React Native", "Expo", "WebSockets"],
    category: "mobile",
    videoFile: "Tantt.mp4",
    gradient: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
  },
  {
    id: 9,
    title: "Wynt",
    description:
      "AI-powered HR recruitment platform where candidates upload CVs to auto-extract skills, and companies use AI to match and score candidates for job openings.",
    tags: ["Next.js", "tRPC", "AI", "WebSockets", "Ant Design"],
    category: "saas",
    videoFile: "wynt.mp4",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
  },
  {
    id: 10,
    title: "CV Builder",
    description:
      "AI-powered CV generation platform parsing and evaluating resumes via OpenAI and LangChain, with automated PDF export through headless Chromium.",
    tags: ["Next.js", "OpenAI", "LangChain", "Chromium"],
    category: "saas",
    gradient: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)",
  },
  {
    id: 11,
    title: "Lumine",
    description:
      "B2C SaaS platform — upload documents and instantly receive a REST endpoint for natural language queries, powered by OCR, RAG pipeline, and Upstash async queues.",
    tags: ["Next.js", "Node.js", "Upstash", "OCR", "RAG"],
    category: "saas",
    gradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
  },
  {
    id: 12,
    title: "Full Stack Auth Module",
    description:
      "JWT-based auth system with access + refresh tokens in HTTP-only cookies, bcrypt hashing, auto token refresh, and strict CORS — built with Next.js and NestJS.",
    tags: ["Next.js", "NestJS", "JWT", "Security"],
    category: "web",
    link: "https://auth-module-mu.vercel.app/",
    gradient: "linear-gradient(135deg, #64748b 0%, #334155 100%)",
  },
  {
    id: 13,
    title: "Legalzard",
    description:
      "Mobile app providing a database of software licenses (MIT, Apache, GPL) with a policy generator for Privacy Policies, Terms & Conditions, and software license documents.",
    tags: ["React Native", "APIs", "Legal Tech"],
    category: "mobile",
    gradient: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)",
  },
];

const projectIcons: Record<number, LucideIcon> = {
  1: ShoppingBag,
  2: Coins,
  3: Dumbbell,
  4: Smartphone,
  5: Leaf,
  6: MapPin,
  7: LayoutDashboard,
  8: Clapperboard,
  9: Users,
  10: FileText,
  11: Zap,
  12: ShieldCheck,
  13: Scale,
};

const experience: Job[] = [
  {
    company: "Ejada",
    role: "Software Developer",
    period: "Aug 2024 – Present",
    location: "Riyadh, Saudi Arabia",
    current: true,
    highlights: [
      "Designed and maintained integration solutions using IBM DataPower appliances",
      "Implemented secure and scalable architectures for Al Rajhi Bank",
      "Collaborated across teams to manage international transactions seamlessly",
      "Enhanced system reliability through web APIs and cloud deployment",
    ],
  },
  {
    company: "Ayvo",
    role: "Full Stack Developer (Mobile & Web)",
    period: "Jan 2024 – Aug 2024",
    location: "Remote",
    highlights: [
      "Built Wynt HR platform using Next.js, tRPC, React Query, and real-time WebSocket notifications",
      "Developed Tantt React Native app with real-time chat, shipped to production",
    ],
  },
  {
    company: "Different Tech",
    role: "Full Stack Developer (Mobile & Web)",
    period: "Jan 2023 – Jan 2024",
    location: "Remote",
    highlights: [
      "Built Around cross-platform app (React Native Expo) with Redux state management",
      "Designed Around Admin panel with React frontend and Node.js backend",
    ],
  },
  {
    company: "Synapse Analytics",
    role: "React Native Developer Intern",
    period: "Jul 2023 – Oct 2023",
    location: "Cairo, Egypt",
    highlights: [
      "Engineered mobile version of Azka Vision AI analytics + live streaming app",
      "Integrated react-native-chart-kit for dynamic analytics dashboards",
    ],
  },
  {
    company: "Dowell Research UK",
    role: "Front-End Developer",
    period: "Dec 2022 – Aug 2023",
    location: "Remote",
    highlights: [
      "Developed Legalzard React Native app for generating software licenses and legal policies",
      "Built web version using React and Tailwind CSS",
    ],
  },
];

const skills: Record<string, string[]> = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux",
    "React Query",
    "tRPC",
    "Ant Design",
  ],
  Backend: [
    "Node.js (Express)",
    "NestJS",
    "REST APIs",
    "WebSockets",
    "Prisma ORM",
    "IBM DataPower",
  ],
  Mobile: ["React Native", "Expo"],
  Database: ["PostgreSQL", "MongoDB"],
  "Cloud & Tools": ["AWS (S3, EC2, Lambda)", "Git", "GitHub", "Postman"],
};

const certifications: Cert[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    icon: "☁️",
    verifyUrl:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/874697648db442d097a70aba73648d07",
    color: "#f97316",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: "🏗️",
    color: "#f97316",
  },
  {
    title: "Advanced Full Stack Web Development",
    issuer: "Udacity",
    year: "2023",
    icon: "🚀",
    color: "#02b3e4",
  },
  {
    title: "React Development & Redux",
    issuer: "Udacity",
    year: "2022",
    icon: "⚛️",
    color: "#61dafb",
  },
  {
    title: "Front-End Web Development",
    issuer: "Udacity",
    year: "2022",
    icon: "💻",
    color: "#38bdf8",
  },
  {
    title: "The Ultimate SEO Training 2025",
    issuer: "Udemy",
    year: "2025",
    icon: "🔍",
    verifyUrl:
      "https://www.udemy.com/certificate/UC-eaef2eca-bad0-44d8-84a6-09fe5d17a039/",
    color: "#a435f0",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University",
    year: "2022",
    icon: "🤖",
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/verify/PYD5K7GMFWQK",
    color: "#0056d2",
  },
];

const filterLabels: { key: string; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "saas", label: "SaaS" },
];

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function VideoModal({
  file,
  title,
  onClose,
}: {
  file: string;
  title: string;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleClose = () => {
    videoRef.current?.pause();
    onClose();
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="modal-box">
        <h3 className="modal-title">{title}</h3>
        <button
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close video"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <video
            ref={videoRef}
            src={`/videos/${file}`}
            controls
            autoPlay
            loop
            muted
            style={{
              maxHeight: "520px",
              width:
                title === "Around Admin Dashboard" || title === "Wynt"
                  ? "100%"
                  : "auto",
              borderRadius: "12px",
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onVideoClick,
}: {
  project: Project;
  onVideoClick: (file: string, title: string) => void;
}) {
  const Icon = projectIcons[project.id];

  return (
    <div
      className="glass-card"
      style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
    >
      {/* Gradient header */}
      <div
        style={{
          height: "150px",
          position: "relative",
          flexShrink: 0,
          background: project.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* dot-grid overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* large ghost icon behind */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: "-12px",
            bottom: "-12px",
            opacity: 0.12,
          }}
        >
          {Icon && <Icon size={110} color="#fff" strokeWidth={1.2} />}
        </div>
        {/* centred main icon */}
        <div
          style={{
            position: "relative",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(6px)",
            borderRadius: "16px",
            padding: "14px",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {Icon && <Icon size={32} color="rgba(255,255,255,0.95)" strokeWidth={1.6} />}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "rgba(255,255,255,0.95)",
              padding: "3px 10px",
              borderRadius: "100px",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.8px",
              backdropFilter: "blur(4px)",
            }}
          >
            FEATURED
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "10px",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            marginBottom: "16px",
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "9px 18px", fontSize: "0.85rem" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Visit Site
            </a>
          )}
          {project.dashboardLink && (
            <a
              href={project.dashboardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: "7px 14px", fontSize: "0.85rem" }}
            >
              Dashboard
            </a>
          )}
          {project.videoFile && (
            <button
              className="btn-secondary clickable"
              style={{ padding: "7px 14px", fontSize: "0.85rem" }}
              onClick={() => onVideoClick(project.videoFile!, project.title)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Demo
            </button>
          )}
          {!project.link && !project.videoFile && !project.dashboardLink && (
            <span
              style={{
                color: "var(--text-muted)",
                fontSize: "0.82rem",
                alignSelf: "center",
              }}
            >
              Private / Enterprise
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Sections component
───────────────────────────────────────────── */
const Sections = ({
  setActiveSection,
}: {
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modal, setModal] = useState<{ file: string; title: string } | null>(
    null
  );

  const sectionIds = ["about", "experience", "projects", "certifications", "contact"];
  useEffect(() => {
    const onScroll = () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const { top, height } = el.getBoundingClientRect();
        if (top <= 120 && top >= -height + 120) {
          setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {modal && (
        <VideoModal
          file={modal.file}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}

      {/* ── About ── */}
      <section id="about" style={{ background: "var(--bg-secondary)" }}>
        <div className="portfolio-section">
          <div className="section-header">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Who I <span>Am</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                I&apos;m a Full Stack Developer from Alexandria, Egypt with a
                B.Eng. in Computer & Communications Engineering (GPA 3.65/4.0)
                from Alexandria University.
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "28px",
                }}
              >
                I specialise in building production-ready web and mobile
                applications — from AI-powered SaaS platforms to enterprise
                integration solutions. I care deeply about clean architecture,
                great UX, and writing code that scales.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="mailto:omairwaleed17@gmail.com"
                  className="btn-primary"
                >
                  Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/omair-waleed-13772b20b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              {[
                { num: "3+", label: "Years Experience" },
                { num: "5+", label: "Companies Worked" },
                { num: "13+", label: "Projects Built" },
                { num: "2", label: "Countries Employed" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass-card"
                  style={{ padding: "28px 24px", textAlign: "center" }}
                >
                  <div className="stat-number">{s.num}</div>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.88rem",
                      marginTop: "8px",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" style={{ background: "var(--bg-primary)" }}>
        <div className="portfolio-section">
          <div className="section-header">
            <span className="section-label">Career</span>
            <h2 className="section-title">
              Work <span>Experience</span>
            </h2>
          </div>

          <div
            style={{ maxWidth: "800px", margin: "0 auto" }}
            className="timeline"
          >
            {experience.map((job) => (
              <div
                key={job.company + job.period}
                className={`timeline-item${job.current ? " current" : ""}`}
              >
                <div
                  className="glass-card"
                  style={{ padding: "28px 32px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {job.company}
                    </h3>
                    {job.current && (
                      <span
                        className="tag"
                        style={{ fontSize: "0.72rem" }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      color: "var(--accent)",
                      fontWeight: 600,
                      fontSize: "0.93rem",
                      marginBottom: "4px",
                    }}
                  >
                    {job.role}
                  </p>

                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.83rem",
                      marginBottom: "16px",
                    }}
                  >
                    {job.period} · {job.location}
                  </p>

                  <ul style={{ paddingLeft: "0", listStyle: "none" }}>
                    {job.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                          marginBottom: "8px",
                          paddingLeft: "18px",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "var(--accent)",
                            fontWeight: 700,
                          }}
                        >
                          ›
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div style={{ marginTop: "80px" }}>
            <div className="section-header" style={{ marginBottom: "40px" }}>
              <span className="section-label">Expertise</span>
              <h2 className="section-title">
                Tech <span>Skills</span>
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="glass-card"
                  style={{ padding: "24px" }}
                >
                  <h4
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--accent)",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                    }}
                  >
                    {category}
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {items.map((s) => (
                      <span key={s} className="skill-pill">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" style={{ background: "var(--bg-secondary)" }}>
        <div className="portfolio-section">
          <div className="section-header">
            <span className="section-label">Work</span>
            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>
            <p className="section-description">
              A selection of web, mobile, and SaaS products I&apos;ve designed
              and built — ranging from AI platforms to e-commerce and enterprise
              tools.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="filter-tabs">
            {filterLabels.map((f) => (
              <button
                key={f.key}
                className={`filter-tab${activeFilter === f.key ? " active" : ""}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onVideoClick={(file, title) => setModal({ file, title })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" style={{ background: "var(--bg-primary)" }}>
        <div className="portfolio-section">
          <div className="section-header">
            <span className="section-label">Credentials</span>
            <h2 className="section-title">
              Licenses & <span>Certifications</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass-card"
                style={{ padding: "28px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    className="cert-badge"
                    style={{
                      background: `${cert.color}18`,
                      border: `1px solid ${cert.color}30`,
                    }}
                  >
                    {cert.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.98rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "4px",
                        lineHeight: 1.3,
                      }}
                    >
                      {cert.title}
                    </h4>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.83rem",
                        marginBottom: "12px",
                      }}
                    >
                      {cert.issuer} · {cert.year}
                    </p>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          color: cert.color,
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "0.75")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Verify Credential
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AWS badge highlight */}
          <div
            style={{
              marginTop: "48px",
              background:
                "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0.02) 100%)",
              border: "1px solid rgba(249,115,22,0.2)",
              borderRadius: "16px",
              padding: "32px",
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ☁️
            </div>
            <div style={{ flex: 1, minWidth: "220px" }}>
              <p
                style={{
                  color: "#f97316",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                AWS Certified
              </p>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                Cloud Practitioner
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginBottom: "16px",
                }}
              >
                Issued by Amazon Web Services · 2024 · Credential verified
              </p>
              <a
                href="https://cp.certmetrics.com/amazon/en/public/verify/credential/874697648db442d097a70aba73648d07"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: "#f97316",
                  padding: "10px 22px",
                  fontSize: "0.88rem",
                }}
              >
                Verify on AWS →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{ background: "var(--bg-secondary)" }}>
        <div className="portfolio-section">
          <div className="section-header">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Let&apos;s <span>Work Together</span>
            </h2>
            <p className="section-description">
              I&apos;m always open to new opportunities, collaborations, and
              interesting projects. Drop me a message!
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              maxWidth: "860px",
              margin: "0 auto",
            }}
          >
            {[
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "Email",
                value: "omairwaleed17@gmail.com",
                href: "mailto:omairwaleed17@gmail.com",
              },
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.46 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.38 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                label: "Phone (Egypt)",
                value: "+20 111 760 0220",
                href: "tel:+201117600220",
              },
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.46 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.38 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                label: "Phone (Saudi)",
                value: "+966 599 264 674",
                href: "tel:+966599264674",
              },
              {
                icon: (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
                label: "LinkedIn",
                value: "omair-waleed",
                href: "https://www.linkedin.com/in/omair-waleed-13772b20b/",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="glass-card"
                style={{
                  padding: "28px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                      wordBreak: "break-all",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
