const fs = require('fs');
const files = ['src/components/Hero.jsx', 'src/components/Navbar.jsx', 'src/components/Contact.jsx', 'src/components/Extra.jsx', 'src/components/About.jsx', 'src/components/Projects.jsx', 'src/components/Experience.jsx'];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/border-gray-800/g, 'border-gray-200');
    content = content.replace(/border-gray-700/g, 'border-gray-200');
    content = content.replace(/bg-black\/80/g, 'bg-background/80');
    content = content.replace(/bg-black\/90/g, 'bg-background/90');
    content = content.replace(/bg-black\/60/g, 'bg-white/60');
    // Ensure Navbar uses blue taskbar
    content = content.replace(/bg-background\/90 backdrop-blur-md shadow-lg py-4text-white/g, 'bg-accent shadow-lg py-4 text-white');
    content = content.replace(/bg-transparent py-6text-white/g, 'bg-accent/90 py-6 text-white');
    fs.writeFileSync(f, content);
  }
});
