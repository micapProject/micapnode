
module.exports.isEntero=function(x){
    return x.match(/^-?\d+$/);
};
module.exports.isReal=function(x){
    return x.match(/^-?\d+(\.\d+)?$/);
};
module.exports.isNombre=function(x){
    return x.match(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{5,40}$/);
};
module.exports.isEmail=function(x){
    return x.match(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/);
};
module.exports.isPassword=function(x){
    return x.match(/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ$@$!%*?&.]{8,40}$/);
};
module.exports.isId=function(x){
    console.log(x)
    return x.toString().match(/^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ]{24}$/);
};
module.exports.isSexo=function(x){
    return (x=='hombre'||x=='mujer');
};
module.exports.isRole=function(x){
    return (x=='R_user'||x=='R_admi'||x=='R_vendedor');
};

