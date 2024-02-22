//Moduulit
var http = require('http');
var fs = require("fs");

//palvelinportti
const PORT = process.env.PORT || 3000;

const server = http.createServer(function (request, response) {
    try {
    const data = fs.readFileSync('./example.txt', 'utf8');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end(); 
}
catch (err) {
    console.error(err);
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write("File not found");
    response.end(); 
}

});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


