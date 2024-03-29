#!/bin/sh
(cd react-class-js              && npm run build)
(cd react-class-tsx             && npm run build)
(cd react-hooks-js              && npm run build)
(cd preact-hooks-jsx            && npm run build)
(cd solid-simple-js             && npm run build)
(cd vue2-options-api            && npm run build)
(cd nuxt4-vue2                  && npm run generate)
(cd vue3-composition-return-api && npm run build)
(cd vue3-composition-setup-api  && npm run build)
(cd svelte-simple-js            && npm run build)
(cd vanilla-simple-app          && npm run build)
(cd lit-simple-app              && npm run build)

(cd react-class-js              && du -h -d 0 build)
(cd react-class-tsx             && du -h -d 0 build)
(cd react-hooks-js              && du -h -d 0 build)
(cd preact-hooks-jsx            && du -h -d 0 dist)
(cd solid-simple-js             && du -h -d 0 dist)
(cd nuxt4-vue2                  && du -h -d 0 dist)
(cd vue2-options-api            && du -h -d 0 dist)
(cd vue3-composition-return-api && du -h -d 0 dist)
(cd vue3-composition-setup-api  && du -h -d 0 dist)
(cd svelte-simple-js            && du -h -d 0 dist)
(cd vanilla-simple-app          && du -h -d 0 dist)
(cd lit-simple-app              && du -h -d 0 dist)
