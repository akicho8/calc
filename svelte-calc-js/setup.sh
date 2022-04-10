#!/bin/sh
npm create vite svelte-calc-js --template svelte
cd svelte-calc-js
# npm install するとき npm が node の特定バージョンでないと動かないため
nodenv install 16.14.2
nodenv local 16.14.2
npm install
npm run dev
