const mix = require('laravel-mix');

mix.js('src/app.js', 'views/assets/js/')
    .sass('src/app.scss', 'views/assets/css/')

mix.browserSync({
    watch: true,
    files: [
        'views/**/*'
    ],
    proxy: 'http://localhost:3000/'
});

mix.options({
    processCssUrls: false
});