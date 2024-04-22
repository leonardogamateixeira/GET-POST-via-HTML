var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.send('test http server with express');
});

app.get('/welcome', function(req, res){
    res.send('http server with express');
});

app.use(function(req, res, next) {
    res.status(404).send("erro 404 parseru")
});

app.listen(3000, function(){
    console.log('a porta 3000 está online')
});