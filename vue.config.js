module.exports = {
    pages: {
        home: {
            entry: 'src/pages/Home/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
        },
        about: {
            entry: 'src/pages/About/main.js',
            template: 'public/index.html',
            filename: 'about.html',
            title: 'About Page'
        },
        scssSt: {
            entry: 'src/pages/Scss/main.js',
            template: 'public/index.html',
            filename: 'scssSt.html',
            title: 'Scss Page'
        },
        tribute: {
            entry: 'src/pages/Tribute/main.js',
            template: 'src/pages/Tribute/tribute.html',
            filename: 'tribute.html',
            title: 'Tribute Page'
        },
        survey: {
            entry: 'src/pages/Survey/main.js',
            template: 'src/pages/Survey/survey.html',
            filename: 'survey.html',
            title: 'Survey Page'
        },
        product: {
            entry: 'src/pages/Product/main.js',
            template: 'src/pages/Product/product.html',
            filename: 'product.html',
            title: 'Product Page'
        }
    }
}