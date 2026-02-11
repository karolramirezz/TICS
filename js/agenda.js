document.write("Una Agenda");

let opcion = parseInt(prompt("Escoge una opción: \n 1: Agregar, 2: Listar, 3: Salir"));

document.write(opcion)
let seguir = true;
let datos = [];

while(seguir) {
let opcion = parseInt(prompt("Escoge una opción: \n 1: Agregar, 2: Listar, 3: Salir"));
  switch(opcion) {
  case 1:
  alert("Escogiste 1");
  let nombre = prompt ("Ingresa tu nombre")
  datos.push(nombre);
  console.table(datos);
    break;
  case 2:
  alert("Escogiste 2");
    break;
  case 3:
  alert("Escogiste 3");
  seguir = false;
    break;
  default:
    alert("no recibí nada");
  break;
} 
}
