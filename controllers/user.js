'use  strict'
var User=require('../models/user'),
    user=new User();

module.exports.save=function(req,res){
    var mongo=require('../database/conecion'),
        db=mongo.conn;
    if(user.crear(req.body)){
        if (!db){
            console.log("iniciando de nuevo");
            mongo.initDb(function(err){});
        }
        if (db) {

            var col =db.collection('counts').insertOne(user.values,function (err,r) {
                res.status(200).send({"user":"store"});
            });
        }
        else
            res.status(404).send({"user":"not store"});
    }else{
        res.status(404).send({"user":"not store, daate invalidate"});
    }
}
module.exports.get=function(req,res){
    var name=req.params.name;
    var mongo=require('../database/conecion'),
        db=mongo.conn;

    if (!db){
        console.log("iniciando bd de nuevo");
        mongo.initDb(function(err){});
    }
    if (db) {
        console.log({nombre:name});
        db.collection('counts').findOne({nombre:name},function (err,r) {
            console.log("sss",r);
            res.status(200).send(r);
        })
    }
    else
        res.status(404).send({"user":"not store"});
}