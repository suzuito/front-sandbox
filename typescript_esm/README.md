# TypeScriptのモジュール

TypeScriptのソースコードにて、モジュール形式としてES Module形式を用いることができる。

コンパイル後のJavaScriptにて、モジュール形式をES Module形式としたい場合は`module`を`es2020`など(`es2015`,`esnext`などなど)とする。
コンパイル後のJavaScriptにて、モジュール形式をCommonJS形式としたい場合は`module`を`node16`など(`commonjs`などなど)とする。

```bash
# コンパイル後のJavaScriptのモジュール形式をESModuleとする
# main.jsをES Moduleとして実行する
npx tsc --module es2020 && \
node --experimental-default-type=module main.js
# ↑は実行エラーとなる。なぜなら、main.jsの中のimport文に与えたモジュールにはファイル拡張子.jsがついていないため。
# これは今回の主題とは逸れてしまうため、言及しないでおくが、JavaScriptのES Moduleではファイル拡張子を省略できない。

# コンパイル後のJavaScriptのモジュール形式をCommonJS Moduleとする
# main.jsをCommonJS Moduleとして実行する
npx tsc --module node16 && \
node --experimental-default-type=commonjs main.js
```
