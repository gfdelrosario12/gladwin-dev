"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaAngleDoubleDown, FaBootstrap, FaCss3, FaHtml5, FaJava, FaReact, FaWindows } from "react-icons/fa";
import Card from "../General Components/Card";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { MdNoEncryptionGmailerrorred, MdOutlineSecurity } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";
import { PiNetworkSlashBold } from "react-icons/pi";
import Link from "next/link";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("Active");

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "fullstack":
        return (
          <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
            <Card
              title="Tech Galaxy"
              subtext="A computer and computer parts e-commerce website made through HTML/JSP, CSS, Java EE and MySQL"
              github="https://github.com"
            >
              <FaHtml5 className="fs-1" style={{ fill: "url(#gradient)" }} />
              <FaCss3 className="fs-1" style={{ fill: "url(#gradient)" }} />
              <RiJavascriptFill className="fs-1" style={{ fill: "url(#gradient)" }} />
              <FaJava className="fs-1" style={{ fill: "url(#gradient)" }} />
              <SiMysql className="fs-1" style={{ fill: "url(#gradient)" }} />
              <MdNoEncryptionGmailerrorred className="fs-1" style={{ fill: "url(#gradient)" }} />
            </Card>
          </div>
        );
      case "frontend":
        return (
          <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
            <Card
              title="Asteria Academy"
              subtext="A trial website for an online academy made through HTML, CSS and JavaScript/React with Bootstrap."
              github="https://github.com"
            >
              <FaHtml5 className="fs-1" style={{ fill: "url(#gradient)" }} />
              <FaCss3 className="fs-1" style={{ fill: "url(#gradient)" }} />
              <RiJavascriptFill className="fs-1" style={{ fill: "url(#gradient)" }} />
              <FaReact className="fs-1" style={{ fill: "url(#gradient)" }} />
              <FaBootstrap className="fs-1" style={{ fill: "url(#gradient)" }} />
            </Card>
            <Card
              title="TraiTechHive"
              subtext="A website educating about devices and digital traits made through HTML, CSS and JavaScript/React with Bootstrap."
              github="https://github.com"
            >
              <FaHtml5 className="fs-1" style={{ fill: "url(#gradient)" }} />
              <FaCss3 className="fs-1" style={{ fill: "url(#gradient)" }} />
              <RiJavascriptFill className="fs-1" style={{ fill: "url(#gradient)" }} />
              <FaReact className="fs-1" style={{ fill: "url(#gradient)" }} />
              <FaBootstrap className="fs-1" style={{ fill: "url(#gradient)" }} />
            </Card>
          </div>
        );
      case "backend":
        return <p className="fs-3 lato-regular">Work in Progress</p>;
      case "networking":
        return (
          <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
            <Card
              title="Windows Server Active Directory"
              subtext="Executed the setup of a Windows Server Active Directory, showcasing competence in Windows and Windows server operating systems, computer networking concepts and personal competencies."
              github="https://github.com"
            >
                <FaWindows className="fs-1" style={{ fill: "url(#gradient)" }} />
                <MdOutlineSecurity className="fs-1" style={{ fill: "url(#gradient)" }} />
                <TbNetwork className="fs-1" style={{ fill: "url(#gradient)" }} />
                <PiNetworkSlashBold className="fs-1" style={{ fill: "url(#gradient)" }} />
            </Card>
          </div>
        );
      case "cloud":
        return <p className="fs-3 lato-regular">Work in Progress</p>;
      default:
        return null;
    }
  };

  return (
    <div className="content">
      <h1 className="text-center my-3 font-higher">Projects</h1>
      {activeTab === "Active" && <h1 className="fs-3 my-1">Click a tab below to view projects per category.</h1>}
      <ul className="nav nav-underline d-flex flex-row flex-wrap">
        <li className="nav-item">
          <button
            className={`nav-link-tab ${activeTab === "fullstack" ? "active" : ""}`}
            onClick={() => setActiveTab("fullstack")}
          >
            <h1
              className={`fs-4 lato-regular gradientText ${
                theme === "light" ? "text-dark" : "text-light"
              }`}
            >
              Full-Stack
            </h1>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link-tab ${activeTab === "frontend" ? "active" : ""}`}
            onClick={() => setActiveTab("frontend")}
          >
            <h1
              className={`fs-4 lato-regular gradientText ${
                theme === "light" ? "text-dark" : "text-light"
              }`}
            >
              Frontend
            </h1>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link-tab ${activeTab === "backend" ? "active" : ""}`}
            onClick={() => setActiveTab("backend")}
          >
            <h1
              className={`fs-4 lato-regular gradientText ${
                theme
                === "light" ? "text-dark" : "text-light"
              }`}
            >
              Backend
            </h1>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link-tab ${activeTab === "networking" ? "active" : ""}`}
            onClick={() => setActiveTab("networking")}
          >
            <h1
              className={`fs-4 lato-regular gradientText ${
                theme === "light" ? "text-dark" : "text-light"
              }`}
            >
              Network Engineering
            </h1>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link-tab ${activeTab === "cloud" ? "active" : ""}`}
            onClick={() => setActiveTab("cloud")}
          >
            <h1
              className={`fs-4 lato-regular gradientText ${
                theme === "light" ? "text-dark" : "text-light"
              }`}
            >
              Cloud Engineering
            </h1>
          </button>
        </li>
      </ul>
      <div className="my-3">{renderContent()}</div>
      <div className="fs-2">
  <Link href="/#contact">
    <FaAngleDoubleDown className={theme === "light" ? "text-dark" : "text-light"} />
  </Link>
</div>
    </div>
  );
}
