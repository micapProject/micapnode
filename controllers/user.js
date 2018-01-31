'use  strict'

var User=require('../models/user'),
    conf=require('../config/global');
const MongoClient = require('mongodb').MongoClient,
      assert = require('assert'),
      collection="user";



module.exports.save=function(req,res){
    var par=req.body;
    if(par.nombre && par.apellido  && par.sexo){
        user=new User(par.nombre,par.apellido,par.sexo);
        MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
            assert.equal(null, err);
            console.log("Connected correctly to server");

            const db = client.db(conf.mongo.bd);
            // Insert a single document
            db.collection('warren').insertOne(user, function(err, r) {
                assert.equal(null, err);
                assert.equal(1, r.insertedCount);
                console.log("gozu");
                res.status(200).send({"user":"store"});
            });
        });
    }
}


