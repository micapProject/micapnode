const mongo = require('mongodb');
      MongoClient = mongo.MongoClient;


mongo.Promise = global.promise;

mongo.connect('mongodb://localhost:27017/b1', {}).then(() => {
    console.log("si")
}).catch(e => console.log("error"));
