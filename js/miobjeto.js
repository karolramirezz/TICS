const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 12000
  },

  {
    id: 2,
    nombre: "Mouse",
    precio: 300
  },

  {
    id: 3,
    nombre: "Teclado",
    precio: 800
  }

];
console.log("Voy a recorrer el array");

const longArray = productos.length;

setTimeout(() => {
console.log(`El tamaño es ${longArray}`);


console.table(productos, ["nombre"]);
productos.forEach((valor, index) => {
  console.log(index, valor.nombre)
  console.log(valor.precio)
  console.log("----");
});

let mensaje_estado = document.querySelector('#mensaje_estado');
console.log(mensaje_estado.textContent);
mensaje_estado.textContent = `Recorrí ${longArray} elementos`}, 3000);