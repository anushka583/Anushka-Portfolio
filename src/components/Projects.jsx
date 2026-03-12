import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { Calendar } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

function Projects() {

  const [filter, setFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "HUMANEX - Verifying Life Beyond Pixels",
      status: "Ongoing",
      category: "AI/ML, Computer Vision, Behavioral Biometrics, Human Verification & Security",
      description: 
        "A Multi-Modal Human Authenticity Engine",
      bullets: [
        "The purpose of HUMANEX is to differentiate real humans from AI-generated entities such as deepfakes, voice clones, and automated agents.",
        "Designing a verification pipeline that analyzes biological signals including blink patterns, eye movement, and facial micro-movements using computer vision techniques.",
        "Exploring behavioral entropy modeling to detect deterministic interaction pattern often produced by AI agents.",
        "Integration of multi-modal features into a machine learning-based human authenticity scoring system.",
        "Aiming to strengthen digital trust and fraud prevention in environments vulnerable to AI impersonation, such as fintech and online communication platforms.",
      ],
      tech: ["Python", "FastAPI", "OpenCV", "MediaPipe", "Librosa", "Scikit-learn", "React", "Docker", "Kubernetes", "AWS"],
      github: "https://github.com/anushka583/HUMANEX",
    },
    {
      id: 2,
      title: "AirUI — Computer Vision Powered Touchless Human-Computer Interaction Framework",
      status: "Completed",
      category: "Computer Vision & HCI",
      description:
        "A Gesture-Based Virtual Air Interface System integrated using MediaPipe and OpenCV.",
      bullets: [
        "Developed a virtual air gesture recognition framework leveraging MediaPipe hand landmarks for touchless control.",
        "Architected a gesture-to-action abstraction layer enabling dynamic mapping of hand signals to OS-level operations.",
        "Optimized frame processing pipelines to maintain low-latency performance during continuous video inference.",
        "Explored Human-Computer Interaction principles to enhance usability and gestutre intuitiveness.",
        "Structured modular vision components for scalability and future ML-based gesture classification integration.",
      ],
      tech: ["Python", "OpenCV", "MediaPipe", "NumPy", "PyAutoGUI", "PyQt5"],
      github: "https://github.com/anushka583/gestured-based-virtual-interface",
    },
    {
      id: 3,
      title: "ThreatPulse — Live Security Log Monitoring & Behavioral Analysis System",
      status: "Completed",
      category: "Security Analytics",
      description:
        "Developed a real-time Authentication Monitoring System using Python and MySQL that detects Brute-Force and Anomalous login beahaviour through continuous Log Analysis.",
      bullets: [
        "Designed and implemented a modular log ingestion system in Python to simulate strctured authentication events in real time.",
        "Implemented brute-force detection using time-windowed analysis(GROUP BY, HAVING, threshold logic) to model authentication abuse scenarios similar to simplified SIEM rule engines.",
        "Built an interactive Streamlit dashboard to visualize event trends, failure rates, and suspicious IP activity.",
        "Structured backend components with separation of concerns between ingestion, querying, and visualization layers",
        "Integrated secure configuration management using environment variables to prevent credential exposure."
      ],
      tech: ["Python", "Streamlit", "MySQL", "Pandas"],
      github:
        "https://github.com/anushka583/real-time-cybersecurity-log-monitor",
    },
  ]

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.status === filter)

  const tabStyle =
    "px-6 py-2 rounded-full border border-white/10 text-sm transition-all duration-300"

  return (
    <section id="projects" className="relative z-10 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-10">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </ScrollReveal>

        {/* 🔹 FILTER TABS */}
        <div className="flex gap-4 mb-16">
          {["All", "Ongoing", "Completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`${tabStyle} ${
                filter === tab
                  ? "bg-primary text-white border-primary"
                  : "bg-white/5 hover:border-primary/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 🔹 PROJECT LIST */}
        <div className="space-y-20">
          {filteredProjects.map((project) => (
            <ScrollReveal key={project.id}>
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md transition-all duration-500 hover:border-primary/40 hover:shadow-xl">

                {/* Status & Category */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} />
                    {project.status}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 text-gray-300 mb-6 list-disc list-inside">
                  {project.bullets.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all duration-300 hover:scale-105"
                >
                  <FaGithub /> View Code
                </a>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects