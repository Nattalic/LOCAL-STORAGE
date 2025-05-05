
/** 
 * EJERCICIO 3:
 * ------------
 *  Recupera  el objeto guardado y Verlo por  consola
 *  DeSerializar un Objeto almacenado y Verlo por consola
 *  Eliminar el Objeto y volvera consultar (si no esite devuelve null)
 *  Validar antes de mostrar el objeto recuperado
 *  Mostrar los datos recuperado en el contenedor html
 **/ 


//DeSerializar un Objeto almacenado y Verlo por consola
const libro = JSON.parse (localStorage.getItem("libro")) //convierte el string a un objeto

if (libro == null) { //si se elimina el objeto, devuelve null, no existe el libro
    console.log("no existe el libro")
} else {
    console.log(libro.Nombre)
    console.log(libro.Autor)
    console.log(libro.Año)
    console.log(libro.Genero)


    const contenedor = document.querySelector("#contenedor")
    contenedor.innerHTML = `
        <h1>Libro uwu: ${libro.Nombre}</h1>
        <h2>Autor: ${libro.Autor}</h2>
        <h3>Año: ${libro.Año}</h3>
        <h4>Genero: ${libro.Genero}</h4>

    `
    //muestra el libro en el contenedor html
}