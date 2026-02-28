import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Achievements from "./components/Achievements"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ParticlesBackground from "./components/ParticlesBackground"
import Hobbies from "./components/Hobbies"
import CTA from "./components/CTA"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <div className="relative min-h-screen bg-[#0b1120] text-white">
      <ParticlesBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        <Hobbies />
        <Contact />
        <CTA/>
        <ScrollToTop />
        <Footer />
      </div>

    </div>
  )
}

export default App