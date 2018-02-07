var validator = require('validator'),
    addre =           require('./addres');


names= {
    "name": validator.isAscii,
    "username": validator.isAscii,
    "email": validator.isEmail,
    "address": addre.IsAddres,
    "phone": validator.isAscii,
    "website": validator.isAscii,
}


module.exports.IsUser=function (obj) {
    for(x in names){
        if(!obj[x] || !names[x](obj[x]))
            return null
    }
    return obj;
}
