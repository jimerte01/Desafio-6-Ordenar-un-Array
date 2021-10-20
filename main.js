
const listaUtiles = [];
class Cuadernos{
    nombre;
    precio;
    stock;
    constructor (precio, nombre, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let CuadernoUno = new Cuadernos (17000, "Agenda", 15);
let CuadernoDos = new Cuadernos (4800, "Stickers",6);
let CuadernoTres = new Cuadernos (10500, "5 Materias", 21);
let CuadernoCuatro = new Cuadernos (2800, "Argollado", 7);

//Se agregan los objetos a listaUtiles
listaUtiles.push (CuadernoUno);
listaUtiles.push (CuadernoDos);
listaUtiles.push (CuadernoTres);
listaUtiles.push (CuadernoCuatro);

// Para mostrar los objetos de la listaUtiles;
console.log("Lista de Cuadernos: ")
for (let i=0; i<listaUtiles.length;i++){
    console.log(listaUtiles[i])
}

// ordenando con el metodo sort por nombre

console.log("Lista de Cuadernos Ordenada por orden Alfabetico del nombre: ")

listaUtiles.sort(function (a, b) {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    return 0;
  });

  for (let i=0; i<listaUtiles.length;i++){
    console.log(listaUtiles[i])
}