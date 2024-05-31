import Navigation from "../Navigation Bar/Navigation";
import LandingPage from "../../components/Landing Page/LandingPage";
import "../../globals.css";
import Education from "../../components/Education/Education";
import Skillset from "../../components/Skillset/Skillset"; // Assuming you have this component
import Experiences from "../../components/Experiences/Experiences"; // Assuming you have this component
import Certifications from "../../components/Certifications/Certifications"; // Assuming you have this component
import Projects from "../../components/Projects/Projects"; // Assuming you have this component

export default function Home() {
  return (
    <main>
      <Navigation />
      <section id="gladwindev" className="section">
        <LandingPage />
      </section>
      <section id="education" className="section">
        <Education />
      </section>
      <section id="skillset" className="section">
        <Skillset />
      </section>
      <section id="experiences" className="section">
        <Experiences />
      </section>
      <section id="certifications" className="section">
        <Certifications />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>
    </main>
  );
}
