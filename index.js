const path = require('path');
const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
    let filePath = path.join(__dirname, 'HTML-pages', request.url === '/' ? 'index.html': request.url)
    let contentType = getContentType(filePath) || 'text/html'
    let emptyPagePath = path.join(__dirname, 'HTML-pages', '404.html')
    fs.readFile(filePath, 'utf-8', (err, content) => {
        if  (err){
            if (err.code === 'ENOENT'){
                fs.readFile(emptyPagePath, 'utf-8', (err, content) => {
                    response.writeHead(200, {'Content-Type': contentType})
                    response.end(content)
                })
            }else{
                response.writeHead(500)
                response.end('A server error has occured')
            }
        }
        if(!err){
            response.writeHead(200, {'Content-Type': contentType})
            response.end(content)
        }
    })
})
const getContentType = (filePath) =>{
    let extname = path.extname(filePath)
    if (extname === '.js'){
        return 'text/javascript'
    }
    if (extname === '.css'){
        return 'text/css'
    }
    if (extname === '.png'){
        return 'image/png'
    }
    if (extname === '.jpg'){
        return 'image/jpg'
    }
}
const port = 4000;
server.listen(port, 'localhost', () =>{
    console.log("Server is running on port 4000");
})