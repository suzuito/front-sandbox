# TypeScriptのモジュール

`@types/node`パッケージをインストールすることで、TypeScriptのソースコードにて、モジュール形式としてCommonJS Module形式を用いることができる。

コンパイル後のJavaScriptにて、モジュール形式をES Module形式としたい場合は`module`を`es2020`など(`es2015`,`esnext`などなど)とする。
コンパイル後のJavaScriptにて、モジュール形式をCommonJS形式としたい場合は`module`を`node16`など(`commonjs`などなど)とする。

```bash
# コンパイル後のJavaScriptのモジュール形式をESModuleとする
# main.jsをES Moduleとして実行する
npx tsc --module es2020 && \
node --experimental-default-type=module main.js
# ↑は実行エラーとなる。

# コンパイル後のJavaScriptのモジュール形式をCommonJS Moduleとする
# main.jsをCommonJS Moduleとして実行する
npx tsc --module node16 && \
node --experimental-default-type=commonjs main.js
```
