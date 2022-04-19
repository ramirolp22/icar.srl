export const productos = [
    {id: 1, nombre: "panel solar", precio: 200},
    {id:2, nombre: "bateria", precio: 100},
    {id:3, nombre: "conversor", precio: 50}
  ]
  
export const getFetch = new Promise((resolve, rejected) => {
    let url = productos
    if (url===productos) {
      setTimeout(() => {
        resolve(productos)
      }, 3000);
    } else {
      rejected("400 incorrecto")
    }
  });

  export const getPokemon = new Promise((resolve, rejected) => {
    let url = "https://pokeapi.co/api/v2/pokemon/?limit"
    if (url==="https://pokeapi.co/api/v2/pokemon/?limit") {
      setTimeout(() => {
        resolve("https://pokeapi.co/api/v2/pokemon/?limit")
      }, 3000);
    } else {
      rejected("400 incorrecto")
    }
  });
  