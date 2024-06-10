// ES Moduleなimport記法
import { a as a1FromESM } from "./module_like_esm.mjs";
import os1 from "node:os";
// CommonJS Moduleなimport記法
// Node.jsのCommonJS Moduleとはちょっと違うけど、TypeScriptにおいてはこう書くらしい
// https://www.typescriptlang.org/docs/handbook/modules/reference.html#export--and-import--require
import a2FromCommonJS = require("./module_like_commonjs.cjs");
import os2 = require("node:os");

console.log(a1FromESM);
console.log(a2FromCommonJS.a);
console.log(os1.arch());
console.log(os2.arch());