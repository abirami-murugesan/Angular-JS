

// var connect = require('connect'),
//     serveStatic = require('serve-static');

// var app = connect();

// app.use(serveStatic("../angularjs"));

// app.use(connect.static(__dirname + '/index.html'));

// app.use(serveStatic('../angularjs'),  {default: 'angular.min.js'}); app.listen(process.env.PORT || 3000); 
// app.listen(5000);

var express = require('express');  
var app = express(); 
var path = require('path');
// var main = require(__dirname + '/'+'app.js')
  
app.use(express.static("my-app"));  
// app.use(express.static(__dirname + '/public'));
  
// app.get('/', function (req, res) {  
//     res.redirect('/');  
// });  
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, '/dist')));
// app.use("/login",express.static(__dirname + "/app/login"));
// app.use("/header",express.static(__dirname + "/app/header"));
// app.use("/user",express.static(__dirname + "/app/user"));


app.get('/', function(req, res){
    res.sendFile(__dirname + '/'+'index.html');
    console.log("----------------");
});
  
app.listen(process.env.PORT || 8080);  
console.log("MyProject Server is Listening on port 8080");  
