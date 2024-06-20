import http from 'http';

http.createServer((req, res) => {
    let url = req.url
    let method = req.method

    if (url === '/' && method === 'GET') {
        res.write('Hello World!');
        res.end();
    } else {
        res.write('Not Found!');
        res.end();
    }

}).listen(3000, () => {
    console.log('Server is running on port 3000');
});