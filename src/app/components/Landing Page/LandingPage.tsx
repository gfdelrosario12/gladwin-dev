"use client";

import "../../globals.css";
import { FaGithub, FaLinkedin, FaMicrosoft, FaAngleDoubleDown } from "react-icons/fa";
import { SiGooglecloud, SiCredly } from "react-icons/si";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function LandingPage() {
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
    <div className="content">
      <div className="center-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0"
          height="0"
          style={{ position: "absolute" }}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(63,94,251,1)" />
              <stop offset="100%" stopColor="rgba(252,70,107,1)" />
            </linearGradient>
          </defs>
        </svg>

        <h2 className="font-lower p-1">Hello World!</h2>
        <h1 className="font-higher p-1">
          I am <span className="gradientText">Gladwin Del Rosario</span>
        </h1>
        <div className="container-fluid landing-description">
          <h2 className="font-lower p-1">
            A Computer Engineering Technology student focusing on{" "}
            <span className="gradientText">Software Development</span> and{" "}
            <span className="gradientText">Cloud Engineering</span>.
          </h2>
        </div>
        <div className="my-3">
          <a href="https://github.com/gfdelrosario12">
            <FaGithub className="fs-2 mx-2" style={{ fill: "url(#gradient)" }} />
          </a>
          <a href="https://www.linkedin.com/in/gladwindr/">
            <FaLinkedin className="fs-2 mx-2" style={{ fill: "url(#gradient)" }} />
          </a>
          <a href="https://learn.microsoft.com/en-us/users/gladwindelrosario-3313/">
            <FaMicrosoft className="fs-2 mx-2" style={{ fill: "url(#gradient)" }} />
          </a>
          <a href="https://www.cloudskillsboost.google/public_profiles/1efc5a8d-20be-4d6c-97b5-78dc7bf36fb1">
            <SiGooglecloud className="fs-2 mx-2" style={{ fill: "url(#gradient)" }} />
          </a>
          <a href="https://www.credly.com/users/gladwin-ferdz-del-rosario">
            <SiCredly className="fs-2 mx-2" style={{ fill: "url(#gradient)" }} />
          </a>
        </div>
        <div className="fs-2">
          <Link href="/#skillset">
            <FaAngleDoubleDown className={theme === "light" ? "text-dark" : "text-light"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
