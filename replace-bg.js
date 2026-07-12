const fs = require('fs');
const path = require('path');
const dirs = ['About.jsx', 'Projects.jsx', 'Contact.jsx'];
dirs.forEach(f => {
  const p = path.join(__dirname, 'src/components', f);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    content = content.replace(/className="py-20 bg-background\/50"/g, 'className="py-20 bg-transparent"');
    content = content.replace(/className="py-20 bg-background"/g, 'className="py-20 bg-transparent"');
    
    content = content.replace(/bg-card/g, 'bg-white/60 backdrop-blur-md shadow-sm text-[#212529]');
    
    content = content.replace(/bg-background border border-gray-200/g, 'bg-white/40 border border-white/50 backdrop-blur-sm shadow-sm');
    
    content = content.replace(/bg-background border border-gray-800/g, 'bg-white/40 border border-white/50 backdrop-blur-sm shadow-sm'); // fallback
    
    fs.writeFileSync(p, content);
  }
});
