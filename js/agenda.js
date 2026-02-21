let seguir = true;
let datos = [];

while(seguir) {
let opcion = parseInt(prompt("Escoge una opción\n1: Agregar Contacto\n2: Listar Contactos\n3: Actualizar Contacto\n4: Eliminar Contacto\n5: Salir del sistema"));
  switch(opcion) {
  case 1:
  alert("Escogiste 1");
  let nombre = prompt ("Ingresa tu nombre");
  let apellido = prompt ("Ingresa tu apellido");
  let edad = prompt ("Ingresa tu edad");
  let facultad = prompt ("Ingresa tu facultad");
  let telefono = prompt ("Ingresa tu telefono");

  const nuevoContacto = {
    n: nombre,
    a: apellido,
    e: edad,
    f: facultad,
    t: telefono
  };
  
  datos.push(nuevoContacto);
  console.table(datos);
    break;

  case 2:
  alert("Escogiste 2");
  for(let i = 0; i < datos.length; i++ ) {
    console.log(`Nombre: ${datos[i]}`)

  }
    break;
  case 3:
  alert("Escogiste 3");
    break;
  case 4:
    alert("Escogiste 4");
    break;
  case 5:
    alert("Escogiste 5");
    seguir = false;
    break;
  default:
    alert("no recibí nada");
  break;
} 
// agregar usuario con nombre, edad y telefono. Agregarlo a un objeto y después a un array.
}
