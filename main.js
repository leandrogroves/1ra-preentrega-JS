alert("Crea tu usuario");
const USUARIO = prompt("Ingrese un usuario en mayusculas").toUpperCase();
let CONTRASENA = prompt("Ingrese una contraseña de no más de 8 caracteres");

while (CONTRASENA.length > 8) {
  CONTRASENA = prompt("Contraseña demasiado larga. Ingrese una de no más de 8 caracteres");
}

const creadoUsuario = USUARIO;
const creadoContrasena = CONTRASENA;
const intentos = 5;
console.log(creadoUsuario, creadoContrasena);

alert("USUARIO CREADO");

function usuarioYcontrasena(creadoUsuario, creadoContrasena, intentos) {
  let ingrese = prompt("Ingrese su usuario creado en mayusculas");

  while ((ingrese !== creadoUsuario) && (intentos > 0)) {
    console.log(intentos);
    alert("Usuario incorrecto, te quedan " + intentos + " intentos");
    ingrese = prompt("Ingrese su usuario creado en mayusculas").toUpperCase();
    intentos--;
  }

  if (intentos === 0) {
    alert("No tienes mas intentos");
  } else {
    alert("Hola " + ingrese);
    let ingreseContrasena = prompt("Ingrese su contraseña");

    while ((ingreseContrasena !== creadoContrasena) && (intentos > 0)) {
      console.log(intentos);
      alert("Contraseña incorrecta, te quedan " + intentos + " intentos");
      ingreseContrasena = prompt("Ingrese su contraseña");
      intentos--;
    }

    if (intentos === 0) {
      alert("No tienes mas intentos");
    } else {
      alert("BIENVENIDOS A NUESTRO SITIO");
    }
  }
}

usuarioYcontrasena(creadoUsuario, creadoContrasena, intentos);  





