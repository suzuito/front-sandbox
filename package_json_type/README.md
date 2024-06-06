# package.jsonのtype

https://nodejs.org/api/packages.html#type

Node.jsが使用するmodule形式を指定する。

- (1)typeをmoduleと指定した場合、Node.jsは.jsファイルをESMのモジュールとしてロードする。
- (2)typeをcommonjsと指定した場合、Node.jsは.jsファイルをCommonJSのモジュールとして扱う。
- typeがない場合、(2)と同じ挙動となる。
