const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
  let path = "./views/";
  let statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  console.log(req.url);

  switch (req.url) {
    case "/":
      path += "index.html";
      statusCode = 200

      break;
    case "/about":
      path += "about.html";
        statusCode = 200;
      break;
    case "/contact":
      path += "contact.html";
        statusCode = 200;
      break;
    default:
      path += "404.html";
        statusCode = 404;
      break;
  }

  res.statusCode = statusCode
  fs.readFile(path, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

server.listen(5050, "localhost", () => {
  console.log("Server is listening on port 5050");
	console.log("Still listening");
});
