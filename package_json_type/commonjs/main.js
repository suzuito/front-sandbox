// Node.jsは本main.jsファイルをCommonJs形式のモジュールとして扱う。

// 本main.jsの最も近い親ディレクトリのpackage.jsonのtype=commonjsを指定しているため
// Node.jsは本main.jsファイルをCommonJs形式のモジュールとして扱う。
// よって、他のCommonJs形式のモジュールをrequireできる。
const sayFuga = require("./fuga").sayFuga;

// NG。
// 本main.jsの最も近い親ディレクトリのpackage.jsonのtype=commonjsを指定しているため
// Node.jsは本main.jsファイルをCommonJs形式のモジュールとして扱う。
// よって、importを使用できない。
// import { sayHoge } from "../esm/hoge";

sayFuga()