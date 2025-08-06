const Animal=require("./Animal");

class Gato extends Animal{
    hablar(){
        console.log(`${this.nombre} esta maullando`)
    }
}
module.exports=Gato