// Datos de citas
const dataCitas = [
    {
        autor: 'Albert Einstein',
        cita: 'No poseo talentos especiales. Solo soy apasionadamente curioso.'
    },
    {
        autor: 'Anónimo',
        cita: 'Semanas de programación te pueden ahorrar horas de planeación.'
    },
    {
        autor: 'Alan Kay',
        cita: 'La mejor forma de predecir el futuro es inventarlo.'
    },
    {
        autor: 'Amelia Earhart',
        cita: 'Lo más dificil es tomar la decisión de actuar. El resto es simplemente tenacidad.'
    },
    {
        autor: 'Aristoteles',
        cita: 'La calidad no es un acto, es un hábito.'
    },
    {
        autor: 'Benjamin Franklin',
        cita: 'Dímelo y lo olvidaré. Enséñamelo y lo recordaré. Involúcrame y lo aprenderé.'
    },
    {
        autor: 'Charles R. Swindoll',
        cita: 'La vida es 10% lo que te ocurre y 90% cómo reaccionas.'
    },
    {
        autor: 'Jane Goodall',
        cita: 'Lo que haces hace una diferencia. Y debes decidir si qué tipo de diferencia quieres hacer.'
    },
    {
        autor: 'John Muir',
        cita: 'El poder de la imaginación nos hace infinitos.'
    },
    {
        autor: 'Mark Twain',
        cita: 'Los dos días más importantes de tu vida son el día que naciste y el día que descubres por qué.'
    },
    { 
        autor: "Walt Disney", 
        cita: "Si puedes soñarlo, puedes hacerlo." 
    },
    { 
        autor: "Steve Jobs", 
        cita: "Tu trabajo va a llenar gran parte de tu vida, y la única forma de estar realmente satisfecho es hacer lo que crees que es un gran trabajo." 
    },
    { 
        autor: "Albert Einstein", 
        cita: "La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote." 
    },
    { 
        autor: "Confucio", 
        cita: "Nuestra mayor gloria no es no caer nunca, sino levantarnos cada vez que caemos." 
    },
    { 
        autor: "Theodore Roosevelt", 
        cita: "Haz lo que puedas, con lo que tengas, donde estés." 
    },
    { 
        autor: "Nelson Mandela", 
        cita: "Siempre parece imposible hasta que se hace." 
    },
    { 
        autor: "Henry Ford", 
        cita: "Tanto si crees que puedes, como si crees que no puedes, tienes razón." 
    },
    { 
        autor: "Oprah Winfrey", 
        cita: "Convierte tus heridas en sabiduría." 
    },
    { 
        autor: "Thomas Edison", 
        cita: "Nuestra mayor debilidad radica en rendirnos. La forma más segura de tener éxito es intentarlo una vez más." 
    },
    { 
        autor: "Babe Ruth", 
        cita: "No se puede vencer a una persona que nunca se rinde." 
    },
    { 
        autor: "Vince Lombardi", 
        cita: "La diferencia entre una persona exitosa y los demás no es la falta de fuerza, ni la falta de conocimiento, sino la falta de voluntad." 
    },
    { 
        autor: "Jim Rohn", 
        cita: "O diriges el día, o el día te dirige a ti." 
    },
    { 
        autor: "Dalai Lama", 
        cita: "El propósito de nuestras vidas es ser felices." 
    },
    { 
        autor: "Mahatma Gandhi", 
        cita: "Vive como si fueras a morir mañana. Aprende como si fueras a vivir para siempre." 
    },
    { 
        autor: "Wayne Dyer", 
        cita: "Cuando cambias la forma en que ves las cosas, las cosas que ves cambian." 
    },
    { 
        autor: "Paulo Coelho", 
        cita: "Cuando quieres algo, todo el universo conspira para ayudarte a lograrlo." 
    },
    { 
        autor: "Lao Tsé", 
        cita: "Un viaje de mil millas comienza con un solo paso." 
    },
    { 
        autor: "Tony Robbins", 
        cita: "La única limitación para tu impacto es tu imaginación y compromiso." 
    },
    { 
        autor: "Mark Twain", 
        cita: "Dentro de veinte años, estarás más decepcionado por las cosas que no hiciste que por las que hiciste." 
    },
    { 
        autor: "Bruce Lee", 
        cita: "No reces por una vida fácil, reza por la fuerza para soportar una difícil." 
    }
  ];


  // Verifica si ya hay citas en Local Storage si no las almacena serializandolas
    if (!localStorage.getItem("Citas")) { //si no existe el objeto en el local storage
        localStorage.setItem("Citas", JSON.stringify(dataCitas)) //almacena el objeto en el local s
    }

  // Recupera las  citas del Local Storage y las deserializa y retorna las citas obtenidas
const traeCitas = JSON.parse(localStorage.getItem("Citas")) //recupera el objeto del local storage y lo convierte a un objeto
const boton = document.getElementById("boton") //obtiene el elemento del html
console.log(traeCitas) 

boton.addEventListener('click', mostrarCita)//agrega un evento al boton

function mostrarCita() { //funcion para mostrar la cita
    const miCita = document.getElementById("cita")
    const miAutor = document.getElementById("autor") //obtiene el elemento del html
    
    const index = Math.floor(Math.random() * traeCitas.length) //genera un numero aleatorio entre 0 y la longitud del array de citas
    miCita.innerText = traeCitas [index].cita
    miAutor.innerText = traeCitas [index].autor //muestra la cita y el autor en el htm

}

document.addEventListener("DOMContentLoaded", mostrarCita)

  // Obtiene las citas y las muestra de modo aleatorio y las pinta en el HTML




  // Para mostrar la cita la primera vez



  // Cambia la cita cuando se presiona el boton
