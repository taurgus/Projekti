const http = require('http');
const port = 3000;
const url = require("url");

const server = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url).pathname
    
if (reqUrl == "/") {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.writeHead(200);
    res.write("Olet hakemistössä /");
    res.end();
}
else if (reqUrl == "/hello") {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8') // charset utf 8 = suomi
    res.writeHead(200);
    res.write("Olet hakemistossa /hello");
    res.end();

} else {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.writeHead(404);
    res.write("404 Not Found");
    res.end();
}
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});