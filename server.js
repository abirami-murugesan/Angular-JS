

// var connect = require('connect'),
//     serveStatic = require('serve-static');

// var app = connect();

// app.use(serveStatic("../angularjs"));

// app.use(connect.static(__dirname + '/index.html'));

// app.use(serveStatic('../angularjs'),  {default: 'angular.min.js'}); app.listen(process.env.PORT || 3000); 
// app.listen(5000);

var express = require('express');  
var app = express();  
  
app.use(express.static("my-app"));  
  
app.get('/', function (req, res) {  
    res.redirect('/index.html');  
});  

app.get('/', function(req, res){
    res.sendFile(__dirname + '/'+'index.html');
    console.log("----------------");
});
  
app.listen(8080, 'localhost');  
console.log("MyProject Server is Listening on port 8080");  
