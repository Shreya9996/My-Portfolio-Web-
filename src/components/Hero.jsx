import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-90 z-0"></div>
      
      {/* We can use an actual image here instead of an empty div, but a dark gradient overlay is safe */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 z-0 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center w-full">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h2 className="text-accent text-xl md:text-2xl font-medium mb-4">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-textPrimary mb-6">
            Shreya Gurbas Patil
          </h1>
          <p className="text-xl md:text-2xl text-textSecondary mb-8">
            AIML | <span className="text-[#0b5ed7]">Aspiring Data Scientist</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-6 py-2.5 bg-[#0d6efd] hover:bg-[#0b5ed7] text-white rounded shadow-sm font-medium transition-colors text-center"
            >
              Hire Me
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Shreya_Patil_Resume.pdf" 
              download="Shreya_Patil_Resume.pdf"
              className="px-6 py-2.5 bg-[#6c757d] hover:bg-[#5c636a] text-white rounded shadow-sm font-medium transition-colors text-center"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0d6efd] shadow-[0_4px_15px_rgba(13,110,253,0.3)]"
          >
            {/* If profile.jpg is missing, we use a placeholder */}
            <img 
              src="/profile.jpg" 
              alt="Shreya Gurbas Patil" 
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=Shreya+Patil&size=512&background=0d6efd&color=fff'; }}
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
