var express = require('express');
var app = express();
const userController = require('./controller/userController')

app.get('/', userController)