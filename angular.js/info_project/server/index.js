
/**
 * 	server/index.js
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

http.createServer((request, response) => {
	const staticDir = path.normalize(__dirname + '/../public');
	let filePath = path.normalize(staticDir + request.url);
	if (request.url == '/'){
		filePath = path.normalize(staticDir + '/index.html');
	}

	const extname = path.extname(filePath);
	let contentType = 'text/html'
	switch(extname){
		case '.js' :
			contentType = 'text/javascript';
			break;
		case '.css' :
			contentType = 'text/css';
			break;
		case '.json' :
			contentType = 'application/json';
			break;
		case '.png' :
			contentType = 'image/png';
			break;
		case '.jpg' :
			contentType = 'image/jpg';
			break;
		case '.wav' :
			contentType = 'audio/wav';
			break;
	}

	fs.readFile(filePath, (error, content) => {
		if(error){
			// file not found error
			if(error.code == 'ENOENT'){ 
				response.writeHead(404); 
				response.end("Page not found"); 
				response.end();
			} else {
				console.log(error);
				response.writeHead(500);
				response.end("Error: " + error.code);
			}
		} else {
			response.writeHead(200, { "Content-Type" : contentType });
			response.end(content,'utf-8');
		}
	})
}).listen(port);

console.log("Server is running on port: " + port);

