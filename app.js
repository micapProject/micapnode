'use strict'
var express=require('express'),
    bodyParser=require('body-parser'),
    app=express(),
    routes=require('./rutes/user'),
    mongo=require('./database/conecion');


mongo.initDb(function (err) {})
//app
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',routes);
module.exports=app;