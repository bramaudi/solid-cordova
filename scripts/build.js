const path = require('path')
const fs = require('fs')

let html = fs.readFileSync(`${path.resolve(__dirname)}/../dist/index.html`, { encoding: 'utf-8' })
const matches = html.match(/<script[\s\S]*?>[\s\S]*?<\/script>/gi)
const legacyTag = matches[1].replace(' nomodule=""', '')
html = html.replace(matches[0], '')
html = html.replace(matches[1], legacyTag)
fs.writeFileSync(`${path.resolve(__dirname)}/../dist/index.html`, html, { encoding: 'utf-8' })
console.log('Replaced successfuly');

const unusedJs = matches[0].replace(/<script(.*?)src="(.*?)"(.*?)>[\s\S]*?<\/script>/g, '$2')
fs.rmSync(`${path.resolve(__dirname)}/../dist/${unusedJs}`)
console.log('Removed unused js');
