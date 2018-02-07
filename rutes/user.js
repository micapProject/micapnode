'use strict'
var express=require('express'),
    UserController=require('../controllers/user');

var api=express.Router();


api.post("/user",UserController.save);
api.get("/user/:name",UserController.get);
api.delete("/user/:name",UserController.delete);
module.exports=api