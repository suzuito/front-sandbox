// CommonJS Moduleなimport記法
// Node.jsのCommonJS Moduleとはちょっと違うけど、TypeScriptにおいてはこう書くらしい
// https://www.typescriptlang.org/docs/handbook/modules/reference.html#export--and-import--require
import a1FromCommonJS = require("./module_like_commonjs.cjs");
import os1 = require("node:os");
// ターゲットモジュールがES Moduleではダメ。
// import a1FromESM = require("./module_like_esm.mjs");

// ES Moduleなimport記法
// これできちゃうのか・・・ちょっと混乱する。
// import記法がES Moduleで、ターゲットのモジュールがCommonJS Moduleであれば良いらしい。
import a2FromCommonJS from "./module_like_commonjs.cjs";
import os2 from "node:os";
// ターゲットモジュールがES Moduleであるとエラーとなる。ややこしい。
// import { a as a2FromESM } from "./module_like_esm.mjs";

console.log(a1FromCommonJS.a);
console.log(a2FromCommonJS.a);
console.log(os1.arch());
console.log(os2.arch());