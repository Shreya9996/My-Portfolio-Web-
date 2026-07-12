import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-textSecondary">Feel free to reach out to me for roles or collaborations.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 justify-center"
          >
            <a href="mailto:shreyapatil9681@gmail.com" className="flex items-center gap-4 group">
              <div className="p-4 bg-card rounded-full border border-gray-800 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-textPrimary font-semibold text-lg">Email</h4>
                <p className="text-textSecondary group-hover:text-textPrimary transition-colors">shreyapatil9681@gmail.com</p>
              </div>
            </a>
            
            <a href="https://linkedin.com/in/shreya-patil" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <div className="p-4 bg-card rounded-full border border-gray-800 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                <Linkedin className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-textPrimary font-semibold text-lg">LinkedIn</h4>
                <p className="text-textSecondary group-hover:text-textPrimary transition-colors">linkedin.com/in/shreya-patil</p>
              </div>
            </a>

            <a href="https://github.com/Shreya9996" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <div className="p-4 bg-card rounded-full border border-gray-800 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                <Github className="text-accent" size={24} />
              </div>
              <div>
                <h4 className="text-textPrimary font-semibold text-lg">GitHub</h4>
                <p className="text-textSecondary group-hover:text-textPrimary transition-colors">github.com/Shreya9996</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card p-8 rounded-2xl border border-gray-800"
          >
            <form 
              className="flex flex-col gap-6" 
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.contactName.value || 'Someone';
                const msg = e.target.contactMessage.value || '';
                window.location.href = `mailto:shreyapatil9681@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(msg)}`;
              }}
            >
              <div>
                <label className="block text-textSecondary text-sm mb-2">Name</label>
                <input 
                  type="text" 
                  name="contactName"
                  required
                  placeholder="Your Name" 
                  className="w-full bg-background border border-gray-200 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-textSecondary text-sm mb-2">Email</label>
                <input 
                  type="email" 
                  name="contactEmail"
                  required
                  placeholder="Your Email" 
                  className="w-full bg-background border border-gray-200 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-textSecondary text-sm mb-2">Message</label>
                <textarea 
                  name="contactMessage"
                  rows={4} 
                  required
                  placeholder="Your Message..." 
                  className="w-full bg-background border border-gray-200 rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full bg-[#0d6efd] hover:bg-[#0b5ed7] text-white py-3 rounded shadow-sm font-medium transition-colors"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
