const path = require('path');
const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/'){
    let filePath = path.join(__dirname, 'HTML-pages', 'index.html')
    fs.readFile(filePath, 'utf-8', (err, data)=>{
    response.writeHead(200,{'Content-Type':'text/html'})
    response.end(data)
    })
        
    }
    if (request.url === '/about.html'){
        let filePath = path.join(__dirname, 'HTML-pages', 'about.html')
        fs.readFile(filePath, 'utf-8', (err, data)=>{
        response.writeHead(200,{'Content-Type':'text/html'})
        response.end(data)
        })
            
        }
        if (request.url === '/contact.html'){
            let filePath = path.join(__dirname, 'HTML-pages', 'contact.html')
            fs.readFile(filePath, 'utf-8', (err, data)=>{
            response.writeHead(200,{'Content-Type':'text/html'})
            response.end(data)
            })
                
            }
})

const port = 4000;
server.listen(port, () =>{
    console.log("Server is running on port 4000");
})