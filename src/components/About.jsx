import ScrollReveal from "./ScrollReveal"

import { FiMail, FiMapPin} from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative z-10 min-h-screen flex items-center px-6 py-24"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section Label */}
        <ScrollReveal>
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            About Me
          </div>
        </ScrollReveal>

        {/* Paragraph 1 */}
        <ScrollReveal>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a <span className=" text-primary font-medium">B.Tech Computer 
              Science and Engineering student specializing
             in Cyber Security(CS)</span>, driven by curiosity about how intelligent
             systems actually work beyond the surface. My primary focus is on 
             Computer Vision, AI-driven applications, and building data-backed systems 
             that solve practical problems. I enjoy turning experimental ideas into working
             solutions, from model design to optimizing workflows, and integrating them into scalable systems.
          </p>
        </ScrollReveal>

        {/* Paragraph 2 */}
        <ScrollReveal>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am also a recipient of the <span className="text-primary font-medium">
            Infosys Foundation STEM Stars Scholarship</span>, awarded in recognition of 
            academic merit and potential in Science and technology. This recognition has 
            strengthened my commitment to research-oriented problem solving and 
            building secure, efficient, and thoughtfully engineered solutions.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 space-y-4">
            <a href="mailto:anushkasarkar792@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-primary transition">
              <FiMail className="text-xl text-primary" />
              <span>anushkasarkar792@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-gray-300">
              <FiMapPin className="text-xl text-primary" />
              <span>Chennai, Tamil Nadu</span>
            </div>
            <a href="https://linkedin.com/in/anushka-sarkar-8695a9334" target="_blank" rel="moopener noreferer" className="flex items-center gap-3 text-gray-300 hover:text-primary transition">
              <FaLinkedin className="text-xl text-primary" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

export default About