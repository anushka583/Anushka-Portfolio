import { useState, useEffect } from "react"

function Hero() {
  const roles = [
    "Computer Vision",
    "Autonomous & Robotics Applications",
    "AI & Data-Driven Engineering",
    "Cybersecurity",
    "NLP & Deep Learning"
  ]

  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 90

    const timeout = setTimeout(() => {
      setText(prev =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      )

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center
     px-6 pt-28 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        {/* Hello */}
        <p className="text-sm md:text-base text-gray-600 font-bold mb-2 tracking-wide">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Anushka Sarkar<span className="text-primary"></span>
        </h1>

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Open to Internship Roles
        </div>

        {/* Typewriter Role */}
        <div className="h-12 mb-8 flex justify-center items-center">
          <h2 className="text-2xl md:text-3xl text-accent font-medium">
            {text}
            <span className="border-r-2 border-accent ml-1 animate-pulse"></span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
          BTech CSE undergrad building intelligent systems that integrate perception, autonomy,
          and security — from computer vision interfaces to scalable,
          data-driven AI solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#contact"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition"
          >
            Get In Touch
          </a>

          <a
            href="#projects"
            className="px-8 py-3 rounded-xl border border-gray-500 text-gray-300 hover:border-white hover:text-white transition"
          >
            View Projects
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero