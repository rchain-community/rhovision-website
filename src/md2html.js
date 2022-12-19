// usage: node src/md2html.js pages/home.md >html/home.html
let filename = process.argv[2]
fs = require('fs')
const header = `<img src="https://cdn.discordapp.com/attachments/1045332990949077022/1054465023533138020/Untitled_drawing.jpg" height=75>
`
data = fs.readFileSync(filename, 'utf8')
const footer = ""
const markdown = data
// console.log(data);
const gfm = require('cmark-gfm-js');
let html = header + gfm.convert(markdown) + footer ;
console.log(html)
