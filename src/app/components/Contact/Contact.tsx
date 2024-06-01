"use client";

import { SiGmail } from "react-icons/si";
import { FaAngleDoubleUp, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Contac() {
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
      <h1 className="text-center my-3 font-higher">Reach Me At</h1>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center my-3">
        <a href="mailto:webmaster@example.com">
          <div className="d-flex flex-column justify-content-center align-items-center mx-3 normal-link">
            <SiGmail className="fs-1" style={{ fill: "url(#gradient)" }} />
            <p className="fs-5 my-1 text-center lato-regular fw-bold gradientText no-underline">
              GMAIL
            </p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/gladwindr/">
          <div className="d-flex flex-column justify-content-center align-items-center mx-3 normal-link">
            <FaLinkedin className="fs-1" style={{ fill: "url(#gradient)" }} />
            <p className="fs-5 my-1 text-center lato-regular fw-bold gradientText no-underline">
              LinkedIn
            </p>
          </div>
        </a>
      </div>
      <div className="fs-2 my-3">
        <Link href="/">
          <FaAngleDoubleUp className={theme === "light" ? "text-dark" : "text-light"} />
        </Link>
      </div>
    </div>
  );
}
