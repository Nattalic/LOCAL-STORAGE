    // Definir el Objeto Perfil
    const perfil = 
    {
      nombre: "Juan Pérez",
      edad: 23,
      email: "juanperez@gmail.com",
      foto: "https://randomuser.me/api/portraits/men/3.jpg",
      hobbies: ["✅ Jugar Fortnite", "✅ Programar", "✅ Estar con mi michi"]
    };

    // Almacenar el objeto en localStorage como cadena JSON
    localStorage.setItem("perfil", JSON.stringify(perfil))

    // Recuperar el objeto desde localStorage
    const perfilGuardado = JSON.parse(localStorage.getItem("perfil")) // Recuperar el objeto desde localStorage y convertirlo de nuevo a un objeto
 
    // Mostrar los datos recuperados en la consola
    console.log(perfilGuardado)

    // Mostrar los datos en el div con id="perfil"
    const perfilDiv = document.getElementById("contenido-perfil")
    perfilDiv.innerHTML = `
        
        <img src="${perfilGuardado.foto}" alt="Foto de ${perfilGuardado.nombre}">
        <p> <strong> Nombre: </strong> ${perfilGuardado.nombre}</p>
        <p> <strong> Edad:</strong> ${perfilGuardado.edad}</p>
        <p> <strong> Email: </strong> ${perfilGuardado.email}</p>
        <h2>Hobbies:</h2>
        <ul id= "lista-hobbies"></ul>
        `

        const ul = document.getElementById("lista-hobbies")
        for (let i = 0 ; i < perfilGuardado.hobbies.length; i++) {
            const li = document.createElement ("li")
            li.textContent = perfilGuardado.hobbies[i]
            ul.appendChild(li)
        }