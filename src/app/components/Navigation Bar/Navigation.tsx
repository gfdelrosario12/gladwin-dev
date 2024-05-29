"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaHome,
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
    <nav className={`navbar p-4 navbar-expand-lg d-flex flex-row justify-content-center align-items-center justify-content-between border-bottom ${theme === "light" ? "border-dark" : "border-light"}`}>
      <div className="container-fluid">
        <Link href="/" className="logo-link navigation-link d-flex align-items-center">
          <FaHome className={`nav-logo me-2 ${theme === "light" ? "text-dark" : "text-light"}`} />
          <span className={`nav-text ${theme === "light" ? "text-dark" : "text-light"}`}>Home</span>
        </Link>
        <div className="d-flex flex-row align-items-center">
          <ul className="navbar-nav d-flex flex-row align-items-center">
            <li className="nav-item mx-3">
              <Link href="/education" className="navigation-link d-flex align-items-center">
                <FaGraduationCap className={`me-2 ${theme === "light" ? "text-dark" : "text-light"}`} />
                <span className={`nav-text ${theme === "light" ? "text-dark" : "text-light"}`}>Education</span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/skillset" className="navigation-link d-flex align-items-center">
                <FaTools className={`me-2 ${theme === "light" ? "text-dark" : "text-light"}`} />
                <span className={`nav-text ${theme === "light" ? "text-dark" : "text-light"}`}>Skillset</span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/experiences" className="navigation-link d-flex align-items-center">
                <FaBriefcase className={`me-2 ${theme === "light" ? "text-dark" : "text-light"}`} />
                <span className={`nav-text ${theme === "light" ? "text-dark" : "text-light"}`}>Experiences</span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/certifications" className="navigation-link d-flex align-items-center">
                <FaCertificate className={`me-2 ${theme === "light" ? "text-dark" : "text-light"}`} />
                <span className={`nav-text ${theme === "light" ? "text-dark" : "text-light"}`}>Certifications</span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/projects" className="navigation-link d-flex align-items-center">
                <FaProjectDiagram className={`me-2 ${theme === "light" ? "text-dark" : "text-light"}`} />
                <span className={`nav-text ${theme === "light" ? "text-dark" : "text-light"}`}>Projects</span>
              </Link>
            </li>
          </ul>
          <div className="mx-3">
            <button onClick={toggleTheme} className={`theme-button ${theme === "light" ? "bg-dark text-light" : "bg-light text-dark"} d-flex align-items-center justify-content-center p-1`} style={{ borderRadius: "15px" }}>
              {theme === "light" ? <FaMoon className="me-2" /> : <FaSun className="me-2" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
