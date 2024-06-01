"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Card({
  title,
  children,
  subtext,
  github,
}: {
  title: string;
  children: React.ReactNode;
  subtext: string;
  github: string;
}): JSX.Element | undefined {
const [mounted, setMounted] = useState(false);
const { theme, setTheme } = useTheme();

useEffect(() => {
    setMounted(true);
}, []);

const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
};

if (!mounted) return undefined;

  return (
    <div className={`card border-gradient mx-3 ${theme === "light" ? "text-dark" : "text-light"}`} style={{ width: "18rem", backgroundColor: "transparent" }}>
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <h6 className="card-subtitle my-2 text-body-secondary d-flex flex-row flex-wrap justify-content-center align-items-center">{children}</h6>
        <p className={`card-text ${theme === "light" ? "text-dark" : "text-light"}`}>{subtext}</p>
        <a href={github} className="gradientText normal-link fs-5">
          Project Link
        </a>
      </div>
    </div>
  );
}
