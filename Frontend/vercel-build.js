const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Vercel build process...');

// Check if TypeScript is installed
try {
  const tscPath = path.join(__dirname, 'node_modules', '.bin', 'tsc');
  if (!fs.existsSync(tscPath)) {
    console.log('TypeScript not found. Installing TypeScript...');
    execSync('npm install typescript --save-dev', { stdio: 'inherit' });
  }

  console.log('Running TypeScript type check...');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });

  console.log('Running Vite build...');
  execSync('npx vite build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
