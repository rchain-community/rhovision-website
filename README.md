# requirements
- run as a github site
- serve markdown and html pages
- onboard ans support cooperators
- active rholang text box like rgov
- rholang componants: fields, code, pragma? in rholang directory
- markdown macros - macrhobot integration
- personal, group and global pages
##build
yarn add cmark-gfm-js
yarn install

node md2html.js pages/filr.md >html/file.html
##Run
node web.jw

Browse to localhos:8080/?page=file
