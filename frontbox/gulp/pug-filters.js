module.exports = (SETTINGS) => {
	const fs = require('fs'),
		path = require('path')

	return {
		printFilesLink: (path) => {
			let output = ''

			fs.readdirSync(`./public/${SETTINGS.version}/${path}`, {
				withFileTypes: true,
			}).forEach((file) => {
				let name = file.slice(0, -5)

				if (name !== 'index' && file.endsWith('.html')) {
					output += `<a class="block mt-5 mb-5" href="./${name}.html">${name}</a>`
				}
			})
			return output
		},

		/* https://github.com/BartoszPiwek/FrontBox-Static/wiki/PUG#filters */
		svg: (pug, args) => {
			const classes = `icon icon-${args.file} ${
				args.class ? args.class : ''
			}`.trim()

			const svg = fs.readFileSync(
				`./src/images/svg/${args.type ? args.type + '/' : ''}${
					args.file
				}.svg`,
				'utf8'
			)
			return svg.replace(`<svg `, `<svg class="${classes}"`)
		},

		'text-reverse': (block) => {
			return block.split('').reverse().join('')
		},

		pageName: (block) => {
			return block
		},
		escape: (block) => {
			return block
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;')
				.replace(/#/g, '&#35;')
				.replace(/\\/g, '\\\\')
				.replace(/\n/g, '<br>')
		},
	}
}
