// usage: node src/md2html.js pages/home.md >html/home.html
let filename = process.argv[2]
fs = require('fs')
data = fs.readFileSync(filename, 'utf8')
const markdown = data
// console.log(data);
const gfm = require('cmark-gfm-js');
let html = gfm.convert(markdown);
console.log(html)
