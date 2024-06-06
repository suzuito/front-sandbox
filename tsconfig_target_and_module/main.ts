import { sayHello } from "./hello";

sayHello();

class A {
    constructor(
        private hoge: string = "a",
        public fuga: number = 100,
    ) {}

    bar(): boolean {
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

    foo(): void {}
    bar(): boolean {
        return super.bar()
    }
}

const allowFunc = () => {
    console.log("This is allow func");
}