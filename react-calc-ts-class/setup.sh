#!/bin/sh
cd ~/src
nodenv install 14.0.0
nodenv rehash
nodenv global 14.0.0
node -v
npm i -g npm
npx create-react-app react-calc --template typescript
npm i sass
cd react-calc
npm start
