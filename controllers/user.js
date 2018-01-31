'use  strict'

var User=require('../models/user'),
    conf=require('../config/global'),
    mongo=require('../database/conecion'),
    db=mongo.db;

const MongoClient = require('mongodb').MongoClient,
      assert = require('assert'),
      collection="user";



module.exports.save=function(req,res){
    var par=req.body;
    if(par.nombre && par.apellido  && par.sexo){
        if (!mongo.db) {
            mongo.initDb(function(err){});

        }
        if (mongo.db) {
            user=new User(par.nombre,par.apellido,par.sexo);
            var col = mongo.db.collection('counts').insertOne(user,function (err,r) {
                assert.equal(null, err);
                assert.equal(1, r.insertedCount);
                res.status(200).send({"user":"store"});
            });
            // Create a document with request IP and current time of request
        } else {
            res.status(404).send({"user":"not store"});
        }
    }
}


