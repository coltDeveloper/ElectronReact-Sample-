const path = require('path');

module.exports = {
    entry: './src/index.js', // Replace with your entry file
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    mode: 'development', // Change to 'production' when you're ready to deploy
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'inline-source-map', // Useful for debugging in development mode
    watch: true, // Automatically recompile when files change
};
