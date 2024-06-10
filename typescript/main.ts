import { arch } from "node:os";
import { sayHoge } from "./hoge.js";
import { sayFuga } from "./fuga.js";
import {} from "./foo";

console.log(arch());
sayHoge();
sayFuga();