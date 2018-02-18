var validator = require('../tools/validators'),
    objectId=require('mongodb').ObjectID;

const id = "_id",
    username = "username",
    email = "email",
    password = "password",
    persona = "persona",
    role="role";

module.exports.create = function (obj) {
    var res = {};
    if(!obj[id])res[id]=new objectId();
    else
        if (obj[id] && validator.isId(obj[id])) res[id] = obj[id];
        else return {"error": id + "invalido"};

    if (obj[username] && validator.isNombre(obj[username])) res[username] = obj[username];
    else return {"error": username + "invalido"};

    if (obj[email] && validator.isEmail(obj[email])) res[email] = obj[email];
    else return {"error": email + "invalido"};

    if (obj[password] && validator.isPassword(obj[password])) res[password] = obj[password];
    else return {"error": password + "invalido"};


    if(obj[persona])
        if(validator.isId(obj[persona])) res[persona] = obj[persona];
        else return {"error": persona + "invalido"};

    if(obj[role])
        if(validator.isRole(obj[role])) res[role] = obj[role];
        else return {"error": role + "invalido"};
    else
        res[role] = "R_user";

    return res;
};
module.exports.attr={
    id :"_id",
    username : "username",
    email : "email",
    password : "password",
    persona : "persona",
    role:"role"
}