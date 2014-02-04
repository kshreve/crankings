var connect = require('connect');
connect.createServer(
    connect.static("crankings1")
).listen(process.env.PORT || 8001);