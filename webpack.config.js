const path = require('path');

module.exports = {
    entry: './src/vaporwavely.js',
    output: {
        filename: 'vaporwavely.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Vaporwavely',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};