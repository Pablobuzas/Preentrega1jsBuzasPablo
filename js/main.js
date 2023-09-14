


const obtenerNombreCompleto = (apellido,nombre) => {
    return apellido + " ," + nombre;
};

const obtenerDetalleDeRegistro = (surName,name,email,message) => {

    return (
        obtenerNombreCompleto (surName,name) +
        ", con correo electrónico: " +
        email +
        ", ha enviado el siguiente mensaje:" +
         + message
    );
}   

let respuestaUsuario = prompt("Querés simular un formulario de contacto?");
while (respuestaUsuario.trim().toUpperCase()  === "SI") {



let apellidos = prompt( "Escribe tu apellido");
let nombres = prompt ("Escribe tu nombre");
let correos = prompt ("Escribe tu correo electrónico");
let mensajes= prompt("Mensaje");

alert(
    "El usuario" + 
        obtenerDetalleDeRegistro(apellidos,nombres,correos,mensajes)
);


respuestaUsuario = prompt("Querés realizar una operación?");


}