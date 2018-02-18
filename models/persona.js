var validator = require('../tools/validators');
    ObjectID=require('mongodb').ObjectID;
const id = "_id",
    nombre = "nombre",
    apellido = "apellido",
    sexo = "sexo",
    celular = "celular";

module.exports.create = function (obj) {
    var res = {};
    if(!obj[id])res[id]=new ObjectID();
    else
        if (obj[id] && validator.isId(obj[id])) res[id] = obj[id];
        else return {"error": id + "invalido"};

    if (obj[nombre] && validator.isNombre(obj[nombre])) res[nombre] = obj[nombre];
    else return {"error": nombre + " invalido"};

    if (obj[apellido] && validator.isNombre(obj[apellido])) res[apellido] = obj[apellido];
    else return {"error": apellido + " invalido"};

    if (obj[sexo] && validator.isSexo(obj[sexo])) res[sexo] = obj[sexo];
    else return {"error": sexo + " invalido"};

    if (obj[celular] && validator.isEntero(obj[celular])) res[celular] = obj[celular];
    else return {"error": celular + "   invalido"};
    return res;
};
