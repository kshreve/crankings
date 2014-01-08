var app = require('http').createServer(handler)
, fs = require('fs')

app.listen(process.env.PORT || 8001);

function handler (req, res) {
    fs.readFile('index.html',
    function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        
        res.writeHead(200, {'Content-Type': 'text/html', "Content-Length": data.length});
        res.end(data);
    });
}