'use strict'
var express=require('express'),
    UserController=require('../controllers/user');

var api=express.Router();
api.post("/user",UserController.save);
api.get("/user",UserController.list);

module.exports=api