#!/bin/sh
cd ~/src/calc
nodenv install 16.14.2
nodenv rehash
nodenv global 16.14.2
node -v
npm i -g npm
npx create-react-app react-calc-js
cd react-calc
npm i sass
npm start
