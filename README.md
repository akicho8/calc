# フロントエンド・フレーワーク比較

電卓アプリ作成を通して各種フレームワークの違いを体験する

|    | Directory                   | FW            | Size  | 型  | 方法            | 導入                           |
|----|-----------------------------|---------------|-------|-----|-----------------|--------------------------------|
| × | react-class-js              | React         | 596K  |     | Class           | create-react-app               |
| × | react-class-tsx             | React         | 592K  | TS  | Class           | create-react-app               |
| ○ | react-hooks-js              | React >= 16.8 | 596K  |     | Hooks           | create-react-app               |
| △ | preact-hooks-jsx            | Preact        | 36K   |     | Hooks           | npm create vite                |
| ☆ | solid-simple-js             | Solid 1.3.13  | 40K   |     | Function        | npx degit solidjs/templates/js |
| △ | vue2-options-api            | Vue 2.x       | 824K  |     | Options API     | vue init webpack               |
| △ | nuxt4-vue2                  | Vue 2.x       | 324K  |     | Options API     | create-nuxt-app                |
| × | vue3-composition-return-api | Vue >= 3.0    | 72K   |     | Composition API | npm create vite                |
| ◎ | vue3-composition-setup-api  | Vue >= 3.2    | 72K   |     | script setup    | npm create vite                |
| ☆ | svelte-simple-js            | Svelte 3.44.0 | 28K   | TS? |                 | npm create vite                |
|    | vanilla-simple-app          | なし          | (16K) |     |                 | npm create vite                |

- Size = ビルド後のサイズ
- vanilla-simple-app は電卓実装してない空の状態

## Getter / Setter の違い 

| FW         | 変 | Getter         | Setter                    |
|------------|----|----------------|---------------------------|
| React      | × | this.state.foo | this.setState({foo: xxx}) |
| React 16.8 | × | foo            | setFoo(xxx)               |
| Solid      | ○ | foo()          | setFoo(xxx)               |
| Vue 2      | ○ | this.foo       | this.foo = xxx            |
| Vue 3      | ○ | foo.value      | foo.value = xxx           |
| Svelte     | ○ | foo            | foo = xxx                 |

- 変 = 変数を即時更新できる

## react-class-js

- 短所
  - 変数を即時更新できない
    - 回避するためだけにメンテしづらいコードが増える
  - watch は componentDidMount と componentDidUpdate の定義
  - computed 相当がない？
    - createMemo を使う？
  - class 属性の切り替えが難しい
  - jsx内の制御構文がバッドノウハウ
  - ビューとスタイルとの分断
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
  - ビルドサイズが React の 0.06 倍 (Svelteの方が軽い)

## solid-simple-js

- 短所
  - なぜか `classList={{foo: props.xxx}}` が動かん
- 長所
  - React Hooks のコードから移行しやすい
  - React Hooks の問題点が解消
  - 変数は即時更新できる
  - 同じ値をセットしたときも更新したと見なすオプションがある(これ欲しかった)
    - `const [getValue, setValue] = createSignal(initialValue, { equals: false })`
  - class の切り替え方法が少し改善された
    - `classList={{foo: true, bar: false}}` と書ける

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
  - ビューとスタイルを一緒に書ける (SFC)

## nuxt4-vue2

- コンポーネントの内容は vue2-options-api とほぼ同じ
- 長所
  - `??` 演算子が動く
  - コンポーネントは import すら不要

## vue3-composition-return-api

- 短所
  - .value だらけ
  - コンポーネントは components に登録しないといけない
  - 関心毎単位で書けると謳われているが書きにくい
    - 何から何まで最後に return で返すのは二度手間
    - 宣言から遠すぎて登録を忘れる
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
    - HTML の断片として切り出せる
  - ビルドサイズが小さい
    - React の 0.05 倍
    - Preact の 0.78 倍

## vanilla-simple-app

- 短所
  - js のトランスパイルなし
- 長所
  - `npm i -g sass` だけで sass が使える
  - CSS (sass) の検証に便利

![](image.png)
