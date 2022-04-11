#!/bin/sh
nodenv local 16.14.2
npm i -g sass
npm create vite
# >> preact-hooks-jsx
cd preact-hooks-jsx
npm install
npm run dev
