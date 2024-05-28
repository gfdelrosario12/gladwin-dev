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
    <nav className="nav">
      <Link href="/">
        <FaHome />
        <span>Home</span>
      </Link>
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="/education">
            <FaGraduationCap />
            <span>Education</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/skillset">
            <FaTools />
            <span>Skillset</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/experiences">
            <FaBriefcase />
            <span>Experiences</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/certifications">
            <FaCertificate />
            <span>Certifications</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/projects">
            <FaProjectDiagram />
            <span>Projects</span>
          </Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className="theme-button">
        {theme === "light" ? <FaMoon /> : <FaSun />}
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}
