import { useState } from "react"
import {
  Award,
  ShieldCheck,
  ChevronDown,
  BrainCircuit,
  Cpu,
  Sparkles,
  Wand2,
  Bot,
  Settings2
} from "lucide-react"

function Achievements() {

  const [openMicrosoft, setOpenMicrosoft] = useState(false)
  const [openInfosys, setOpenInfosys] = useState(false)

  const card =
    "bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md mb-12 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"

  const viewBtn =
    "text-primary hover:underline text-sm transition"

  const expandable =
    "overflow-hidden transition-all duration-500 ease-in-out"

  return (
    <section id="achievements" className="relative z-10 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          Featured <span className="text-primary">Certifications</span>
        </h2>

        <p className="text-gray-400 mb-16 max-w-3xl">
          A curated selection of academic recognitions and industry-aligned certifications
          that have shaped my approach toward building AI-driven systems,
          security analytics pipelines, and scalable intelligent applications.
        </p>

        {/* Scholarship */}
        <div className={`${card} border-yellow-500/30 hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]`}>
          <div className="flex items-center gap-4 mb-4">
            <Award className="text-yellow-400" />
            <h3 className="text-2xl font-semibold">
              Infosys Foundation STEM Stars Scholarship
            </h3>
          <a href="/certificates/Scholarship.pdf" target="_blank" rel="noopener noreferer" className="text-sm text-primary hover:underline">View Certificate</a>
          </div>

          <p className="text-sm text-gray-400 mb-2">
            Infosys Foundation | 2024-2028 <br />
            Credential ID: 1081372727B4S24553
          </p>

          <p className="text-gray-300 mb-4">
            Awarded under the prestigious, Infosys Foundation STEM Stars Scholarship Program 2024-25 in recognition of academic excellence and technical potential. 
            This scholarship marked a defining milestone in my journey, reinforcing a research-oriented and systems-driven engineering mindset. 
            It strengthened my academic discipline and pushed me to be consistent.
          </p>

        </div>

        {/* Deloitte */}
        <div className={card}>
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="text-blue-400" />
            <h3 className="text-2xl font-semibold">
              Deloitte Australia — Cyber Job Simulation
            </h3>
            <a href="/certificates/Deloitte.pdf" target="_blank" rel="noopener noreferer" className="text-sm text-primary hover:underline">View Certificate</a>
          </div>

          <p className="text-sm text-gray-400 mb-2">
            Forage | Nov 2025
          </p>

          <p className="text-gray-300 mb-4">
            Completed a practical cybersecurity simulation focused on log analysis,
            anomaly detection, and web security inspired by real consulting scenarios.
            This experience directly influenced the architecture and direction of my project 'ThreatPulse', shaping its detection logic and system design.
          </p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-3 text-white">Key Takeaways:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Log pattern recognition and anomaly reasoning</li>
              <li>Web vulnerability evalution fundamentals</li>
              <li>Security incident interpretation mindset</li>
              <li>Structured mitigation thinking</li>
            </ul>
          </div>
        </div>

        {/* Microsoft */}
        <div className={card}>
          <button
            onClick={() => setOpenMicrosoft(!openMicrosoft)}
            className="flex items-center justify-between w-full group"
          >
            <h3 className="text-2xl font-semibold">
              Microsoft Certifications (Oct 2025)
            </h3>

            <ChevronDown
              className={`transition-transform duration-300 ${
                openMicrosoft ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`${expandable} ${
              openMicrosoft ? "max-h-[500px] opacity-100 mt-8" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-l-2 border-primary pl-6 space-y-8">

              <div>
                <h4 className="font-semibold">
                  Extract Data from Forms with Azure Document Intelligence
                </h4>
                <a
                  href="/certificates/microsoft1.pdf"
                  target="_blank"
                  className={viewBtn}
                >
                  View Certificate
                </a>
              </div>

              <div>
                <h4 className="font-semibold">
                  Build a Document Intelligence Custom Skill for Azure AI Search
                </h4>
                <a
                  href="/certificates/microsoft2.pdf"
                  target="_blank"
                  className={viewBtn}
                >
                  View Certificate
                </a>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3 text-white">Impact on my work:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary"></span>
                    <span>Improved understanding of AI indexing pipelines.</span>
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary"></span>
                    <span>Better appreciation of applied enterprise AI systems.</span>
                    <span className="w-2 h-2 mt-2 rounded-full bg-primary"></span>
                    <span>Stronger foundation in practical AI deployment workflows.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Infosys Springboard */}
        <div className={card}>
          <button
            onClick={() => setOpenInfosys(!openInfosys)}
            className="flex items-center justify-between w-full"
          >
            <h3 className="text-2xl font-semibold">
              Infosys Springboard — AI & Engineering Track (Sep–Oct 2025)
            </h3>

            <ChevronDown
              className={`transition-transform duration-300 ${
                openInfosys ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`${expandable} ${
              openInfosys ? "max-h-[800px] opacity-100 mt-8" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-l-2 border-primary pl-6 space-y-8">
              <p className="text-gray-300 leading-relaxed">
                The concepts from these modules directly contribute to my ongoing and upcoming projects, especially in Computer Vision, Generative AI, and ML Systems.
              </p>

              <div className="flex items-center gap-3">
                <BrainCircuit className="text-purple-400" />
                <span>Introduction to Natural Language Processing(NLP)  (Sep 2025)</span>
                <a href="/certificates/NLP.pdf" target="_blank" className={viewBtn}>
                  View
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Cpu className="text-blue-400" />
                <span>Deep Learning for Developers (Oct 2025)</span>
                <a href="/certificates/DeepLearning.pdf" target="_blank" className={viewBtn}>
                  View
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Sparkles className="text-yellow-400" />
                <span>OpenAI Generative Pre-trained Transformer 3(GPT-3) for Developers (Oct 2025)</span>
                <a href="/certificates/GPT3.pdf" target="_blank" className={viewBtn}>
                  View
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Wand2 className="text-pink-400" />
                <span>Prompt Engineering (Oct 2025)</span>
                <a href="/certificates/Prompt.pdf" target="_blank" className={viewBtn}>
                  View
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Bot className="text-green-400" />
                <span>Generative Models for Developers (Oct 2025)</span>
                <a href="/certificates/GenModel.pdf" target="_blank" className={viewBtn}>
                  View
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Settings2 className="text-indigo-400" />
                <span>Introduction to OpenAI GPT Models (Oct 2025)</span>
                <a href="/certificates/OpenAI.pdf" target="_blank" className={viewBtn}>
                  View
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Achievements