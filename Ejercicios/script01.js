
/**
 * EJERCICIO 1:
 * ------------
 * Guardar Datos en el Local Storage con setItem(llave,valor)
 * Guardar un usuario, una edad, un email en el Local Storage
 * Recuperar del Local Storage usuario y edad con getItem()
 * Actualizar la edad del usuario
 * ver la logitud de Localstorage con length
 * Ver la posicion de una  llave con key(index)
 * Remover un valor del LocalStorage con removeItem("llave")
 * Limpar Todo el LocalStorage con clear()
 */




// Guardar Datos en el Local Storage con setItem(llave,valor)
localStorage.setItem("usuario", "Juan Pablo")

//Guardar un usuario, una edad, un email en el Local Storage
localStorage.setItem("edad", 18)
localStorage.setItem("email","juanpablo@gmail.com")
localStorage.setItem("celular", "123455677")

//recuperar del Local Storage usuario y edad con getItem()
const  usuario = localStorage.getItem("usuario") //Juan Pablo
const  edad = localStorage.getItem("edad") //18 
const  email = localStorage.getItem("email") 
const  celular = localStorage.getItem("celular") //Perdido

console.log(usuario)
console.log(edad) 
console.log(email) 
console.log(celular)

//Actualizar la edad del usuario
localStorage.setItem("edad", 19) //se cambia la edad

//ver longuitud de localstorage con length
console.log(localStorage.length) //3

//Ver la posicion de una  llave con key(index)
console.log(localStorage.key(1)) //

//Remover un valor del LocalStorage con removeItem("llave")
localStorage.removeItem("celular")

//Limpar Todo el LocalStorage con clear()
localStorage.clear() //borra todo



