# Shala
Tailwind CSS のお試しキット

## インストール

前提: Docker Desktop またはRancher Desktop などのDocker 環境が構築されていること！


### リポジトリをローカル環境にクローンする
```
cd [ PROJECT_DIRECTORY ]
git clone https://github.com/akkad-jp/Shala.git
cd Shala
```

### Docker コンテナを構築する
```
docker compose build
sh/up
```

### JavaScript の依存パッケージをインストールする
```
sh/exec npm ci
```


## スタティックなHTML の編集・動作確認

### html ディレクトリ内にhtml ファイルを作成する。  

例）html/hoge.html
```
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link rel="stylesheet" href="css/style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ほげ</title>
  </head>
  <body>
    <p class="text-3xl">Hello, Vite!</p>
  </body>
</html>
```

### html ディレクトリ用のCSS 変換モジュールを起動する

```
sh/serve_html
```
(上記コマンド実行中は、プロンプトが帰ってこない。終了する場合は[control] + [C])
(実行中は、HTML ファイルを編集・保存すると自動でCSS 変換処理が行わて、ブラウザの表示に即反映される)

## ブラウザで動作確認

http://localhost/html/hoge.html でページが表示されるはず！


## Vue.js の編集・動作確認

### ページ追加の手順

#### 1. ページを作成する
src/pages に.vue ファイルを作成する。
例）HogePage.vue
```
<template>
  <div class="m-2 p-4 border border-gray-400">
    <p class="hoge text-xl">template タグで囲まれたこの箇所は、ふつ〜のHTML を書いてOK！</p>
  </div>
</template>

<style scoped>
/** 必要に応じて、ここにCSS を書く。*/
/* scoped となってる場合、ここに書いた内容はこのファイルでのみ有効。他のファイルに影響は与えない */

.hoge {
  text-decoration: underline;
}
</style>
```

#### 2. ルートに登録する
src/router/index.js  

routes の配列にページ情報を追記する。

例）URL が'http://localhost/hoge' でアクセスできるページを登録する場合
```
const routes = [
  // ...
  { path: '/hoge', component: '@/pages/HogePage.vue' },
]
```

## Vue.js 用のCSS 変換モジュールを起動する

```
sh/serve
```

(上記コマンド実行中は、プロンプトが帰ってこない。終了する場合は[control] + [C])
(実行中は、HTML ファイルを編集・保存すると自動でCSS 変換処理が行わて、ブラウザの表示に即反映される)

## ブラウザで動作確認

http://localhost/hoge でページが表示されるはず！
