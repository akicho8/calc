#!/bin/sh
# 15.0.0 だと vite が動かない
nodenv local 14.0.0
yarn create vite
# >> vite-vue2
cd vite-vue2
npm install
npm run dev
