import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TrivNestGallery from "./components/TrivNestGallery";
import TechStack from "./components/TechStack";
import GitHubStats from "./components/GitHubStats";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <TechStack />
      <Experience />
      <Projects />
      <TrivNestGallery />
      <Achievements />
      <Certificates />
      <GitHubStats />
      <Contact />
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;