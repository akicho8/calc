# フロントエンド・フレーワーク比較

電卓アプリ作成を通して各種フレームワークの違いを体験する

|    | Name                        | FW            | 型  | 方法            | 変 | 導入             |             | URL                                     |
|----|-----------------------------|---------------|-----|-----------------|----|------------------|-------------|-----------------------------------------|
| × | react-class-js              | React         |     | Class           | × | create-react-app |             | [URL](react-class-js/build)             |
| × | react-class-tsx             | React         | TS  | Class           | × | create-react-app |             | [URL](react-class-tsx/build)            |
| ○ | react-hooks-js              | React >= 16.8 |     | Hooks           | × | create-react-app |             | [URL](react-hooks-js/build)             |
| △ | preact-hooks-jsx            | Preact        |     | Hooks           | × | npm create vite  |             | [URL](preact-hooks-jsx/build)           |
| △ | vue2-options-api            | Vue 2.x       |     | Options API     | ○ | vue init webpack | `??` 動かず | [URL](vue2-options-api/dist)            |
| △ | nuxt4-vue2                  | Vue 2.x       |     | Options API     | ○ | create-nuxt-app  |             | [URL](nuxt4-vue2/dist)                  |
| × | vue3-composition-return-api | Vue >= 3.0    |     | Composition API | ○ | npm create vite  |             | [URL](vue3-composition-return-api/dist) |
| ◎ | vue3-composition-setup-api  | Vue >= 3.2    |     | script setup    | ○ | npm create vite  |             | [URL](vue3-composition-setup-api/dist)  |
| ☆ | svelte-simple-js            | Svelte 3.44.0 | TS? |                 | ○ | npm create vite  | vite 2.9.0  | [URL](svelte-simple-js/dist)            |
|    | vanilla-simple-app          |               |     |                 |    | npm create vite  |             | [URL](vanilla-simple-app/dist)          |

- 変 = 変数を即時更新できる

## react-class-js

- 短所
  - 変数を即時更新できない
  - watch は componentDidMount と componentDidUpdate の定義
  - computed 相当がない？
  - class 属性の追加が面倒
  - jsx内の制御構文がバッドノウハウ
- 長所
  - インデントが変にならない
  - テンプレート内の独自構文を別に覚える必要がない
  - `npm i -g sass` だけで sass が使える

## react-class-tsx

- react-class-js を TypeScript で動くようにしただけのもので基本同じ

## react-hooks-js

- 短所
  - ここに来ても変数を即時更新できない
- 長所
  - this 不要
  - useEffect で watch
  - 単に変数に入れれば computed

## preact-hooks-jsx

- react-hooks-js と同じ書き方

- 短所
  - よく使わない機能がない
- 長所
  - ビルドサイズが React の 1/10 ぐらい

## vue2-options-api

- 短所
  - `??` 演算子でエラー
    - babel 関連が古い？
  - 設定ファイルが多すぎ
  - 関心毎単位で書けない
    - mixins しまくる手はある
  - 本家から非推奨のお達し
- 長所
  - 変数は即時更新できる
  - 外部ライブラリが充実

## nuxt4-vue2

- コンポーネントの内容は vue2-options-api とほぼ同じ
- 長所
  - `??` 演算子が動く
  - コンポーネントは import すら不要

## vue3-composition-return-api

- 短所
  - .value だらけ
  - コンポーネントは components に登録しないといけない
  - 何から何まで最後に return で返すのは二度手間
  - しかも宣言から遠すぎて登録を忘れる
- 長所
  - 変数は即時更新できる
  - this 不要
  - template直下はタグ1つの縛りなし

## vue3-composition-setup-api

- 長所
  - vue3-composition-return-api の問題が解消
  - コンポーネントは import するだけで使える
  - 最後に return で返す必要なし

## svelte-simple-js

- 短所
  - 外部ライブラリが少ない
    - 今後増えそう
- 長所
  - 変数は即時更新できる
  - Emacs 用には svelte-mode.el が対応している
    - 何の問題もなく全体インデントが効く
  - 自然に書ける
    - Vue3 Composition API (script setup 型) をさらに進めた形
  - .svelteファイルはHTMLのサブセット
    - template タグすら不要
    - HTMLの断片として切り出せる

## vanilla-simple-app

- 短所
  - js のトランスパイルなし
- 長所
  - `npm i -g sass` だけで sass が使える
  - CSS (sass) の検証に便利

![](image.png)
