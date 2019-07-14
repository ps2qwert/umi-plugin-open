// ref:
// - https://umijs.org/plugin/develop.html


const open = require('open');


async function handleOpen(docs) {

    for (let index = 0; index < docs.length; index++) {
        await open(docs[index]);
    }

}


export default function(api, options) {

    // Example: output the webpack config
    api.chainWebpackConfig(config => {
        api.log.success('Done');
    });

    api.onDevCompileDone(({ isFirstCompile, stats }) => {
        let { docs } = options
        if (docs instanceof Array && docs.length > 0) {
            handleOpen(docs)
        }
    });

}