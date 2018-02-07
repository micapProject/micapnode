var validator = require('validator');
addres={
    "street": validator.isAscii,
    "suite": validator.isAscii,
    "city": validator.isAscii,
    "zipcode": validator.isAscii,
    "geo": isGeo
}

function isGeo(obj) {
    lat=obj["lat"];
    lng=obj["lng"];
    if(!lat  || !lng || !validator.isFloat(lat) || !validator.isFloat(lng))return false;
    return true;
}

module.exports.IsAddres=function (obj) {
    for(x in addres){
        if(!obj[x] || !addres[x](obj[x])){
            console.log(x)
            return null
        }
    }
    return obj;
}


