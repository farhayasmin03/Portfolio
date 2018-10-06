const http = require('http');

const request = require('request');
const port = 3000;
var express = require('express');

var app = express();
const bodyParser = require('body-parser');

var ejs = require('ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.use("*", function (req, res) {
    res.sendFile(path + "404.html");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});