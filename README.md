# umi-plugin-open

[![NPM version](https://img.shields.io/npm/v/umi-plugin-open.svg?style=flat)](https://npmjs.org/package/umi-plugin-open)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-open.svg?style=flat)](https://npmjs.org/package/umi-plugin-open)

构建是打开项目相关的文档和链接

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-open', options],
  ],
}
```

## Options

### docs

需要打开文档的地址

1. Type : Array
2. Default : null

比如：
```
docs: [
    'https://www.baidu.com',
    'https://juejin.im/post/5d2a95836fb9a07ece67fddd',
    'https://juejin.im/post/5d2716ab5188257b775d35ba',
],
```

## LICENSE

MIT
