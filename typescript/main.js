import { arch } from "node:os";
import { sayHoge } from "./hoge.js";
import { sayFuga } from "./fuga.js";
console.log(arch());
sayHoge();
sayFuga();
