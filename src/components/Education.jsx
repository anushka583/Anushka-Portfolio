import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

import mgrLogo from "../assets/mgr.jpeg";
import dpsLogo from "../assets/dps.jpg";
import acsLogo from "../assets/acs.jpg";

const EducationCard = ({ logo, institute, degree, stream, date, location }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-md border border-white/10 
                 rounded-2xl p-6 shadow-xl hover:shadow-2xl 
                 transition-all duration-300"
    >
      <div className="flex items-start gap-4">

        {/* Logo */}
        <div className="w-14 h-14 bg-white/10 rounded-xl 
                        flex items-center justify-center p-2 flex-shrink-0">
          <img
            src={logo}
            alt={institute}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="flex-1">

          <h3 className="text-lg font-semibold text-white">
            {institute}
          </h3>

          <p className="text-sm mt-1 text-gray-300">
            {degree}
          </p>

          {stream && (
            <p className="text-sm text-blue-400 mt-1">
              {stream}
            </p>
          )}

          {/* Date + Location */}
          <div className="flex flex-wrap gap-6 mt-4 text-xs text-gray-400">

            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-blue-400" />
              <span>{date}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-blue-400" />
              <span>{location}</span>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#020617] text-white"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="space-y-8">

          <EducationCard
            logo={mgrLogo}
            institute="Dr. M.G.R. Educational and Research Institute"
            degree="Bachelor of Technology"
            stream="Computer Science and Engineering (CS)"
            date="2024 – 2028"
            location="Chennai, Tamil Nadu"
          />

          <EducationCard
            logo={dpsLogo}
            institute="Delhi Public School, Siliguri"
            degree="Higher Secondary Education (10+2)"
            stream="Science (PCM)"
            date="2022 – 2024"
            location="Siliguri, West Bengal"
          />

          <EducationCard
            logo={acsLogo}
            institute="Auxilium Convent School"
            degree="Secondary Education (10)"
            date="2012 – 2022"
            location="Siliguri, West Bengal"
          />

        </div>

      </div>
    </section>
  );
};

export default Education;