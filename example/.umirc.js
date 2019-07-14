import { join } from 'path';

export default {
    plugins: [
        join(__dirname, '..', require('../package').main || 'index.js'), ['../src/index', {
            docs: [
                'https://www.baidu.com',
                'https://juejin.im/post/5d2a95836fb9a07ece67fddd',
                'https://juejin.im/post/5d2716ab5188257b775d35ba',
            ],

        }],
    ],

}