var http = require('http');

const PORT=8080; 

function handleRequest(request, response){
    response.end('<html><head> <title>Siva</title> </head> <body>It really Works!! Hi Siva: </body> </html>' );
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
