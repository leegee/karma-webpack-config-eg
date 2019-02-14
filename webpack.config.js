const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
        sourceMapFilename: '[name].[hash:8].map',
        chunkFilename: '[id].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /.m?js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: "babel-loader"
            },
        ]
    }
};