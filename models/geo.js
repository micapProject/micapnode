var validator = require('validator');
const ATRIBUTOS={
    "lat":validator.isFloat,
    "lng":validator.isFloat
};

module.exports.CreateGeo  =function (obj) {
    var newObj={};
    for(var x in ATRIBUTOS){
        var aux=ATRIBUTOS[x](obj[x]);
        if(!obj[x] || !aux  || aux["error"])
            if (aux["error"]){
                return aux;
            }
            else{
                return {"error":x+" invalido"};
            }
        else
            newObj[x] = obj[x];
    }
    return newObj;
};
