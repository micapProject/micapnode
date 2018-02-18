var ac=require('./models/user');
var user=require('./models/persona');
o0={
    "surname":"warren",
    "email":"warren@wa.com",
    "password":"warrencio",

}

o1={
    "nombre":"warren",
    "apellido":"ARONISOTO",
    "sexo":"hombre",
    "celular":"984237480",
}


console.log(ac.create(o0))
console.log(user.create(o1))
