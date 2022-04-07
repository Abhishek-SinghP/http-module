const http = require("http");   //es5

// creating a server
http.createServer((request, response)=>{
    // response.write("Hello World");
    response.write("<h1> Abhishek Singh </>");
    // closing the server
    response.end();
}).listen(3000)

http.createServer((request, response)=>{
    let user = {name : "Abhishek" , age : 26}
    response.write(JSON.stringify(user));
    response.end();
}).listen(3000);