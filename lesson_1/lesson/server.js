const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = (request, response) => {
  if (request.url === "/example") {
    response.writeHead(200);
    response.end("Success!");
  }

  response.writeHead(404);
  response.end("Not Found Error!");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
