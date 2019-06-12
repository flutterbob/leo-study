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
        }
    }
}