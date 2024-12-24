"use client";
import React, { useState } from "react";
import Sections from "./sections";

const AppShell = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
      <header>
        <a href="#" className="logo">
          Omair
        </a>
        <nav className="navigation">
          <a
            href="#Service"
            className={activeSection === "Service" ? "active" : ""}
          >
            Services
          </a>
          <a
            href="#Projects"
            className={activeSection === "Projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#Contact"
            className={activeSection === "Contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>
      </header>
      <section className="main">
        <div>
          <h2>
            Hello, I&apos;m Omair Waleed
            <br />
            <span>Full Stack Developer</span>
          </h2>
          <a href="#Projects" className="main-btn">
            View My Work
          </a>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/omair.waleedhamdy/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/omair-waleed-13772b20b/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </div>
      </section>
      <Sections setActiveSection={setActiveSection} />
      <footer>
        <p className="footer-title">
          Copyrights @<span>Omair Waleed</span>
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/omair.waleedhamdy/" target="_blank">
            <i className="fa-brands fa-facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/omair-waleed-13772b20b/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default AppShell;
