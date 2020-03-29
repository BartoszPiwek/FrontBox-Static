<h1>
	<strong>FrontBox Static</strong> <small>by Bartosz Piwek</small>
</h1>

Static WWW builder tool. Use prepared html templates, include necessary element style and javascript behaviors, write own code using helpfull functions, speed up work with snippets.

## Table of contents

-   [Preview/Status](#previewstatus)
-   [Information](#information)
-   [Requirements](#requirements)
-   [Gulp](#gulp)
-   [Projekt Tree](#projekt-tree)
-   [Testing Tools](#testing-tools)
-   [Bugs](#bugs)

## Preview/Status

<table>

<tr>
	<td>
		Version
	</td>
	<td>
		Status
	</td>
</tr>

<tr>
	<td>
		<p><a href="https://quirky-perlman-434ce5.netlify.com">Development</a></p>
	</td>
<td>

[![Netlify Status](https://api.netlify.com/api/v1/badges/ad028d61-7253-4819-a571-350e3acd37a5/deploy-status)](https://app.netlify.com/sites/quirky-perlman-434ce5/deploys)

</td></tr><tr>
	<td>
		<p><a href="https://tender-pasteur-b2164f.netlify.com">Productive</a></p>
	</td>
<td>

[![Netlify Status](https://api.netlify.com/api/v1/badges/7bf6c2d1-2d28-42b2-86d2-2c04fe70d4a1/deploy-status)](https://app.netlify.com/sites/tender-pasteur-b2164f/deploys)

</td></tr><tr>
	<td>
		<p><a href="https://vigorous-austin-c1164f.netlify.com/">Documentation</a></p>
	</td>
<td>

[![Netlify Status](https://api.netlify.com/api/v1/badges/b492ef35-2480-45e6-8420-b7926e588f1f/deploy-status)](https://app.netlify.com/sites/vigorous-austin-c1164f/deploys)

</td></tr></table>

## Information

<table>
	<tr>
		<td>HTML</td>
		<td><a href="https://pugjs.org/">Pug</a></td>
	</tr>
	<tr>
		<td>CSS</td>
		<td><a href="https://sass-lang.com">SCSS</a></td>
	</tr>
	<tr>
		<td>JavaScript</td>
		<td><a href="http://browserify.org">Browserify</a>/<a href="https://www.typescriptlang.org">TypeScript</a></td>
	</tr>
	<tr>
		<td>Task runner</td>
		<td><a href="https://gulpjs.com">Gulp</a></td>
	</tr>
	<tr>
		<td>Version</td>
		<td>0.0.1</td>
	</tr>
</table>

<br>

[![](frontbox/gitfiles/section-requirements.png)](#)

## Requirements

<table>
	<tr>
		<td><a href="https://nodejs.org/en/">Node.js</a></td>
		<td>JavaScript run-time environment</td>
	</tr>
	<tr>
		<td><a href="https://gulpjs.com">Gulp</a></td>
		<td>The streaming build system</td>
	</tr>
	<tr>
		<td><a href="https://yarnpkg.com/en/docs/install">Yarn</a></td>
		<td>Fast, reliable, and secure dependency</td>
	</tr>
	<tr>
		<td><a href="https://code.visualstudio.com">Visual Studio Code</a></td>
		<td>IDE</td>
	</tr>
	<tr>
		<td><a href="https://github.com/sds/scss-lint">scss-lint</a></td>
		<td> Configurable tool for writing clean, consistent SCSS</td>
	</tr>
</table>

### Visual Studio Code extensions

<table>
	<tr>
		<td><a href="https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint">Stylelint</a></td>
		<td>
			Modern CSS/SCSS/Less linter<br>
			yarn add global stylelint stylelint-config-property-sort-order-smacss stylelint-order stylelint-scss
		</td>
	</tr>
	<tr>
	<tr>
		<td><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Prettier</a></td>
		<td>Code formatter</td>
	</tr>
	<tr>
		<td><a href="https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets">Project Snippets</a></td>
		<td>Provide workspace/project level code snippets.</td>
	</tr>
</table>

### Additional

<table>
	<tr>
		<td><a href="https://sourceforge.net/projects/nikkhokkho/">FileOptimizer</a></td>
		<td>Advanced file optimizer featuring a lossless (no quality loss) file size reduction</td>
	</tr>
	<tr>
		<td><a href="http://www.imagemagick.org/script/download.php">ImageMagick</a></td>
		<td>Software suite to create, edit, compose, or convert bitmap images</td>
	</tr>
	<tr>
		<td><a href="https://github.com/google/ios-webkit-debug-proxy">iOS WebKit Debug Proxy</a></td>
		<td>Debug iOS device</td>
	</tr>
	<tr>
		<td><a href="https://www.apple.com/pl/itunes/download/">iTunes</a></td>
		<td>iOS drivers</td>
	</tr>
	<tr>
		<td><a href="https://chocolatey.org/">Chocolatey</a></td>
		<td>The package manager for Windows</td>
	</tr>
	<tr>
		<td><a href="https://www.navicat.com/en/products/navicat-for-mysql">Navicat fo MySQL</a></td>
		<td>Relational database management system</td>
	</tr>
	<tr>
		<td><a href="https://winscp.net">WinSCP</a></td>
		<td>SFTP and FTP client for Microsoft Windows</td>
	</tr>
</table>

<br>

[![](frontbox/gitfiles/section-gulp.png)](#)

## Gulp

### Terminal tasks:

<table>
	<tr>
		<td>Generate website with server and automatic update after modifying files</td>
		<td>yarn start</td>
	</tr>
	<tr>
		<td>Generate favicons</td>
		<td>yarn favicon</td>
	</tr>
	<tr>
		<td>Create docs (<a href="https://github.com/kneath/kss" target="_blank">KSS</a>)</td>
		<td>yarn docs</td>
	</tr>
	<tr>
		<td>Debug task</td>
		<td>yarn test</td>
	</tr>
	<tr>
		<td>Change version to productive</td>
		<td>--prod</td>
	</tr>
	<tr>
		<td>Watch files</td>
		<td>--watch</td>
	</tr>
	<tr>
		<td>Create server</td>
		<td>--server</td>
	</tr>

</table>

<br>

[![](frontbox/gitfiles/section-tree.png)](#)

## Projekt Tree

<pre style="white-space: pre-wrap; font-family: monospace; line-height: 1.26;">
└─── public/                              | Output generated website folder
    ├─── prod/
    └─── dev/
└─── src/
    ├─── audio/
    ├─── fonts/
    └─── images/
        ├─── favicons/                    | Generated favicons folder
        ├─── svg/                         | SVG files folder
        ├─── cookies.png                  | Cookies image for TS Class InformationCookie
        ├─── favicon.png                  | Favicon image for Gulp <a href="https://github.com/RealFaviconGenerator/gulp-real-favicon">gulp-real-favicon</a>
        ├─── logo.png                     | Site logo image
        └─── placeholder.png              | Placeholder image for Plugin <a href="https://github.com/verlok/lazyload">vanilla-lazyload</a>
    └─── scripts/
        ├─── bootstrap/                   | FrontBox modules folder
        ├─── plugins/                     | Custom js/ts plugins folder
        ├─── app.ts                       | Main script file
        └─── <i>other TS/JS files</i>
    └─── style/
        ├─── bootstrap/                   | FrontBox style folder
        ├─── modules/                     | Addon functions & style folder
        ├─── plugins/                     | Custom plugins style folder
        ├─── utilities/                   | Utilities style folder
        ├─── variables/                   | Folder with SCSS variables
        ├─── style.scss                   | Page style concat
        ├─── grid.scss                    | Grid style concat
        ├─── utilities.scss               | Utilities style concat
        └─── <i>other SCSS files</i>
    └─── template/
        ├─── includes/                    | Pug includes folder
        ├─── partials/                    | Separated Pug code
        └─── <i>other PUG files</i>
    └─── video/
└─── config.js                            | Main tasks config
</pre>

<br>

[![](frontbox/gitfiles/section-testing.png)](#)

## Testing Tools

<table>
	<tr>
		<td><a href="https://ngrok.com/">ngrok</a></td>
		<td>Secure tunnels to localhost</td>
	</tr>
	<tr>
		<td><a href="https://www.google.pl/chrome/browser/desktop/index.html">Google Chrome</a></td>
		<td>Debug Android browser (Debug USB)</td>
	</tr>
	<tr>
		<td><a href="https://www.ssllabs.com/ssltest/">SSL Labs</a></td>
		<td>Deep analysis of the configuration of any SSL web server on the public Internet.</td>
	</tr>
</table>

### Browser extensions

<table>
	<tr>
		<td><a href="https://chrome.google.com/webstore/detail/pixelparallel-by-htmlburg/iffnoibnepbcloaaagchjonfplimpkob">Pixel Perfect HTML</a></td>
		<td>Free, super handy and light HTML vs Design comparison tool for front-end developers that will help you code pixel perfect websites with ease.</td>
	</tr>
	<tr>
		<td><a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk">Lighthouse</a></td>
		<td>Lighthouse is an open-source, automated tool for improving the performance, quality, and correctness of your web apps.</td>
	</tr>
	<tr>
		<td><a href="https://chrome.google.com/webstore/detail/meta-seo-inspector/ibkclpciafdglkjkcibmohobjkcfkaef">META SEO inspector</a></td>
		<td>Useful to inspect the meta data found inside web pages, usually not visible while browsing.</td>
	</tr>
	<tr>
		<td><a href="https://chrome.google.com/webstore/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo">HTML5 Outliner</a></td>
		<td>Generates a navigable page outline with heading and sectioning elements</td>
	</tr>
	<tr>
		<td><a href="https://chrome.google.com/webstore/detail/waspinspector-analytics-s/niaoghengfohplclhbjnjheodgkejpih/">WASP</a></td>
		<td>Audit, validate and debug the data sent from their websites via tags and beacons</td>
	</tr>

</table>

<br>

[![](frontbox/gitfiles/section-bugs.png)](#)

## Bugs

Feel free to report:
<a href="https://github.com/BartoszPiwek/FrontBox-Static/issues/new?labels=bug">create bug issues</a>
