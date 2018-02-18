'use  strict'
var User=require('../models/user'),
    bcryp=require('bcrypt-nodejs'),
    userToken=require('../tools/jwt')
    collection="user";

module.exports.save=function(req,res){
    var mongo=require('../database/conecion'),
        db=mongo.conn;
    //creamo usuario
    var user=User.create(req.body);
    //verificamos la vaidacion
    if(!user["error"]){
        if (!db)
            mongo.initDb(function(err){});
        if (db) {

            //verificaom emaill and username unicos
            var email={}
            email[User.attr.email]=user.email;
            var username={}
            username[User.attr.username]=user.username;

            db.collection(collection).find(
                {
                    $or:[
                        email,
                        username
                    ]
                }
            ).toArray(function (err,data) {
                if(err) res.status(500).send({"error":"Error en la peticion de usuarios"});
                if(data && data.length>0){
                    res.status(200).send({"error":"El usuario ya esta registrado"});
                }
                else{
                    //encriptamos la contraseña
                    bcryp.hash(user.password,null,null,(err,hash)=>{
                        user.password=hash;
                        db.collection(collection).insertOne(user,function (err) {
                            if(err) res.status(500).send({"error":"error al guardar"});
                            res.status(201).send({"user":"store"});
                        });
                    });
                }
            });
        }
        else
            res.status(500).send({"user":"not store"});
    }else
        res.status(400).send(user);
};

module.exports.list=function(req,res){
    var mongo=require('../database/conecion'),
        db=mongo.conn;

        if (!db)
            mongo.initDb(function(err){});

        if (db) {
            db.collection(collection).find({}).toArray(function (err,data) {
                if(err) res.status(500).send({"error":"error al buscar usuarios"});
                res.status(201).send(data);
            });
        }
        else
            res.status(500).send({"user":"not store"});

};
module.exports.login=function(req,res){
    var paramas=req.body;

    if(paramas[User.attr.email] && User.attr.password){
        var mongo=require('../database/conecion'),
            db=mongo.conn;
        if (!db)
            mongo.initDb(function(err){});

        var opc={};
        opc[User.attr.email]=paramas[User.attr.email];
        db.collection(collection).findOne(opc,function (err,data) {
            if(err) res.status(500).send({"error":"error al buscar usuarios"});
            if(data){
                bcryp.compare(paramas[User.attr.password],data.password,function (err,check){
                    console.log(check)
                    if(check){
                        res.status(200).send({
                            token:userToken.createToken(data)
                        });
                    }else{
                        console.log("escobidoo papap2");

                        res.status(404).send({"mensaje":"El usuario o contraseña es invalido"});
                    }
                });
            }
            else
                res.status(201).send({"mensaje":"El usuario o contraseña es invalido"});
        });
    }
    else
        res.status(200).send({"error":"email o passwoord vacios"});
};