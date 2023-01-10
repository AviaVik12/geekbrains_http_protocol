const http = require("http");
const fs = require("fs");

const host = "localhost";
const port = 8000;

const fileNames = fs.readdirSync("./files");

let fileList = [];

const requestListener = (request, response) => {
  if (request.url === "/get") {
    if (request.method !== "GET") {
      response.writeHead(405);
      response.end("HTTP method not allowed");
    }

    response.writeHead(200);
    fileNames.forEach((file) => {
      fileList.push(file);
    });
    // console.log(fileList.join(", "));
    response.end(fileList.join(", "));
  }

  if (request.url === "/delete") {
    if (request.method !== "DELETE") {
      response.writeHead(405);
      response.end("HTTP method not allowed");
    }

    response.writeHead(200);
    response.end("Success!");
  }

  if (request.url === "/post") {
    if (request.method !== "POST") {
      response.writeHead(405);
      response.end("HTTP method not allowed");
    }

    response.writeHead(200);
    response.end("Success!");
  }

  if (request.url === "/redirect") {
    if (request.method !== "GET") {
      response.writeHead(405);
      response.end("HTTP method not allowed");
    }

    response.writeHead(301);
    response.end("Resource is now permanently available at /redirected");
  }

  response.writeHead(404);
  response.end("Not Found Error");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
