'use  strict'
var User=require('../models/user'),
    collection="user"

module.exports.save=function(req,res){
    var mongo=require('../database/conecion'),
        db=mongo.conn;
    var user=User.Create(req.body);
    if(!user["error"]){
        if (!db)
            mongo.initDb(function(err){});

        if (db) {
           db.collection(collection).insertOne(user,function (err) {
                if(err)
                    res.status(500).send(err);
                res.status(201).send({"user":"store"});
            });
        }
        else
            res.status(500).send({"user":"not store"});
    }else{
        res.status(400).send(user);
    }
};
module.exports.list=function(req,res){
    var mongo=require('../database/conecion'),
        db=mongo.conn;

        if (!db)
            mongo.initDb(function(err){});

        if (db) {
            db.collection(collection).find({}).toArray(function (err,data) {
                if(err) throw err;
                res.status(201).send(data);
            });
        }
        else
            res.status(500).send({"user":"not store"});

};