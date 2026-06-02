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
      
      // Replace indigo with pink
      content = content.replace(/indigo/g, 'pink');
      
      // Replace bg color hex
      content = content.replace(/#080C14/gi, '#111827');
      
      // Replace rgba of #080C14 (8, 12, 20) with rgba of #111827 (17, 24, 39)
      content = content.replace(/rgba\(\s*8\s*,\s*12\s*,\s*20\s*,/gi, 'rgba(17, 24, 39,');
      
      // Replace indigo hex #6366F1 with pink hex #EC4899
      content = content.replace(/#6366F1/gi, '#EC4899');
      
      // Replace indigo rgba (99, 102, 241) with pink rgba (236, 72, 153)
      content = content.replace(/rgba\(\s*99\s*,\s*102\s*,\s*241\s*,/gi, 'rgba(236, 72, 153,');
      
      // Text color update
      content = content.replace(/text-slate-200/g, 'text-gray-50');
      content = content.replace(/text-slate-100/g, 'text-gray-50');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir('c:/Important Documents/PORTFOLIO/src');
console.log("Done");
