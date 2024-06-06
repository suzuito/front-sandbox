"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("./hello");
(0, hello_1.sayHello)();
class A {
    hoge;
    fuga;
    constructor(hoge = "a", fuga = 100) {
        this.hoge = hoge;
        this.fuga = fuga;
    }
    bar() {
        return true;
    }
}
const a = new A();
let b = a;
var c = 0.01;
class B extends A {
    constructor() {
        super();
    }
    foo() { }
    bar() {
        return super.bar();
    }
}
