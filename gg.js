var use=require('./models/user');
var gg={
    nombre:"warren",
    apellido:"aroni",
    edad:"656",
    addres:{
        street:"ff",
        suite:"ss",
        city:"ff",
        zipcode: "33",
        geo: {
            lat:"23.2ss5",
            lng:"556.3"
        }
    }
};


var h=use.Create(gg)
console.log(h)


c1={
    nombre:"ford",
    modelo:"focus"
}
c2={
    nombre:"ford",
    modelo:"focus"
}
console.log(c1)
