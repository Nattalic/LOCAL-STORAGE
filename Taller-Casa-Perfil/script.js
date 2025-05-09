    // Definir el Objeto Perfil
    const perfil = 
    {
      nombre: "Juan Pérez",
      edad: 23,
      email: "juanperez@gmail.com",
      foto: "https://randomuser.me/api/portraits/men/3.jpg",
      hobbies: ["Jugar Fortnite", "Programar", "Estar con mi michi"]
    };

    // Almacenar el objeto en localStorage como cadena JSON
    localStorage.setItem("perfil", JSON.stringify(perfil))

    // Recuperar el objeto desde localStorage
    const perfilRecuperado = JSON.parse(localStorage.getItem("perfil")) // Recuperar el objeto desde localStorage y convertirlo de nuevo a un objeto
 
    // Mostrar los datos recuperados en la consola
    console.log(perfilRecuperado)

    // Mostrar los datos en el div con id="perfil"
    const perfilDiv = document.getElementById("perfil")
    perfilDiv.innerHTML = `
        <h1>${perfilRecuperado.nombre}</h1>
        <img src="${perfilRecuperado.foto}" alt="Foto de ${perfilRecuperado.nombre}">
        <p>Edad: ${perfilRecuperado.edad}</p>
        <p>Email: ${perfilRecuperado.email}</p>
        <h2>Hobbies:</h2>
        <ul>
            ${perfilRecuperado.hobbies.map(hobby => `<li> ✅ ${hobby}</li>`

            )}
        </ul>
    `
