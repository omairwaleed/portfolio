"use client";
import React, { useEffect, useState } from "react";
import Sections from "./sections";

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const AppShell = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Navbar ── */}
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            Omair<span>.</span>
          </a>

          {/* Desktop nav */}
          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={activeSection === l.label ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              style={{
                transform: menuOpen
                  ? "rotate(45deg) translate(5px,5px)"
                  : "none",
              }}
            />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px,-5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1a2744 50%, #0f172a 100%)",
        }}
      >
        {/* dot-grid background */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(34,197,94,0.12) 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* green glow blob */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {/* Left – text */}
          <div style={{ flex: "1 1 340px", minWidth: 0 }}>
            <p
              style={{
                color: "var(--accent)",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Hello, I&apos;m
            </p>

            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1.08,
                marginBottom: "14px",
                letterSpacing: "-1.5px",
              }}
            >
              Omair Waleed
            </h1>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.2rem, 3vw, 1.9rem)",
                fontWeight: 500,
                color: "var(--accent)",
                marginBottom: "20px",
                letterSpacing: "-0.5px",
              }}
            >
              Full Stack Developer
            </h2>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                maxWidth: "520px",
                marginBottom: "36px",
              }}
            >
              3+ years building production-grade web and mobile applications.
              Currently at{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                Ejada
              </span>{" "}
              engineering enterprise integration solutions for Al&nbsp;Rajhi Bank.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "36px",
              }}
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <a
                href="https://www.linkedin.com/in/omair-waleed-13772b20b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={{
                  color: "var(--text-muted)",
                  transition: "color 0.2s",
                  display: "flex",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/omairwaleed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{
                  color: "var(--text-muted)",
                  transition: "color 0.2s",
                  display: "flex",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <GitHubIcon />
              </a>

            </div>
          </div>

          {/* Right – photo */}
          <div
            style={{ flexShrink: 0, position: "relative" }}
          >
            {/* gradient ring */}
            <div
              style={{
                width: "clamp(260px, 30vw, 340px)",
                height: "clamp(260px, 30vw, 340px)",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #22c55e 0%, #38bdf8 50%, #22c55e 100%)",
                padding: "3px",
                animation: "float 4s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "var(--bg-secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/omair.jpg"
                  alt="Omair Waleed"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML =
                        '<span style="font-family:Space Grotesk,sans-serif;font-size:4rem;font-weight:700;color:#22c55e">OW</span>';
                    }
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "var(--text-muted)",
            fontSize: "0.75rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <span>Scroll</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ animation: "float 1.5s ease-in-out infinite" }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      <Sections setActiveSection={setActiveSection} />

      {/* ── Footer ── */}
      <footer
        style={{
          background: "#080d17",
          borderTop: "1px solid var(--border)",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.88rem",
          }}
        >
          © 2025{" "}
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>
            Omair Waleed
          </span>
          . Built with Next.js &amp; passion.
        </p>
      </footer>
    </>
  );
};

export default AppShell;
