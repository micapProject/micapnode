var jwt=require('jwt-simple'),
    moment=require('moment'),
    User=require('../models/user'),
    clave="warren_ci_to_papirico_rey";


module.exports.createToken=function(obj){
    var payload=User.create(obj);
    payload.password=undefined;
    payload["iat"]=moment().unix();
    payload["exp"]=moment().add(30,'days').unix;

    return jwt.encode(payload,clave);
}