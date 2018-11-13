const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    plugins: [new VueLoaderPlugin()],
    entry: './src/Datepicker.vue',
    output: {
        path: path.resolve(__dirname, './lib'),
        library: 'datepicker',
        filename: 'index.js',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    module: {
        rules: [
            {test: /\.vue$/,
		 use: ['vue-loader'],
	    },
	    {test: /\.less$/, use: ['vue-style-loader', 'css-loader','less-loader']},
            {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
            {test: /\.(png|jpg|svg)$/, use: [
                {
                    loader: 'url-loader',
                    query: {
                        limit: 8192
                    }
                }
            ]}
        ]
    }
}
