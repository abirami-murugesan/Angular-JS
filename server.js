

var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("../angularjs"));

// app.use(connect.static(__dirname + '/index.html'));

// app.use(serveStatic('../angularjs'),  {default: 'angular.min.js'}); app.listen(process.env.PORT || 3000); 
// app.listen(5000);
