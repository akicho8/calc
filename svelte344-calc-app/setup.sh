#!/bin/sh
npm create vite svelte344-calc-app --template svelte
cd svelte344-calc-app
# npm install するとき npm が node の特定バージョンでないと動かないため
nodenv install 16.14.2
nodenv local 16.14.2
npm install
npm run dev
