import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Award, Target } from 'lucide-react';

const Extra = () => {
  return (
    <section id="extra" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
            Achievements & <span className="text-accent">More</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-background rounded-xl">
                  <GraduationCap className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">Education</h3>
              </div>
              <div className="border-l-2 border-accent pl-6 pb-2">
                <h4 className="text-lg font-semibold text-textPrimary">Rajarshi Shahu College of Engineering (RSCOE)</h4>
                <p className="text-accentLight font-medium mb-2">B.Tech Computer Science Engineering</p>
                <p className="text-textSecondary">Outstanding academic record with a CGPA of 9.32</p>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-background rounded-xl">
                  <Target className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Leadership', 'Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability'].map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-background border border-gray-800 text-textSecondary rounded-full hover:text-accentLight hover:border-accentLight transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-sm h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-background rounded-xl">
                  <Trophy className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">Achievements & Certifications</h3>
              </div>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1"><Award className="text-accentLight" size={20} /></div>
                  <div>
                    <h4 className="text-lg font-semibold text-textPrimary">CSI RSCOE Technical Team</h4>
                    <p className="text-textSecondary text-sm">Active Technical Team Member organizing and leading technical events.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Award className="text-accentLight" size={20} /></div>
                  <div>
                    <h4 className="text-lg font-semibold text-textPrimary">Campus Lead at OSGC</h4>
                    <p className="text-textSecondary text-sm">Spearheading open-source initiatives and community growth on campus.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Award className="text-accentLight" size={20} /></div>
                  <div>
                    <h4 className="text-lg font-semibold text-textPrimary">Hackathon Runner-Up</h4>
                    <p className="text-textSecondary text-sm">Secured Runner-Up position in the Ideathon competition for the Rural Healthcare Solution.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Extra;
