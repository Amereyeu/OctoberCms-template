let mix = require("laravel-mix");

mix
	.options({
		processCssUrls: false,
		autoprefixer: {
			enabled: true,
			options: {
				overrideBrowserslist: ["last 2 versions", "> 1%"],
				cascade: true,
				grid: true
			}
		}
	})
	.setPublicPath("/")
	.sass("src/scss/app.scss", "assets/css/styles.css")
	.js("src/js/app.js", "assets/js/scripts.js")
	.version();

mix.browserSync({
	//address of your local server
	proxy: "mysite.local",
	host: "mysite.local",
	//show notifications when reloading
	notify: false,
	//files to watch
	files: ["**/*.htm", "assets/css/styles.css", "assets/js/scripts.js"]
});
