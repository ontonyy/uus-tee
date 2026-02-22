#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

const requiredFiles = [
  'index.html',
  'contact.html',
  'css/styles.css',
  'js/main.js',
  'js/i18n.js',
  'assets/favicon.svg',
  'assets/img.png'
];

const htmlFiles = ['index.html', 'contact.html'];

const issues = [];

function exists(relPath) {
  return fs.existsSync(path.join(projectRoot, relPath));
}

function read(relPath) {
  return fs.readFileSync(path.join(projectRoot, relPath), 'utf8');
}

function addIssue(message) {
  issues.push(message);
}

function shouldSkipReference(value) {
  return (
    value.startsWith('http://') ||
    value.startsWith('https://') ||
    value.startsWith('mailto:') ||
    value.startsWith('tel:') ||
    value.startsWith('#') ||
    value.startsWith('data:')
  );
}

for (const file of requiredFiles) {
  if (!exists(file)) {
    addIssue(`Missing required file: ${file}`);
  }
}

for (const htmlFile of htmlFiles) {
  if (!exists(htmlFile)) {
    continue;
  }

  const content = read(htmlFile);

  const refRegex = /(src|href)\"([^\"]+)\"/g;
  let match;

  while ((match = refRegex.exec(content)) !== null) {
    const ref = match[2].trim();
    if (!ref || shouldSkipReference(ref)) {
      continue;
    }

    const normalized = ref.replace(/^\.\//, '');
    const resolved = path.join(projectRoot, normalized);

    if (!fs.existsSync(resolved)) {
      addIssue(`${htmlFile}: missing referenced path -> ${ref}`);
    }
  }

  if (!content.includes('<meta name="viewport" content="width=device-width, initial-scale=1" />')) {
    addIssue(`${htmlFile}: missing mobile viewport meta tag`);
  }

  if (!content.includes('data-lang-btn')) {
    addIssue(`${htmlFile}: language switcher buttons are missing`);
  }
}

if (issues.length > 0) {
  console.error('Site validation failed:');
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log('Site validation passed.');
