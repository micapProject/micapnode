'use strict'
var express=require('express'),
    bodyParser=require('body-parser'),
    app=express(),
    routes=require('./rutes/user');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/prueba',(req,res)=>{

    res.status(200).send({
        mesnsage:"eres un lucho"
    });
});
app.post('/prueba',(req,res)=>{

    res.status(200).send({
        mesnsage:"eres un lucho"
    });
});


app.use('/api',routes);
module.exports=app;