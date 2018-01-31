'use strict'
var express=require('express'),
    UserController=require('../controllers/user');

var api=express.Router();


api.post("/user",UserController.save);
module.exports=api