const watcher = require('@parcel/watcher')
const { resolve } = require('path')
const glob = require('glob')
const fs = require('fs')

const generateRouter = () => {
	glob(`${resolve(__dirname)}/../src/pages/**/*.tsx`, (err, paths) => {
		const routes = []
		paths
		.map(path => path.replace(`${resolve()}/src/pages/`, ''))
		.forEach((file) => {
			const fileNoExt = file.replace('.tsx', '')
			let path = '/'
			switch (fileNoExt) {
				case ':...all':
					path = '*all'
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
			routes.push(`\n{\n\tpath: '${path}',\n\tcomponent: lazy(() => import('./pages/${fileNoExt}'))\n}`)
		})

		fs.writeFileSync(`${resolve(__dirname)}/../src/routes.ts`, `import { lazy } from "solid-js"\nexport default [${routes}]`)
		console.log('Updated routes.ts')
	})
}

// Generate initial routes
generateRouter()

// Subscribe to events
watcher.subscribe(`${resolve(__dirname)}/../src/pages`, () => {
	generateRouter()
})