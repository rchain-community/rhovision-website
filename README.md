# Requirements
- [x] Run as a github site
- [x] Serve markdown and html pages
- [x] Tell who we are
- [ ] Onboard and support cooperators
    - How to participate (OC, discord, consider.it, github)
    - Using rev (metamask, links to actions)
- [ ] Active rholang text box like rgov
- [ ] Rholang components: fields, code, pragma? in rholang directory
- [ ] On chain content
- [ ] Markdown macros - macrhobot integration
- [ ] Personal, group and global pages

## Build
```
yarn add cmark-gfm-js
yarn install

node src/md2html.js pages/home.md >html/home.html
```
## Run
```
node web.jw
```
Browse to localhos:8080/?page=file
