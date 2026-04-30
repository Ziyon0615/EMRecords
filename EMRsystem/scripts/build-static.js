const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'dist');
const staticFiles = [
  'admin-dashboard.html',
  'admin.html',
  'api-config.js',
  'app.js',
  'assessment.html',
  'dashboard.html',
  'doctor-dashboard.html',
  'doctor-login.html',
  'doctor-register.html',
  'index.html',
  'login.html',
  'qrcode.min.js',
  'register.html',
  'simple-login.html',
  'staff-login.html',
  'staff-register.html',
  'staff.html',
  'styles.css',
];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of staticFiles) {
  fs.copyFileSync(path.join(root, file), path.join(outDir, file));
}

console.log(`Copied ${staticFiles.length} static files to ${outDir}`);
