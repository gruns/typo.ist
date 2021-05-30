#!/usr/bin/env node

//
// typo - Celerity in Email
//
// Ansgar Grunseid
// grunseid.com
// grunseid@gmail.com
//
// License: MIT
//

//
// This script generates a README.md file from the contents of
// index.html.
//

const fs = require('fs').promises
const cheerio = require('cheerio')
const TurndownService = require('turndown')

const cl = console.log
const turndown = new TurndownService()


const headerComment = `\n
[//]: # (//////////////////////////////////////////////////////////////////////)
[//]: #
[//]: # DO NOT MODIFY THIS FILE. Modify index.html and run generate-readme.js.
[//]: #
[//]: # (//////////////////////////////////////////////////////////////////////)
\n\n`

;(async function main () {
    const html = (await fs.readFile('index.html')).toString()
    const markdown = turndown.turndown(html)

    // Remove the title and CSS in the first two lines.
    const lines = markdown.split(/\r?\n/)
    lines.splice(0, 2)
    let body = lines.join('\n')

    // Replace the logo in markdown with the HTML <img> tag so the CSS
    // styles are included. It's impossible to size an SVG in markdown.
    const $ = cheerio.load(html)
    const $logo = $('img[src="logo.svg"]')
    body = body.replace('![typo](logo.svg)', $logo)

    const output = headerComment + body
    await fs.writeFile('README.md', output)

    cl(output)
    cl('\n')
    cl('----------------------------------------')
    cl('> Wrote the above output to README.md. <')
    cl('----------------------------------------')
})()
