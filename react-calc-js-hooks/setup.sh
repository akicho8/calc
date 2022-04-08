#!/bin/sh
cd ~/src/calc
nodenv install 14.0.0
nodenv rehash
nodenv global 14.0.0
node -v
npm i -g npm
npx create-react-app react-calc-js
cd react-calc
npm i sass
npm start
