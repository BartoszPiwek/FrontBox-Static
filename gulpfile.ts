/*!
 * FrontBox-Static 0.0.2
 * Bartosz Piwek
 * https://github.com/BartoszPiwek/FrontBox-Static
 */

import { Gulpclass, SequenceTask, Task } from 'gulpclass/Decorators'
import { configBrowser } from './config'
import { FrontboxGulpCopy } from './frontbox/gulp/copy'
import { websiteDestinationPath } from './frontbox/gulp/frontbox'
import { FrontboxGulpHTML } from './frontbox/gulp/html'
import { FrontboxGulpScript } from './frontbox/gulp/script'
import { FrontboxGulpStyle } from './frontbox/gulp/style'

require('./frontbox/gulp/assets')

export const browserSync = require('browser-sync').create()

const argv = require('yargs').argv
const del = require('del')
let copy: FrontboxGulpCopy
let script: FrontboxGulpScript
let style: FrontboxGulpStyle
let html: FrontboxGulpHTML

@Gulpclass()
export class Gulpfile {
	@Task()
	async createServer(done) {
		if (argv.server) {
			return browserSync.init({
				...configBrowser,
				server: {
					baseDir: websiteDestinationPath,
				},
			})
		} else {
			done()
		}
	}

	@Task()
	async cleanWebsite(done) {
		if (argv.clean || argv.prod || argv.new) {
			return del.sync(websiteDestinationPath)
		} else {
			done()
		}
	}

	@SequenceTask()
	buildWebsite() {
		style = new FrontboxGulpStyle()
		html = new FrontboxGulpHTML()
		script = new FrontboxGulpScript()
		copy = new FrontboxGulpCopy()

		return [
			'cleanWebsite',
			'buildDevWebsite',
			'buildProdWebsite',
			'createServer',
		]
	}

	@Task()
	async buildDevWebsite() {
		await copy.start()
		await html.start()
		await script.start()
		await style.start()
	}

	@Task()
	async buildProdWebsite(done) {
		if (argv.prod) {
			await style.startProd()
		} else {
			done()
		}
	}

	@SequenceTask()
	buildFavicons() {
		return ['generateFavicons']
	}

	@SequenceTask()
	optimizeSvg() {
		return ['optimizeSvgBase', 'optimizeSvgColored']
	}

	@SequenceTask()
	optimizeAssets() {
		return ['optimizeImages', 'optimizeSvg']
	}
}
