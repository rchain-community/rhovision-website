# Requirements
- [x] Serve markdown and html pages
- [ ] Tell who we are
    - [ ] OC content
    - [ ] Original RChain content?
- [ ] Onboard and support cooperators
    - How to participate (OC, discord, consider.it, github)
    - new Discord? (Steve to setup, Peter + Steve admin)
    - new Telegram (Peter to setup, Steve + Peter to admin)
    - Using rev (metamask, links to actions - rgov component)
- [ ] Active rholang text box like rgov (iframe or javascript code)
    - [ ] Embedded Rholang components: fields, code, pragma? in rholang directory
- [ ] On chain content
    - Rdrive (later)
- [ ] Markdown macros - macrhobot integration (future)
- [ ] Personal, group and global pages (future)

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
