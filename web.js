const http = require('http');
const url = require('url');
const fs = require('fs');

const requestListener = function (req, res) {
	const queryObject = url.parse(req.url, true).query;
    //console.log(req.url);
    page = queryObject.page ? queryObject.page : "home";;
    console.log(page);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('html/'+page+'.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    return;
    }
    // :console.log(data);
    res.end(data);
});
}

const server = http.createServer(requestListener);
server.listen(8080);
