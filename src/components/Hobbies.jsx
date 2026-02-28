import { Music, BookOpen, Pencil, Activity } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

function Hobbies() {
  const hobbies = [
    {
      icon: <Activity size={28} />,
      title: "Dance",
      description:
        "From classical to open-style, reconnecting with energy and rhythm. Dance has been more than just a hobby to me; it's something I've grown with over time.",
    },
    {
      icon: <Music size={28} />,
      title: "Music",
      description:
        "Listening across genres as a way to reset and reflect. Music has always been a steady companion for me.",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Reading Books",
      description:
        "I like reading when I want a break from screens, to step into stillness and let words rebuild my focus.",
    },
    {
      icon: <Pencil size={28} />,
      title: "Sketching",
      description:
        "Expressing creativity through sketching is something I do occasionally. It’s the simplest way to slow down and think visually.",
    },
  ]

  return (
    <section id="hobbies" className="py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <ScrollReveal>
          <span className="px-5 py-2 rounded-full border border-white/20 text-sm text-gray-300 inline-block mb-6">
            Beyond Coding
          </span>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Hobbies</span> & Interests
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Discover things I genuinely enjoy outside tech.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">

          {hobbies.map((hobby, index) => (
            <ScrollReveal key={index}>
              <div className="bg-[#0f172a]/80 border border-white/10 rounded-3xl p-10 backdrop-blur-md hover:-translate-y-2 transition-all duration-500">

                <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-600/20 flex items-center justify-center mb-6 text-purple-400">
                  {hobby.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {hobby.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {hobby.description}
                </p>

              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Hobbies