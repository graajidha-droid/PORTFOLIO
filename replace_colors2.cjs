const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Tailwind classes
      content = content.replace(/pink-600/g, 'sky-500');
      content = content.replace(/pink-500/g, 'sky-400');
      content = content.replace(/pink-400/g, 'sky-400');
      content = content.replace(/pink-300/g, 'sky-300');
      content = content.replace(/pink/g, 'sky');
      
      content = content.replace(/bg-slate-950/g, 'bg-slate-800');
      content = content.replace(/text-gray-50/g, 'text-slate-50');
      
      // bg color hex
      content = content.replace(/#111827/gi, '#0F172A');
      
      // Update the glass-card first, which uses rgba(15, 23, 42,
      content = content.replace(/rgba\(\s*15\s*,\s*23\s*,\s*42\s*,/gi, 'rgba(30, 41, 59,');
      
      // Update background rgba from rgba(17, 24, 39, to rgba(15, 23, 42,
      content = content.replace(/rgba\(\s*17\s*,\s*24\s*,\s*39\s*,/gi, 'rgba(15, 23, 42,');
      
      // Replace pink hex #EC4899 with sky hex #38BDF8
      content = content.replace(/#EC4899/gi, '#38BDF8');
      
      // Replace pink rgba (236, 72, 153) with sky rgba (56, 189, 248)
      content = content.replace(/rgba\(\s*236\s*,\s*72\s*,\s*153\s*,/gi, 'rgba(56, 189, 248,');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir('c:/Important Documents/PORTFOLIO/src');
console.log("Done");
