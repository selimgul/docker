const http = require('http');
const os = require("os");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(os.hostname());
}

const server = http.createServer(requestListener);
server.listen(2222);