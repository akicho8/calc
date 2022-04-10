#!/bin/sh
cd ~/src/calc
nodenv install 16.14.2
nodenv rehash
nodenv local 16.14.2
node -v
npm i -g npm
npx create-react-app react-calc-js-hooks
cd react-calc-js-hooks
npm i sass
npm start
