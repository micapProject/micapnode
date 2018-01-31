const http = require('http'),
    MongoClient = require('mongodb').MongoClient,
    app=require('./app'),
    conf=require('./config/global');

    var port = conf.app.port,
        hostname = conf.app.hostname;



MongoClient.connect('mongodb://localhost:27017/b1', function(err, db) {
    if (err) throw err;
    app.listen(port,()=>{
        console.log("servidoer creado");
    });
});
