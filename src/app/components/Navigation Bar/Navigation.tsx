"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaCode,
  FaGraduationCap,
  FaTools,
  FaBriefcase,
  FaCertificate,
  FaProjectDiagram,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import "../../globals.css";

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;
  return (
    <nav
      className={`navbar navbar-expand-lg d-flex flex-row justify-content-center align-items-center justify-content-between border-bottom ${
        theme === "light" ? "border-dark" : "border-light"
      }`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{position: 'absolute'}}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(63,94,251,1)" />
              <stop offset="100%" stopColor="rgba(252,70,107,1)" />
            </linearGradient>
          </defs>
        </svg>
      <div className="container-fluid">
        <Link href="/" className="logo-link navigation-link d-flex align-items-center nav-item">
          <FaCode  className={`nav-logo me-2 ${theme === "light" ? "text-dark" : "text-light"}`} />
          <span className={`nav-text ${theme === "light" ? "text-dark" : "text-light"}`}>gladwin.dev</span>
        </Link>
        <div className="d-flex flex-row align-items-center">
          <ul className="navbar-nav d-flex flex-row align-items-center">
            <li className="nav-item mx-3">
              <Link href="/education" className="navigation-link d-flex align-items-center">
                <span class="changeColor">
                  <FaGraduationCap
                    className={`me-2 ${theme === "light" ? "text-dark" : "text-light"}`}
                  />
                </span>
                <span
                  className={`nav-text nav-icon ${theme === "light" ? "text-dark" : "text-light"}`}
                >
                  Education
                </span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/skillset" className="navigation-link d-flex align-items-center">
                <FaTools className={`me-2 ${theme === "light" ? "text-dark" : "text-light"}`} />
                <span className={`nav-text ${theme === "light" ? "text-dark" : "text-light"}`}>
                  Skillset
                </span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/experiences" className="navigation-link d-flex align-items-center">
                <FaBriefcase className={`me-2 ${theme === "light" ? "text-dark" : "text-light"}`} />
                <span className={`nav-text ${theme === "light" ? "text-dark" : "text-light"}`}>
                  Experiences
                </span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/certifications" className="navigation-link d-flex align-items-center">
                <FaCertificate
                  className={`me-2 nav-icon ${theme === "light" ? "text-dark" : "text-light"}`}
                />
                <span className={`nav-text ${theme === "light" ? "text-dark" : "text-light"}`}>
                  Certifications
                </span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/projects" className="navigation-link d-flex align-items-center">
                <FaProjectDiagram
                  className={`me-2 ${theme === "light" ? "text-dark" : "text-light"}`}
                />
                <span className={`nav-text ${theme === "light" ? "text-dark" : "text-light"}`}>
                  Projects
                </span>
              </Link>
            </li>
          </ul>
          <div className="mx-3">
            <button
              onClick={toggleTheme}
              className={`theme-button ${
                theme === "light" ? "bg-dark text-light" : "bg-light text-dark"
              } d-flex align-items-center justify-content-center p-1`}
              style={{ borderRadius: "15px" }}
            >
              {theme === "light" ? <FaMoon className="me-2"  style={{fill: 'url(#gradient)'}} /> : <FaSun className="me-2"  style={{fill: 'url(#gradient)'}} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
