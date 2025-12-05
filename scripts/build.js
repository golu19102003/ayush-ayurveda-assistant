const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

try {
  // Change to Frontend directory
  process.chdir('Frontend');
  
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install --unsafe-perm', { stdio: 'inherit' });
  
  // Install Vite if not present
  if (!fs.existsSync('node_modules/vite')) {
    console.log('Installing Vite...');
    execSync('npm install --save-dev vite', { stdio: 'inherit' });
  }
  
  // Run Vite build directly
  console.log('Running Vite build...');
  const viteBin = path.resolve('node_modules/.bin/vite');
  if (fs.existsSync(viteBin)) {
    fs.chmodSync(viteBin, '755'); // Ensure execute permissions
    execSync(`node ${viteBin} build`, { stdio: 'inherit' });
  } else {
    // Fallback to npx if vite binary not found
    console.log('Vite binary not found, trying with npx...');
    execSync('npx vite build', { stdio: 'inherit' });
  }
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
