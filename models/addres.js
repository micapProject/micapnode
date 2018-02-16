var validator = require('validator'),
    geo=require('./geo');
const ATRIBUTOS={
    "street": validator.isAscii,
    "suite": validator.isAscii,
    "city": validator.isAscii,
    "zipcode": validator.isNumeric,
    "geo": geo.Create
}

module.exports.Create=function (obj) {
    var newObj={};
    for(var x in ATRIBUTOS){

        var aux=ATRIBUTOS[x](obj[x]);
        if(!obj[x] || !aux  || aux["error"])
            if (aux["error"]){
                aux["error"]=aux["error"]+" in "+x;
                return aux;
            }
            else{
                return {"error":x+" invalido"};
            }
        else
            newObj[x] = obj[x];
    }
    return newObj;
}
