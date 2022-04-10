# 電卓アプリ集

電卓アプリ作成を通して各種フレームワークの進化・特徴・混沌を体験する

| Name                       | FW            | 型  | 方法            | 導入             |     |             |
|----------------------------|---------------|-----|-----------------|------------------|-----|-------------|
| react-calc-js-class        | React         |     | Class           | create-react-app |     |             |
| react-calc-ts-class        | React         | TS  | Class           | create-react-app |     |             |
| react-calc-js-hooks        | React >= 16.8 |     | Hooks           | create-react-app |     |             |
| vue2-options-api           | Vue 2.x       |     | Options API     | vue init webpack |     | `??` 動かず |
| nuxt4-vue2                 | Vue 2.x       |     | Options API     | create-nuxt-app  |     |             |
| vue3-composition-api       | Vue >= 3.0    |     | Composition API | vue create vite  | WIP |             |
| vue3-composition-setup-api | Vue >= 3.2    |     | script setup    | vue create vite  |     |             |
| svelte-calc-js             | Svelte 3.44.0 | TS? |                 | vue create vite  |     | vite 2.9.0  |

## react-calc-js-hooks

- 変数を即時更新できない(致命傷)
- watch は componentDidMount と componentDidUpdate の定義(微妙)
- computed 相当がない？

## react-calc-js-hooks

- 変数を即時更新できない(致命傷)
- useEffect で watch 相当になる
- 単に変数に入れれば computed 相当になる
- this が不要になった

## vue2-options-api

- 変数は即時更新できる
- `??` 演算子が使えない
  - babel 関連が古い？
- 設定ファイルが多すぎ
- 本家から非推奨のお達し

## vue3-composition-api

- コンポーネントを components に登録しないといけない
- 変数を return で返さないといけない。面倒な上に遠い。

## vue3-composition-setup-api

- 変数は即時更新できる
- this が不要になった
- その一方で実体の参照や変更は .value に対して行う
- コンポーネントはインポートするだけで使える

## nuxt4-vue2

- コンポーネントの内容は vue2-options-api とほぼ同じ
- ただ `??` 演算子が動く

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
