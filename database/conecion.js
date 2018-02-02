var MongoClient = require('mongodb').MongoClient,
    uri = 'mongodb://warren_x_x_x:alizonmelani123@cluster0-shard-00-00-ja9t8.mongodb.net:27017,cluster0-shard-00-01-ja9t8.mongodb.net:27017,cluster0-shard-00-02-ja9t8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

module.exports.conn=null;
module.exports.initDb=function (callback) {
    MongoClient.connect(uri, function(err, client) {
        module.exports.conn=client;
        console.log("conectado");
    });
}
