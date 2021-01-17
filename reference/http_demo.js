const http = require('http');

// Create server object
http.createServer((req, res) => {
    //Write response to browser
    res.write(`Hello`);

    //end
    res.end();
}).listen(5000, () => console.log('server running'));



