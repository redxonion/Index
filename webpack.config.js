// webpack.config.js
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

resolve: {
    plugins: [
        new TsConfigPathsPlugin(/* { tsconfig, compiler } */)
    ]
}
