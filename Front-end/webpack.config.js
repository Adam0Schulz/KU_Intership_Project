const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: "development",
    entry: {
        home: './src/pages/homePage/index.ts',
        about: './src/pages/aboutPage/index.ts',
        browse: './src/pages/browsePage/index.ts',
        404: './src/pages/404Page/index.ts',
        detail: './src/pages/detailPage/index.ts',
        connect: './src/pages/00backendInterfacePages/connectDatabasePage/index.ts',
        tables: './src/pages/00backendInterfacePages/searchTablesPage/index.ts',
        tableComposition: './src/pages/00backendInterfacePages/tableComposition/index.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: '.Front-end/dist',
        historyApiFallback: {
            rewrites: [
                { from: /^\/pometum\/home$/, to: '/home.html' },
                { from: /^\/home$/, to: '/home.html' },
                { from: /^\/$/, to: '/home.html' },
                { from: /^\/about$/, to: '/about.html' },
                { from: /^\/browse$/, to: '/browse.html' },
                { from: /^\/detail$/, to: '/detail.html' },
                { from: /^\/connect$/, to: '/connect.html' },
                { from: /^\/tables$/, to: '/tables.html' },
                { from: /^\/table-comp$/, to: '/tableComposition.html' },
                { from: /./, to: '/404.html' } // Redirects unmatched paths to a 404 page
            ]
        },
        // proxy: {
        //     '/ku': {
        //         target: 'https://cms.ku.dk',
        //         changeOrigin: true,
        //         secure: true,
        //         pathRewrite: {
        //             '^/ku/footer': '/menu-spippets/global-footer.html',
        //             '^/ku/header': '/menu-spippets/global-topmenu.html',
        //             '^/ku/top2menu': '/menu-spippets/global-second-level-menu.html'
        //         }
        //     }
        // }
    },
    optimization: {
        runtimeChunk: 'single',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/generalPageTemplate.html',
            filename: 'home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/generalPageTemplate.html',
            filename: '404.html',
            chunks: ['404']
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/generalPageTemplate.html',
            filename: 'about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/generalPageTemplate.html',
            filename: 'browse.html',
            chunks: ['browse']
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/generalPageTemplate.html',
            filename: 'detail.html',
            chunks: ['detail']
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/backendInterfacePageTemplate.html',
            filename: 'connect.html',
            chunks: ['connect']
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/backendInterfacePageTemplate.html',
            filename: 'tables.html',
            chunks: ['tables']
        }),
        new HtmlWebpackPlugin({
            template: './src/templates/backendInterfacePageTemplate.html',
            filename: 'tableComposition.html',
            chunks: ['tableComposition']
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@js': path.resolve(__dirname, './src/js'),
            '@gcss': path.resolve(__dirname, './src/global.css'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@img' : path.resolve(__dirname, './src/00test_img'),
            '@utils' : path.resolve(__dirname, "./src/utils.ts")
        },
    }
}