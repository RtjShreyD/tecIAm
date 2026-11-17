"use client";

import { motion } from "framer-motion";
import Scene from "../3d/Scene";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
} from "lucide-react";

export default function Hero() {
  return (
    <main className="portfolio">

      {/* Navigation */}

      <nav className="navbar">
        <a href="#" className="brand">
          SD<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="mailto:shreyanshdube2@gmail.com"
          className="nav-contact"
        >
          LET'S TALK <ArrowUpRight size={14} />
        </a>
      </nav>

      {/* Hero */}

      <section className="hero">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="hero-status">
            <span className="status-dot" />
            SOFTWARE ENGINEER / SYSTEMS & AI ARCHITECT
          </div>

          <p className="hero-overline">
            ENGINEERING INTELLIGENT SYSTEMS
          </p>

          <h1>
            SHREYANSH
            <br />
            <span>DUBEY.</span>
          </h1>

          <p className="hero-description">
            Architecting intelligent systems, building
            scalable infrastructure and connecting the
            boundaries of software and hardware.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              EXPLORE MY WORK
              <ArrowUpRight size={17} />
            </a>

            <a
              href="mailto:shreyanshdube2@gmail.com"
              className="secondary-button"
            >
              <Mail size={16} />
              CONTACT ME
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/rtjshreyd"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                >
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>

            </a>

            <a
              href="mailto:shreyanshdube2@gmail.com"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        {/* 3D visualization */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
        >
          <div className="visual-orbit-glow" />

          <Scene />

          <div className="visual-caption">
            <span>01 / SYSTEM CORE</span>
            <span>INTERACTIVE 3D OBJECT</span>
          </div>

          <div className="visual-coordinate">
            28°36' N / 77°12' E
          </div>
        </motion.div>

        {/* Bottom metadata */}

        <div className="hero-bottom">
          <div>
            <span className="meta-label">EXPERIENCE</span>
            <span className="meta-value">8+ YEARS</span>
          </div>

          <div>
            <span className="meta-label">SPECIALIZATION</span>
            <span className="meta-value">
              AI · BACKEND · SYSTEMS
            </span>
          </div>

          <a href="#about" className="scroll-link">
            SCROLL TO EXPLORE
            <ArrowDown size={15} />
          </a>
        </div>

      </section>

    </main>
  );
}