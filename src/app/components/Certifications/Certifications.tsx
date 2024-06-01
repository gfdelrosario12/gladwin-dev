"use client";

import { FaAngleDoubleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Certifications() {
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
      <h1 className="text-center my-3 font-higher">Certifications</h1>
      <div className="fs-2">
        <ul>
          <li>
            Technical Education and Skills Development Authority:{" "}
            <span className="gradientText">Computer Systems Servicing NCII</span>
          </li>
        </ul>
      </div>
      <div className="fs-2">
        <Link href="/#projects">
          <FaAngleDoubleDown className={theme === "light" ? "text-dark" : "text-light"} />
        </Link>
      </div>
    </div>
  );
}
