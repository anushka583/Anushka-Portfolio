import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiPlotly,
  SiStreamlit,
  SiArduino,
  SiFigma,
  SiNpm,
} from "react-icons/si";

import { AiOutlineBarChart } from "react-icons/ai";

function Skills() {
  const card =
    "bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-primary/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] transition-all duration-300";

  const skillItem =
    "flex items-center gap-2 px-4 py-2 bg-black/30 rounded-lg border border-white/10 text-sm text-gray-200 transition-all duration-300 hover:border-primary/40 hover:scale-[1.03]";

  return (
    <section id="skills" className="relative z-10 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-16">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Programming Languages */}
          <div className={card}>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className={skillItem}><FaPython className="text-yellow-400" /> Python</div>
              <div className={skillItem}><SiCplusplus className="text-blue-500" /> C++</div>
              <div className={skillItem}><FaJava className="text-orange-500" /> Java</div>
              <div className={skillItem}><SiJavascript className="text-yellow-300" /> JavaScript</div>
            </div>
          </div>

          {/* Front-End Development */}
          <div className={card}>
            <h3 className="text-lg font-semibold mb-6 text-purple-400">
              Front-End Development
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className={skillItem}><SiHtml5 className="text-orange-500" /> HTML5</div>
              <div className={skillItem}><SiCss3 className="text-blue-400" /> CSS3</div>
              <div className={skillItem}><SiTailwindcss className="text-sky-400" /> Tailwind CSS</div>
              <div className={skillItem}><FaReact className="text-cyan-400" /> React.js</div>
              <div className={skillItem}><SiNextdotjs /> Next.js</div>
            </div>
          </div>

          {/* Back-End Development */}
          <div className={card}>
            <h3 className="text-lg font-semibold mb-6 text-green-400">
              Back-End Development
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className={skillItem}><FaNodeJs className="text-green-500" /> Node.js</div>
              <div className={skillItem}><SiExpress /> Express.js</div>
              <div className={skillItem}><SiFlask /> Flask</div>
            </div>
          </div>

          {/* Databases */}
          <div className={card}>
            <h3 className="text-lg font-semibold mb-6 text-indigo-400">
              Databases
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className={skillItem}><SiMysql className="text-blue-400" /> MySQL</div>
              <div className={skillItem}><SiPostgresql className="text-indigo-500" /> PostgreSQL</div>
            </div>
          </div>

          {/* AI & Data Domains */}
          <div className={card}>
            <h3 className="text-lg font-semibold mb-6 text-pink-400">
              AI & Data Domains
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className={skillItem}>Machine Learning</div>
              <div className={skillItem}>Deep Learning</div>
              <div className={skillItem}>Natural Language Processing</div>
              <div className={skillItem}>Computer Vision</div>
              <div className={skillItem}>Data Science</div>
              <div className={skillItem}>Generative AI</div>
            </div>
          </div>

          {/* AI & Data Tools */}
          <div className={card}>
            <h3 className="text-lg font-semibold mb-6 text-red-400">
              AI & Data Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className={skillItem}><SiPytorch className="text-red-400" /> PyTorch</div>
              <div className={skillItem}><SiTensorflow className="text-orange-400" /> TensorFlow</div>
              <div className={skillItem}><SiScikitlearn className="text-blue-400" /> Scikit-learn</div>
              <div className={skillItem}><SiNumpy /> NumPy</div>
              <div className={skillItem}><SiPandas /> Pandas</div>
              <div className={skillItem}><SiOpencv /> OpenCV</div>
              <div className={skillItem}><SiPlotly className="text-pink-400" /> Plotly</div>
              <div className={skillItem}><AiOutlineBarChart className="text-yellow-300" /> Matplotlib</div>
              <div className={skillItem}><SiStreamlit className="text-red-500" /> Streamlit</div>
            </div>
          </div>

          {/* Security & Systems */}
          <div className={card}>
            <h3 className="text-lg font-semibold mb-6 text-yellow-400">
              Security & Systems
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className={skillItem}>Malware Analysis</div>
              <div className={skillItem}>PowerShell</div>
              <div className={skillItem}>Firmware Concepts</div>
              <div className={skillItem}>Real-Time Log Monitoring</div>
            </div>
          </div>

          {/* IoT & Embedded */}
          <div className={card}>
            <h3 className="text-lg font-semibold mb-6 text-teal-400">
              IoT & Embedded
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className={skillItem}><SiArduino className="text-green-500" /> Arduino</div>
              <div className={skillItem}>Arduino IDE</div>
              <div className={skillItem}>IoT Prototyping</div>
            </div>
          </div>

          {/* Developer Tools */}
          <div className={card}>
            <h3 className="text-lg font-semibold mb-6 text-gray-300">
              Developer Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className={skillItem}><FaGitAlt className="text-orange-500" /> Git</div>
              <div className={skillItem}><SiFigma className="text-pink-400" /> Figma</div>
              <div className={skillItem}>VS Code</div>
              <div className={skillItem}><SiNpm className="text-red-500" /> Npm</div>
            </div>
          </div>

        </div>

        {/* Soft Skills */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10">
            Soft <span className="text-primary">Skills</span>
          </h2>

          <div className={card}>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>Analytical Problem Solving</div>
              <div>Research-Oriented Thinking</div>
              <div>Self-Learning Agility</div>
              <div>Adaptability in Fast-Paced Learning</div>
              <div>Cross-Functional Collaboration</div>
              <div>Leadership and Clear Communication</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;