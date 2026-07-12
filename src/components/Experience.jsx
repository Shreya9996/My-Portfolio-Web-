import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, X, Maximize2 } from 'lucide-react';

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const highlights = [
    {
      id: 1,
      src: '/session_1.jpeg',
      alt: 'Engaging with students during the AI/ML session'
    },
    {
      id: 2,
      src: '/session_2.jpeg',
      alt: 'Delivering the presentation on Machine Learning'
    },
    {
      id: 3,
      src: '/session_3.jpeg',
      alt: 'Mentoring and answering queries from first-year students'
    },
    {
      id: 4,
      src: '/session_4.jpeg',
      alt: 'Hands-on practical demonstration of AI concepts'
    }
  ];

  // Prevent scroll when lightbox is open
  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
            My <span className="text-accent">Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Experience Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-sm relative overflow-hidden group hover:border-accent transition-colors duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Briefcase size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-accent/20 text-accentLight rounded-full text-xs font-semibold uppercase tracking-wider">
                    Leadership
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-textPrimary mt-4">AI/ML Session Speaker</h3>
                <h4 className="text-lg text-accentLight font-medium mb-6">CSI RSCOE Student Chapter</h4>
                
                <ul className="space-y-4 text-textSecondary">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <p>Delivered an interactive session on Artificial Intelligence and Machine Learning to first-year students.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <p>Explained core data science concepts and algorithms using intuitive, real-world examples.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <p>Effectively addressed and answered technical student queries, fostering computing curiosity.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <p>Demonstrated robust communication, mentoring, and technical presentation skills.</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Session Highlights / Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-textPrimary text-center lg:text-left">
              Session <span className="text-accentLight">Highlights</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((img, idx) => (
                <div 
                  key={img.id}
                  className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md border border-gray-800"
                  onClick={() => setSelectedImage(img)}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-48 sm:h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-accent text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Lightbox / Fullscreen Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors p-2 bg-black/30 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-background"
                onClick={(e) => e.stopPropagation()} // Prevent clicks on the image from closing the modal
              >
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain bg-black"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 sm:p-8">
                  <p className="text-white text-lg sm:text-xl font-medium">{selectedImage.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
