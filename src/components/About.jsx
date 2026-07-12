import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['C', 'C++', 'Python', 'JavaScript'],
    color: 'border-blue-500/50'
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'React.js'],
    color: 'border-purple-500/50'
  },
  {
    title: 'Data Science & ML',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
    color: 'border-green-500/50'
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
    color: 'border-yellow-500/50'
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Power BI'],
    color: 'border-pink-500/50'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-6">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="text-textSecondary space-y-4 text-lg leading-relaxed bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-sm">
              <p>
                I am a B.Tech Computer Science student at <span className="text-accentLight font-semibold">RSCOE Pune</span> with a CGPA of 9.32. 
                Currently, I actively serve as a Technical Team Member at CSI RSCOE and the Campus Lead at OSGC.
              </p>
              <p>
                Passionate about Data Science, Machine Learning, and Web Development, I enjoy engineering data-driven algorithms and crafting modern, robust applications from end-to-end.
              </p>
              <div className="pt-4 mt-4 border-t border-gray-800">
                <span className="text-textPrimary font-semibold">Primary Goal:</span> To build impactful solutions as a Full Stack + AI Engineer.
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-textPrimary mb-6 text-center lg:text-left">
              Core <span className="text-accent">Skills</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-card/60 backdrop-blur-md p-5 rounded-xl border-l-4 ${category.color} border-y border-r border-gray-800 shadow-sm`}
                >
                  <h4 className="text-textPrimary font-semibold mb-3">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 bg-background text-textSecondary rounded border border-gray-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
