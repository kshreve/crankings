var connect = require('connect');
connect.createServer(
    connect.static("crankings1")
).listen(8080);