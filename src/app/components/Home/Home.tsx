import Navigation from "../Navigation Bar/Navigation";
import LandingPage from "../../components/Landing Page/LandingPage";
import "../../globals.css";

export default function Home() {
  return (
    <main>
      <Navigation/>
      <section id = "landing"><LandingPage/></section>
    </main>
  );
}