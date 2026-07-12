const fs = require('fs');
const path = require('path');
const glob = require('glob'); // Not available? I'll use standard array

const files = [
  'src/components/Hero.jsx', 
  'src/components/Navbar.jsx', 
  'src/components/Contact.jsx', 
  'src/components/Extra.jsx', 
  'src/components/About.jsx', 
  'src/components/Projects.jsx', 
  'src/components/Experience.jsx',
  'src/components/Footer.jsx'
];

files.forEach(f => {
  const absolutePath = path.join(__dirname, f);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');
    
    // Force Borders
    content = content.replace(/border-gray-800/g, 'border-gray-200');
    content = content.replace(/border-gray-700/g, 'border-gray-200');
    
    // Force Hero specific dark-theme remnants
    content = content.replace(/bg-\[url\('https:\/\/images.unsplash.com\/photo-1550439062[^']+'\)\]/g, "bg-transparent");
    content = content.replace(/opacity-10 z-0 mix-blend-overlay/g, 'hidden');
    content = content.replace(/from-background via-background to-card/g, 'from-transparent to-transparent');
    
    // Dark mode overrides
    content = content.replace(/bg-black\/60/g, 'bg-white/60 text-black');
    content = content.replace(/text-white transition-colors/g, 'text-black hover:text-white transition-colors'); // Hero/Projects buttons
    content = content.replace(/text-white\/70/g, 'text-black/70');
    content = content.replace(/bg-black\/30/g, 'bg-white/30');

    // Make sections consistently transparent to let App background show
    content = content.replace(/className="py-20 bg-background"/g, 'className="py-20 bg-transparent"');
    
    // Navbar fixes to keep it blue
    content = content.replace(/className="text-gray-100 hover:text-white hover:bg-\[#0b5ed7\] block px-3 py-2/g, 'className="text-white hover:bg-[#0b5ed7] block px-3 py-2');

    // Write back
    fs.writeFileSync(absolutePath, content);
  }
});
