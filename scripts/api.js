/**
 * Create http server on development mode
 * to serve `data` folder as api
 */

const http = require('http')
const fs = require('fs');
const { resolve } = require('path');
const APP = 'http://localhost:3000'

// Create our server
var server;
server = http.createServer((req, res) => {
	// Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'GET' ) {
		console.log(req.url);
		const url = new URL(APP + req.url)
		let content
		if (url.searchParams.get('data')) {
			try {
				content = fs.readFileSync(
					`${resolve()}/data/${url.searchParams.get('data')}`,
					{ encoding: 'utf-8' }
				)
			} catch (error) {
				console.log(`Error 404 for ${url.searchParams.get('data')}`);
			}
		}
		res.writeHead(200);
		res.end(content);
		return;
	}
})

server.listen(3001, () => console.log('Api is served on port 3001'))