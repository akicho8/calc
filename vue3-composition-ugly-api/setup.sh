#!/bin/sh
# 15.0.0 だと vite が動かない
nodenv local 14.0.0
yarn create vite
# >> vue3-composition-ugly-api
cd vue3-composition-ugly-api
npm install
npm run dev
