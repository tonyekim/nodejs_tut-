const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our homepage')
    }
    else if (req.url === '/about') {
        res.end('Welcome to about page')
    }
    else {
        res.end(`
        <h1>Opss!!!</h1>
        <p>We cant seem to find the page you are looking for</p>
        <a href='/ '>Back to home page</a>
        `)
    }
});

server.on('error', (error) => {
    console.error('Server error:', error);
});

server.listen(5000);