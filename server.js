var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 8001;

app.get('/', function(req, res) {
    res.sendfile('./index.html');
});

app.get('/scrap', function(req, res) {
    res.send('scraping in progress');
    var results = require('./scrap');
    console.log(results);
});

app.use(express.static(__dirname));

app.listen(process.env.PORT || 8001, function() {
    console.log('Example app listening on port ' + process.env.PORT || 8001 + '!');
});
