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

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;