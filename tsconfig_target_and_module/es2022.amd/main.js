define(["require", "exports", "./hello"], function (require, exports, hello_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    const allowFunc = () => {
        console.log("This is allow func");
    };
});
