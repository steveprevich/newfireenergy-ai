#!/usr/bin/env node
// Wrapper to start Next.js dev server
const { execSync } = require('child_process');
const path = require('path');
process.chdir(__dirname);
require('./node_modules/next/dist/bin/next');
