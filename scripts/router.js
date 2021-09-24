/**
 * Auto generate `router.tsx` in `scripts` folder whenever
 * parcel detect any changes inside `src/pages` folder.
 * 
 * Router powered by page.js since using solid-app-router
 * will result blank page in Cordova app
 */

const watcher = require('@parcel/watcher')
const { resolve } = require('path')
const glob = require('glob')
const fs = require('fs')

const routerScript = `import { createSignal, Component } from "solid-js"
import PageJS from "page"

const Router = () => {
	const [page, setPage] = createSignal<Component>()
	const Page = (path, component) => {
		PageJS(path, async () => {
			const page = (await component).default
			setPage(() => page)
		})
	}
	//@routes
	PageJS({ hashbang: true })
	return page
}

export default Router`

const generateRouter = () => {
	glob(`${resolve()}/src/pages/**/*.tsx`, (err, paths) => {
		const routes = []
		let raw = ''
		paths
		.map(path => path.replace(`${resolve()}/src/pages/`, ''))
		.forEach((file) => {
			const fileNoExt = file.replace('.tsx', '')
			let path = '/'
			switch (fileNoExt) {
				case ':_all':
					path = '*'
					break;
			
				default:
					// if parcel glob working with [] then use this
					// const match = fileNoExt.match(/:(.*)/)
					// if (match) {
					// 	path += fileNoExt.replace(match[0], `:${match[1]}`)
					// }
					// else {
					// 	path += fileNoExt
					// }
					path += fileNoExt.replace('index', '')
					break;
			}
			raw += `\tPage('${path}', import('../src/pages/${fileNoExt}'))\n`
			// routes.push(`\n{\n\tpath: '${path}',\n\tcomponent: lazy(() => import('../src/pages/${fileNoExt}'))\n}`)
		})

		// fs.writeFileSync(`${resolve()}/scripts/routes.ts`, `import { lazy } from "solid-js"\nexport default [${routes}]`)
		fs.writeFileSync(
			`${resolve()}/scripts/router.tsx`,
			routerScript.replace('	//@routes', raw)
		)
		console.log('Updated router.tsx')
	})
}

// Generate initial routes
generateRouter()

// Subscribe to events
if (process.argv[2] === '--watch') {
	watcher.subscribe(`${resolve()}/src/pages`, () => {
		generateRouter()
	})
}