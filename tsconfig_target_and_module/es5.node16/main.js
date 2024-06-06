"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
(0, hello_1.sayHello)();
var A = /** @class */ (function () {
    function A(hoge, fuga) {
        if (hoge === void 0) { hoge = "a"; }
        if (fuga === void 0) { fuga = 100; }
        this.hoge = hoge;
        this.fuga = fuga;
    }
    A.prototype.bar = function () {
        return true;
    };
    return A;
}());
var a = new A();
var b = a;
var c = 0.01;
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super.call(this) || this;
    }
    B.prototype.foo = function () { };
    B.prototype.bar = function () {
        return _super.prototype.bar.call(this);
    };
    return B;
}(A));
var allowFunc = function () {
    console.log("This is allow func");
};
