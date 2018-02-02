'use strict'

class user{
    constructor() {
        this.names={
            nombre:"nombre",
            apellido:"apellido",
            sexo:"sexo"
        }
        this.values={}
    }

    crear(map){
        for(var k in this.names){
            var v=this.names[k];
            if(map[k]){
                this.values[k]=map[v];
            }else{
                return false;
            }
        }
        return true;
    }
}


module.exports=user;