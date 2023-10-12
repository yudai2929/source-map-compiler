const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "public", "index.html");
  const stat = fs.statSync(filePath);

  const { url } = req;

  res.writeHead(200, {
    "Content-Type": "text/html",
    "Content-Length": stat.size,
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
