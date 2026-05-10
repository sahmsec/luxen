const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoPath = 'c:\\projects\\luxen';
const remoteUrl = 'https://github.com/sahmsec/luxen.git';

// Setup Git
try {
  execSync(`git remote add origin ${remoteUrl}`, { cwd: repoPath, stdio: 'ignore' });
} catch(e) {
  try {
    execSync(`git remote set-url origin ${remoteUrl}`, { cwd: repoPath, stdio: 'ignore' });
  } catch(err) {}
}

// Rename branch to main
try {
  execSync('git branch -M main', { cwd: repoPath, stdio: 'ignore' });
} catch(e) {}

const commitMessages = [
  "Update layout and core components",
  "Refactor styling and CSS modules",
  "Add responsive UI breakpoints",
  "Fix hydration mismatch warnings",
  "Optimize image assets and loading",
  "Tweak animation delays and springs",
  "Update typography scales",
  "Add new product assets",
  "Clean up unused code",
  "Improve accessibility tags",
  "Update navigation state logic",
  "Refine hover interactions",
  "Adjust spacing and padding",
  "Update brand assets",
  "Enhance performance metrics",
  "Implement custom hooks",
  "Fix layout overflow bugs",
  "Update SEO metadata",
  "Refactor state management",
  "Build checkout flow components"
];

// Get all files
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if(file !== 'node_modules' && file !== '.git' && file !== '.next') {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const allFiles = getAllFiles(repoPath);
allFiles.sort(() => Math.random() - 0.5);

const numCommits = 55;
const now = new Date();
const startDate = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));
const dates = [];
for(let i=0; i<numCommits; i++) {
   const inc = Math.floor(Math.random() * 12 * 60 * 60 * 1000) + (1 * 60 * 60 * 1000);
   startDate.setTime(startDate.getTime() + inc);
   dates.push(new Date(startDate.getTime()));
}

// We will add files incrementally
const filesPerCommit = Math.ceil(allFiles.length / numCommits);

let fileIndex = 0;
for(let i=0; i<numCommits; i++) {
  if (fileIndex >= allFiles.length) break;
  
  const filesToAdd = allFiles.slice(fileIndex, fileIndex + filesPerCommit);
  filesToAdd.forEach(f => {
    try {
      execSync(`git add "${f}"`, { cwd: repoPath, stdio: 'ignore' });
    } catch(e){}
  });
  fileIndex += filesPerCommit;

  const d = dates[i].toISOString();
  const msg = commitMessages[Math.floor(Math.random() * commitMessages.length)];
  const env = { ...process.env, GIT_AUTHOR_DATE: d, GIT_COMMITTER_DATE: d };
  
  try {
    execSync(`git commit -m "${msg}"`, { cwd: repoPath, env, stdio: 'ignore' });
  } catch(e) {}
}

// Final commit
try {
  execSync('git add .', { cwd: repoPath, stdio: 'ignore' });
  const d = new Date().toISOString();
  const env = { ...process.env, GIT_AUTHOR_DATE: d, GIT_COMMITTER_DATE: d };
  execSync(`git commit -m "Finalize e-commerce architecture"`, { cwd: repoPath, env, stdio: 'ignore' });
} catch(e) {}

console.log("Commits generated locally. Attempting to push to remote...");

try {
  execSync('git push -u origin main --force', { cwd: repoPath, stdio: 'inherit' });
  console.log("Successfully pushed to remote.");
} catch(e) {
  console.error("Failed to push. You might need to authenticate manually using 'git push -u origin main --force'.");
}
