# requirements
- [ ] run as a github site
- [x] serve markdown and html pages
- [ ] tell who we are
- [ ] onboard and support cooperators
    - how to participate (OC, discord, consider.it, github)
    - using rev (metamask, links to actions)
- [ ] active rholang text box like rgov
- [ ] rholang componants: fields, code, pragma? in rholang directory
- [ ] on chain contnt
- [ ] markdown macros - macrhobot integration
- [ ] personal, group and global pages

##Build
```
yarn add cmark-gfm-js
yarn install

node md2html.js pages/filr.md >html/file.html
```
##Run
```
node web.jw
```
Browse to localhos:8080/?page=file
