
/**
 * EJERCICIO 2:
 * ------------
    * Definir un Objeto ej: Libro
    * Ver que pasa  si se Guadar sin serializarlo
    * Serializar un Objeto para almacenarlo
    * Abrir y cerrar el navegador para ver que pasa en el Local Storage
    * Abrir el enlace con otro navegador ¿Que pasa?
 * */ 


//definir un objeto ej: libro

const libro = {
    Nombre : "El principito",
    Autor : "Antoine de Saint-Exupéry",
    Año : 1943,
    Genero : "Ficción",
}

//Ver que pasa  si se Guarda sin serializarlo
localStorage.setItem("libro", libro) 

//Serializar un Objeto para almacenarlo
const libroSerializado = JSON.stringify(libro) //convierte el objeto a un string 
localStorage.setItem("libro", libroSerializado) //guarda el objeto serializado en el local storage

