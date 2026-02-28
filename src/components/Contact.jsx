import { Mail, MapPin, Linkedin, Github, Instagram } from "lucide-react"

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          Let's Connect
        </h2>

        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          I'm currently open to internships, collaborations and meaningful projects. If you have something innovative in mind, 
          feel free to reach out using any of the methods below.
        </p>

        {/* Contact Cards */}
        <div className="space-y-8">

          {/* Email Card */}
          <div className="relative bg-[#0f172a]/80 
          border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-primary/40 
          hover:-translate-y-1 transition-all duration-300">

            {/* Left Accent */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-l-2xl" />

            <div className="flex items-center gap-6">

              <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center">
                <Mail className="text-purple-400" size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">anushkasarkar792@gmail.com</p>
              </div>

            </div>
          </div>

          {/* Location Card */}
          <div className="relative bg-[#0f172a]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-primary/40 transition">

            {/* Left Accent */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-l-2xl" />

            <div className="flex items-center gap-6">

              <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center">
                <MapPin className="text-purple-400" size={26} />
              </div>

              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-400">
                  Maduravoyal, Chennai, Tamil Nadu, India
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Social Section */}
        <div className="mt-16">

          <h3 className="text-2xl font-semibold mb-6">
            Connect on Social Media
          </h3>

          <div className="flex gap-6">

            <a
              href="https://www.linkedin.com/in/anushka-sarkar-8695a9334"
              target="_blank"
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600/20 transition"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://github.com/anushka583"
              target="_blank"
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600/20 transition"
            >
              <Github size={24} />
            </a>

            <a
              href="https://instagram.com/__.anushkaaaa._"
              target="_blank"
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600/20 transition"
            >
              <Instagram size={24} />
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact