const prompt = require('prompt-sync')();

class UsuarioView{
    pedriDtaosUsuario(){
        const nombre=prompt('Nombre: ');
        const correo=prompt('Correo: ');
        const edad=parseInt(prompt('Edad: '));
        return {
            nombre,correo,edad
        }
    }
    mostarMensaje(msg){
        console.log(msg);
    }
    mostrarUsuarios(usuarios){
        console.log("\n..Lista de Usuario--\n")
        usuarios.forEach(u => {
            console.log(`\nNombre: ${u["nombre"]}, \nCorreo: ${u["correo"]}, \nEdad: ${u["edad"]}`)
        });
    }
}
module.exports=UsuarioView;