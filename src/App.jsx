import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TrivNestGallery from "./components/TrivNestGallery";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
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
      <Footer />
    </div>
  );
}

export default App;