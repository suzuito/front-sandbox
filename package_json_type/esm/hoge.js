// Node.jsは本main.jsファイルをESM形式のモジュールとしてロードし扱えるようにする。
// 本main.jsの最も近い親ディレクトリのpackage.jsonのtype=moduleを指定しているため
export function sayHoge() {
    console.log("hoge");
}