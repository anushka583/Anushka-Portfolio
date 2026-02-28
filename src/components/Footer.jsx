import { Github, Linkedin, Mail } from "lucide-react"

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold">
            Anushka Sarkar<span className="text-primary"></span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Building intelligent systems at the intersection of 
            Computer Vision, AI and Cybersecurity.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#about" className="hover:text-primary transition">About</a></li>
            <li><a href="#education" className=" hover:text-primary transition">Education</a></li>
            <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
            <li><a href="#achievements" className="hover:text-primary transition">Achievements and Certificates</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex gap-4">
            <a href="https://github.com/anushka583"
               target="_blank"
               className="p-3 rounded-full bg-white/5 hover:bg-primary/20 transition">
              <Github size={18} />
            </a>

            <a href="https://linkedin.com/in/anushka-sarkar-8695a9334"
               target="_blank"
               className="p-3 rounded-full bg-white/5 hover:bg-primary/20 transition">
              <Linkedin size={18} />
            </a>

            <a href="mailto:anushkasarkar792@gmail.com"
               className="p-3 rounded-full bg-white/5 hover:bg-primary/20 transition">
              <Mail size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Anushka Sarkar. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer