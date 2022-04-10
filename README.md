# 電卓アプリ集

電卓アプリ作成を通して各種フレームワークの進化・特徴・混沌を体験する

| Name                  | FW            | 型  | 方法            | 導入             |     |             |
|-----------------------|---------------|-----|-----------------|------------------|-----|-------------|
| react-calc-js-class   | React         |     | Class           | create-react-app |     |             |
| react-calc-ts-class   | React         | TS  | Class           | create-react-app |     |             |
| react-calc-js-hooks   | React >= 16.8 |     | Hooks           | create-react-app |     |             |
| vue-cli-js-option     | Vue 2.x       |     | Options API     | vue init webpack |     | `??` 動かず |
| nuxt4-vue2            | Vue 2.x       |     | Options API     | create-nuxt-app  |     |             |
| ?                     | Vue >= 3.0    |     | Composition API | vue create vite  | WIP |             |
| vite-vue3-composition-api | Vue >= 3.2    |     | script setup    | vue create vite  |     |             |
| svelte-calc-js        | Svelte 3.44.0 | TS? |                 | vue create vite  |     | vite 2.9.0  |

## react-calc-js-hooks

- setState しても変数を即時更新できない(致命的)
- computed 相当がない？
- watch は componentDidMount と componentDidUpdate の定義(微妙)

## react-calc-js-hooks

- useState で setXXX を作ったとこで結局即時更新できない(致命的)
- 単に変数に入れれば computed 相当になる
- useEffect で watch 相当になる

## vue-cli-js-option

- 変数は即時更新できる
- `??` 演算子が解釈できない
  - babel 関連が古すぎ？
- 設定ファイルが多すぎる
- 非推奨

## vite-vue3-composition-api

- 変数は即時更新できる
- .value 地獄

## nuxt4-vue2

- 変数は即時更新できる

### create-nuxt-app

- create-nuxt-app v4.0.0
- Programming language: JavaScript
- Package manager: Npm
- UI framework: None
- Linting tools: None
- Testing framework: Jest
- Rendering mode: Single Page App
- Deployment target: Static (Static/Jamstack hosting)
- Development tools: jsconfig.json
- Continuous integration: None
- Version control system: None

## svelte-calc-js

- 変数は即時更新できる
- Emacs 用には svelte-mode.el が対応している
- しかも何の問題もなく全体インデントが効く
- 一番普通に書ける

![](image.png)
