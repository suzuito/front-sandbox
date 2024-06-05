package.jsonの`type`が`commonjs`のとき、Node.jsはCommonJSモジュール機構を用いるようになる。

```bash
# OK
% node main1.js 
hello

# NG
% node main1.js
file:///Users/suzukitaito/git/front-sandbox/package_json_type/main1.js:1
const sayHello = require("./hello1").sayHello;
                 ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and '/Users/suzukitaito/git/front-sandbox/package_json_type/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
```

package.jsonの`type`が`module`のとき、Node.jsはESMモジュール機構を用いるようになる。

```bash
# NG
% node main1.js 
file:///Users/suzukitaito/git/front-sandbox/package_json_type/main1.js:1
const sayHello = require("./hello1").sayHello;
                 ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and '/Users/suzukitaito/git/front-sandbox/package_json_type/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.

# OK
% node main2.js
hello
```