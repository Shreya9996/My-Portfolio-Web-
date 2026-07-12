const fs = require('fs');
const path = require('path');
const bgReplaceFiles = [
  'src/components/Projects.jsx',
  'src/components/Contact.jsx',
  'src/components/About.jsx',
  'src/components/Navbar.jsx',
  'src/components/Footer.jsx'
];
bgReplaceFiles.forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/border-gray-800/g, 'border-gray-200');
    // Also fix the projects hover overlay text color and background so it looks good in light mode
    content = content.replace(/bg-black\/50/g, 'bg-white/80'); 
    content = content.replace(/text-white transition-colors/g, 'text-[#0d6efd] transition-colors'); 
    fs.writeFileSync(p, content);
  }
});
