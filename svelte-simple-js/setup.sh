#!/bin/sh
npm create vite svelte-simple-js --template svelte
cd svelte-simple-js
# npm install するとき npm が node の特定バージョンでないと動かないため
nodenv install 16.14.2
nodenv local 16.14.2
npm install
npm run dev
