import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'House Price Prediction System',
      desc: 'A machine learning model that predicts house prices based on various features using regression techniques. Helps in making data-driven real estate decisions.',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: '#',
      live: '#'
    },
    {
      title: 'Healthcare Outcome Prediction',
      desc: 'Analyzes patient data to predict healthcare outcomes using machine learning models, improving decision-making in medical scenarios.',
      tech: ['Python', 'ML Algorithms'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: '#',
      live: '#'
    },
    {
      title: 'Rural Health Care Management System',
      desc: 'A web-based system designed to provide medical support in rural areas, including ambulance tracking and telemedicine features.',
      tech: ['JavaScript', 'Web Technologies'],
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: '#',
      live: '#'
    },
    {
      title: 'Weather App',
      desc: 'A responsive web app that fetches real-time weather data using APIs and displays user-friendly weather information.',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: '#',
      live: '#'
    },
    {
      title: 'Machine Learning Collection',
      desc: 'A collection of multiple ML projects demonstrating data preprocessing, model training, and evaluation techniques.',
      tech: ['Python', 'Scikit-learn'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
            Featured <span className="text-accent">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/60 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800 hover:border-accent shadow-sm group transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-2 bg-background rounded-full hover:bg-accent text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="p-2 bg-background rounded-full hover:bg-accent text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-textPrimary mb-3">{project.title}</h3>
                <p className="text-textSecondary text-sm mb-4 line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-background text-accentLight rounded-full border border-gray-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
