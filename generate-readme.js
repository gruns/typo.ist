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
const TurndownService = require('turndown')

const cl = console.log
const turndown = new TurndownService()


function polishTouchdownOutput (markdown) {
    // Remove the title and CSS in the first two lines.
    const lines = markdown.split(/\r?\n/)
    lines.splice(0, 2)
    return lines.join('\n')
}


;(async function main () {
    const html = (await fs.readFile('index.html')).toString()
    const markdown = turndown.turndown(html)

    const output = polishTouchdownOutput(markdown)
    await fs.writeFile('README.md', output)

    cl(output)
    cl('\n')
    cl('----------------------------------------')
    cl('> Wrote the above output to README.md. <')
})()