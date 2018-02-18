

k={
    "username"  :"warren",
    "email"     :"aroni@ww.com",
    "password"  :"warrencio"
}

function gen(obj){

    str='';

     str=str+ `var validator = require('../tools/validators');
const ${obj[0]}="${obj[0]}"`
    var k=0;
    for( var x of obj){
        if(k++==0)continue;
        str=str+`,
     ${x}="${x}"`;
    }
    str=str+`;
module.exports.create=function(obj){
    var res={};`;
    for(var x of obj){
        str=str+`   if(obj[${x}] && validator.isNombre(obj[${x}]))res[${x}]=obj[${x}];
    else return {"error":${x}+"invalido"};`
    }
    console.log(str+"};")
}
gen(["id","nombre","apellido","sexo","celular"])
var val=require('./validators')   ;
console.log(val.isId("5a85fff02029da11748c2977"))