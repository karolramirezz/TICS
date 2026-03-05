let seguir = true;
let datos = [];

while (seguir) {
  let opcion = parseInt(prompt("Escoge una opción\n1: Agregar Contacto\n2: Listar Contactos\n3: Actualizar Contacto\n4: Eliminar Contacto\n5: Salir del sistema"));
  switch (opcion) {
    case 1:
      alert("Escogiste 1: Agregar");
      let nombre = prompt("Ingresa tu nombre");
      let apellido = prompt("Ingresa tu apellido");
      let edad = prompt("Ingresa tu edad");
      let facultad = prompt("Ingresa tu facultad");
      let telefono = prompt("Ingresa tu telefono");

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
      alert("Escogiste 2: Listar");
      if (datos.length === 0) {
        alert("La lista esta vacía")
      } else {
        let cadenaContactos = "";
        for (let i = 0; i < datos.length; i++) {
          cadenaContactos += (i + 1) + ": " + datos[i].n + " " + datos[i].a + "\n";
        }
        alert(cadenaContactos);
      }
      break;
    case 3:
      alert("Escogiste 3: Actualizar");
      let editar = parseInt(prompt("Cuál número de contacto quieres editar?")) - 1;
      if (datos[editar]) {
        datos[editar].n = prompt("Nuevo nombre:", datos[editar].n);
        datos[editar].a = prompt("Nuevo apellido:", datos[editar].a);
        datos[editar].e = prompt("Nueva edad:", datos[editar].e);
        datos[editar].f = prompt("Nueva facultad:", datos[editar].f);
        datos[editar].t = prompt("Nuevo teléfono:", datos[editar].t);
        alert("Contacto actualizado");
      } else {
        alert("Este contacto no existe");
      }
      break;
    case 4:
      alert("Escogiste 4: Eliminar");
      let eliminar = parseInt(prompt("¿Cuál número de contacto quieres eliminar?")) - 1;
      if (datos[eliminar]) {
        datos.splice(eliminar, 1);
        alert("Contacto eliminado.");
      } else {
        alert("No se encontró el contacto.");
      }
      break;
    case 5:
      alert("Escogiste 5: Saliendo del sistema");
      seguir = false;
      break;
    default:
      alert("Opción invalida");
      break;
  }
}
