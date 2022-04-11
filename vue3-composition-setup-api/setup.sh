#!/bin/sh
# 15.0.0 だと vite が動かない
nodenv local 14.0.0
npm create vite
# >> vue3-composition-setup-api
cd vue3-composition-setup-api
npm install
npm run dev
