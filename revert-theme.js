const fs = require('fs');
const files = ['src/components/Hero.jsx', 'src/components/Navbar.jsx', 'src/components/Contact.jsx', 'src/components/Extra.jsx', 'src/components/About.jsx', 'src/components/Projects.jsx'];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/#0d6efd/g, 'var(--accent, #6d28d9)');
    content = content.replace(/bg-\[#0d6efd\]/g, 'bg-accent');
    content = content.replace(/bg-\[#6c757d\]/g, 'bg-gray-700');
    content = content.replace(/hover:bg-\[#0b5ed7\]/g, 'hover:bg-accentLight');
    content = content.replace(/hover:bg-\[#5c636a\]/g, 'hover:bg-gray-600');
    content = content.replace(/border-\[#0d6efd\]/g, 'border-accent');
    content = content.replace(/text-\[#0b5ed7\]/g, 'text-accentLight');
    content = content.replace(/border-gray-200/g, 'border-gray-800');
    // Change white input backgrounds back to dark
    content = content.replace(/bg-white\/40/g, 'bg-background');
    fs.writeFileSync(f, content);
  }
});
