

var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("../angularjs"));

app.useconnect.static(__dirname + '/public'));
app.listen(process.env.PORT || 5000);
