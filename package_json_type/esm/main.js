// Node.jsは本main.jsファイルをESM形式のモジュールとしてロードし扱えるようにする。
// 本main.jsの最も近い親ディレクトリのpackage.jsonのtype=moduleを指定しているため

// 他のESM形式のモジュールをimportできる。
import { sayHoge } from "./hoge.js";

// (?)これができるのがよくわからん。
// ../commonjs/fuga.jsは
// CommonJs形式のモジュールであるが
// 本main.jsの最も近い親ディレクトリのpackage.jsonのtype=moduleを指定しているため
// Node.jsはESMの形式のモジュールとしてロードし扱えるようにするから？
import { sayFuga } from "../commonjs/fuga.js";

// NG
// 本main.jsの最も近い親ディレクトリのpackage.jsonのtype=moduleを指定しているため
// 本main.jsファイルはESMのモジュールとして扱われる。
// よってrequireを使用できない。
// const sayFuga = require("../commonjs/fuga").sayFuga;

sayHoge()
sayFuga()