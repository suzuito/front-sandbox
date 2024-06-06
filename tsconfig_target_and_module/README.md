# tsconfig.jsonの[target](https://www.typescriptlang.org/tsconfig/#target)と`module`

- targetによって、どのJavaScript featureを[ダウンレベル](https://www.typescriptlang.org/ja/tsconfig/#:~:text=%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AC%E3%83%99%E3%83%AB%E5%8C%96%E3%81%AF%E3%80%81%E5%8F%A4%E3%81%84%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%AE%20JavaScript%20%E3%81%AB%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B9%E3%83%91%E3%82%A4%E3%83%AB%E3%81%99%E3%82%8B%E3%81%A8%E3%81%84%E3%81%86%E6%84%8F%E5%91%B3%E3%81%AE%20TypeScript%20%E3%81%AE%E7%94%A8%E8%AA%9E%E3%81%A7%E3%81%99%E3%80%82)するかを指定する。targetとして指定した値に応じてlibのデフォルト値が変わる。
- moduleによって、モジュール機構を指定する。例えば、moduleをnodeXXに指定した場合モジュール機構はcommonjs、moduleをesXXに指定した場合モジュール機構はesmになる。
  - TypeScriptのmoduleは[沼](https://zenn.dev/uhyo/articles/typescript-module-option)なので、あまり深入りしない方が良い。

## .tsファイルをトランスパイル後の.jsファイルを、ブラウザやNode.js上では実行できない問題

モジュール機構をesmになるようにしても、ブラウザ上では実行できずエラーとなる。

```bash
npx http-server es2022.es2022/
```

ブラウザで http://localhost:8080/ へアクセスすると、http://localhost:8080/hello が存在しないというエラーとなる。

同様に、Node.jsでも実行できない。

```bash
% node es2022.es2022/main.js
node:internal/modules/esm/resolve:255
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/suzukitaito/git/front-sandbox/tsconfig_target_and_module/es2022.es2022/hello' imported from /Users/suzukitaito/git/front-sandbox/tsconfig_target_and_module/es2022.es2022/main.js
    at finalizeResolution (node:internal/modules/esm/resolve:255:11)
    at moduleResolve (node:internal/modules/esm/resolve:908:10)
    at defaultResolve (node:internal/modules/esm/resolve:1121:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:396:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:365:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:240:38)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:85:39)
    at link (node:internal/modules/esm/module_job:84:36) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///Users/suzukitaito/git/front-sandbox/tsconfig_target_and_module/es2022.es2022/hello'
}

Node.js v20.10.0
```

理由は、TypeScriptにおいてはファイル拡張子を省略可能だが、Node.jsとブラウザでサポートされているESMにおいては拡張子を省略不可能なため。[参考](https://qiita.com/masato_makino/items/8451bf4e62ad27823af1#import%E3%81%A8%E6%8B%A1%E5%BC%B5%E5%AD%90)