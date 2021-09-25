/**
 * Create http server on development mode
 * to serve `assets` folder as separate server
 */

const http = require('http')
const fs = require('fs');
const { resolve, extname } = require('path');
const APP = 'http://localhost:3000'

var server;
var mime = {
	gif: 'image/gif',
	jpg: 'image/jpeg',
	png: 'image/png',
	svg: 'image/svg+xml'
}

server = http.createServer((req, res) => {
	// Set CORS headers
	res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	console.log(req.url);
	if ( req.method === 'GET' ) {
		const url = new URL(APP + req.url)
		if (url.searchParams.get('data')) {
			try {
				const content = fs.readFileSync(
					`${resolve()}/assets/data/${url.searchParams.get('data')}`,
					{ encoding: 'utf-8' }
				)
				res.writeHead(200)
				res.end(content)
			} catch (error) {
				console.log(`Error 404 for ${url.searchParams.get('data')}`)
				res.setHeader('Content-Type', 'text/plain')
				res.statusCode = 404
				res.end('Not found')
			}
		}
		else if (url.searchParams.get('images')) {
			const file = `${resolve()}/assets/images/${url.searchParams.get('images')}`
			const s = fs.createReadStream(file)
			s.on('open', function () {
					res.setHeader('Content-Type', mime[extname(file).slice(1)])
					s.pipe(res)
			})
			s.on('error', function () {
				console.log(`Error 404 for ${url.searchParams.get('images')}`);
				res.setHeader('Content-Type', 'text/plain')
				res.statusCode = 404
				res.end('Not found')
			})
		}
	}
})

server.listen(3001, () => console.log('Serving assets on port 3001 ...'))