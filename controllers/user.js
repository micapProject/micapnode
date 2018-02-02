'use  strict'
var User=require('../models/user');

module.exports.save=function(req,res){
    var mongo=require('../database/conecion'),
    db=mongo.conn;

    var par=req.body;
    if(par.nombre && par.apellido  && par.sexo){
        if (!db){
            console.log("iniciando de nuevo");
            mongo.initDb(function(err){});
        }
        if (db) {
            user=new User(par.nombre,par.apellido,par.sexo);
            var col =db.collection('counts').insertOne(user,function (err,r) {
                res.status(200).send({"user":"store"});
            });
        }
        else
            res.status(404).send({"user":"not store"});

    }
}


