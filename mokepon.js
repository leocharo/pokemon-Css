const secctionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionBotonReinicio = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota");

const botonReiciar = document.getElementById("boton-reiniciar");
const secctionSeleccionarMascota = document.getElementById("seleccionar-mascota");
const secctionSectionInfo = document.getElementById("section_info");
const spanMascotaJugador =document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
const spanVidasJugador= document.getElementById("vidas-jugador");
const spanVidasEnemigo= document.getElementById("vidas-enemigo");
const resultadoJuego = document.getElementById("resultadoJuego");
const contenedor_tarjetas = document.getElementById("contenedor_tarjetas");
const contenedor_ataques = document.getElementById("contenedor_ataques");

let pokemones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador
let vidasEnemigo
let opcionDePokemon
let inputIvysaur
let inputVenusaur 
let inputBulbasaur
let inputCharmeleon 
let inputCharmander
let inputCharizard
let inputSquirtle
let inputWartortle
let inputBlastoise
let inputCaterpie
let mascotaJugador
let ataquesPokemon
let botonFuego 
let botonAgua 
let botonTierra

class Pokemon {
    constructor(nombre, foto, vida){
        this.nombre= nombre;
        this.foto= foto;
        this.vida= vida;
        this.ataques= [];
    }
}
  

let Ivysaur = new Pokemon("Ivysaur", "img/Ivysaur.jpg", 5);
let Venusaur = new Pokemon("Venusaur", "img/Venusaur.jpg", 5);
let Bulbasaur = new Pokemon("Bulbasaur", "img/Bulbasaur.jpg", 5);
let Charmeleon = new Pokemon("Charmeleon", "img/Charmeleon.jpg", 5);
let Charmander = new Pokemon("Charmander", "img/Charmander.jpg", 5);
let Charizard = new Pokemon("Charizard", "img/Charizard.jpg", 5);
let Squirtle = new Pokemon("Squirtle", "img/Squirtle.jpg", 5);
let Wartortle = new Pokemon("Wartortle", "img/Wartortle.jpg", 5);
let Blastoise = new Pokemon("Blastoise", "img/Blastoise.jpg", 5);
let Caterpie = new Pokemon("Caterpie", "img/Caterpie.jpg", 5);

pokemones.push(Bulbasaur, Ivysaur, Venusaur, Charmander, Charmeleon, Charizard, Squirtle, Wartortle, Blastoise, Caterpie);


Ivysaur.ataques.push(
    { nombre : "💦", id: "Agua" },
    { nombre : "💦", id: "Agua" },
    { nombre : "🌱", id: "Tierra" },
    { nombre : "🌱", id: "Tierra" },
    { nombre : "🔥", id: "Fuego" },
    )
    Venusaur.ataques.push(
        { nombre : "💦", id: "Agua" },
        { nombre : "💦", id: "Agua" },
        { nombre : "🌱", id: "Tierra" },
        { nombre : "🔥", id: "Fuego" },
        { nombre : "🔥", id: "Fuego" },
    )
    Bulbasaur.ataques.push(
        { nombre : "💦", id: "Agua" },
        { nombre : "💦", id: "Agua" },
        { nombre : "💦", id: "Agua" },
        { nombre : "🌱", id: "Tierra" },
        { nombre : "🔥", id: "Fuego" },
)
    Charmeleon.ataques.push(
        { nombre : "🔥", id: "Fuego" },
        { nombre : "🔥", id: "Fuego" },
        { nombre : "🔥", id: "Fuego" },
        { nombre : "💦", id: "Agua" },
        { nombre : "🌱", id: "Tierra" },
    )
    Charmander.ataques.push(
        { nombre : "🔥", id: "Fuego" },
        { nombre : "🔥", id: "Fuego" },
        { nombre : "💦", id: "Agua" },
        { nombre : "💦", id: "Agua" },
        { nombre : "🌱", id: "Tierra" },
    )
    Charizard.ataques.push(
        { nombre : "🌱", id: "Tierra" },
        { nombre : "🌱", id: "Tierra" },
        { nombre : "🌱", id: "Tierra" },
        { nombre : "💦", id: "Agua" },
        { nombre : "🔥", id: "Fuego" },
    )
    Squirtle.ataques.push(
        { nombre : "🌱", id: "Tierra" },
        { nombre : "🌱", id: "Tierra" },
        { nombre : "🌱", id: "Tierra" },
        { nombre : "💦", id: "Agua" },
        { nombre : "🔥", id: "Fuego" },
    )
    Wartortle.ataques.push(
        { nombre : "🌱", id: "Tierra" },
        { nombre : "🌱", id: "Tierra" },
        { nombre : "🌱", id: "Tierra" },
        { nombre : "💦", id: "Agua" },
        { nombre : "🔥", id: "Fuego" },
    )
    Blastoise.ataques.push(
        { nombre : "🌱", id: "Tierra" },
        { nombre : "🌱", id: "Tierra" },
        { nombre : "🌱", id: "Tierra" },
        { nombre : "💦", id: "Agua" },
        { nombre : "🔥", id: "Fuego" },
    )
    Caterpie.ataques.push(
        { nombre : "🌱", id: "Tierra" },
        { nombre : "🌱", id: "Tierra" },
        { nombre : "🌱", id: "Tierra" },
        { nombre : "💦", id: "Agua" },
        { nombre : "🔥", id: "Fuego" },
    )
function iniciarJuego() {

    pokemones.forEach((pokemon) => {
        opcionDePokemon = `
        <input type="radio" name="mascota" id=${ pokemon.nombre } />
        <label class="seleccionar-mascota_div_label" for=${ pokemon.nombre }>
            <p>${ pokemon.nombre }</p>
            <img src=${ pokemon.foto } alt=${ pokemon.nombre }>
        </label>
        `
        contenedor_tarjetas.innerHTML += opcionDePokemon

        inputIvysaur = document.getElementById("Ivysaur");
        inputVenusaur = document.getElementById("Venusaur");
        inputBulbasaur = document.getElementById("Bulbasaur");
        inputCharmeleon = document.getElementById("Charmeleon");
        inputCharmander = document.getElementById("Charmander");
        inputCharizard = document.getElementById("Charizard");
        inputSquirtle = document.getElementById("Squirtle");
        inputWartortle = document.getElementById("Wartortle");
        inputBlastoise = document.getElementById("Blastoise");
        inputCaterpie = document.getElementById("Caterpie");

    });

    secctionSeleccionarAtaque.style.display="none";

    
    sectionBotonReinicio.style.display="none";

   
    botonMascotaJugador.addEventListener("click", seleccionMascotaJugador);
      
    botonReiciar.addEventListener("click", reiniciarJuego);


}
function seleccionMascotaJugador(){
    
    secctionSeleccionarMascota.style.display="none";
    
    secctionSectionInfo.style.display="none";
    
    secctionSeleccionarAtaque.style.display="flex";

    

    
    if (inputIvysaur.checked) {
    spanMascotaJugador.innerHTML = inputIvysaur.id
    mascotaJugador= inputIvysaur.id
    } else if (inputVenusaur.checked) {
    spanMascotaJugador.innerHTML = inputVenusaur.id
    mascotaJugador= inputVenusaur.id
    } else if (inputBulbasaur.checked) {
        spanMascotaJugador.innerHTML = inputBulbasaur.id
        mascotaJugador= inputBulbasaur.id
    } else if (inputCharmeleon.checked) {
        spanMascotaJugador.innerHTML = inputCharmeleon.id
        mascotaJugador= inputCharmeleon.id
    } else if (inputCharmander.checked) {
    spanMascotaJugador.innerHTML = inputCharmander.id
    mascotaJugador= inputCharmander.id
    } else if (inputCharizard.checked) {
    spanMascotaJugador.innerHTML = inputCharizard.id
    mascotaJugador= inputCharizard.id
    } else if (inputSquirtle.checked) {
    spanMascotaJugador.innerHTML = inputSquirtle.id 
    mascotaJugador= inputSquirtle.id 
    } else if (inputWartortle.checked) {
    spanMascotaJugador.innerHTML = inputWartortle.id 
    mascotaJugador= inputWartortle.id 
    } else if (inputBlastoise.checked) {
    spanMascotaJugador.innerHTML = inputBlastoise.id
    mascotaJugador= inputBlastoise.id
    } else if (inputCaterpie.checked) {
    spanMascotaJugador.innerHTML = inputCaterpie.id
    mascotaJugador= inputCaterpie.id
    } else {
    alert("No Seleccionaste Aun");
    }
    extraerAtaques(mascotaJugador)
    seleccionMascotaEnemigo()
     }

     function extraerAtaques(mascotaJugador){
        let ataques
        pokemones.forEach((pokemon)=>{
        if (mascotaJugador === pokemon.nombre){
            ataques = pokemon.ataques
        }
        })
        mostarAtaques(ataques)
     }
     function mostarAtaques(ataques){
        ataques.forEach((ataque)=>{
            ataquesPokemon= `
            <button class="div_button_ataque_class" id=${ ataque.id } >${ ataque.nombre }</button>
            `
            contenedor_ataques.innerHTML += ataquesPokemon
        })
         botonFuego = document.getElementById("Fuego");
         botonAgua = document.getElementById("Agua");
         botonTierra = document.getElementById("Tierra");
         botonFuego.addEventListener("click", ataqueFuego)
         botonAgua.addEventListener("click", ataqueAgua);
         botonTierra.addEventListener("click", ataqueTierra);

    
     
         
     }

function seleccionMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0, pokemones.length - 1);
    
    spanMascotaEnemigo.innerHTML = pokemones[mascotaAleatorio].nombre

    
   
}
function ataqueFuego() {
    ataqueJugador = "Fuego";
    ataqueAleatorioEnemigo();
}
function ataqueAgua() {
    ataqueJugador = "Agua";
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = "Tierra";
    ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego";
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua";
    } else {
        ataqueEnemigo = "Tierra";
    }
    combate();
}
function combate() {
    

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("Empate");
        
    } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
        crearMensaje("Ganaste");
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == "Agua" && ataqueEnemigo  == "Fuego") {
        crearMensaje("Ganaste");
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == "Tierra" && ataqueEnemigo  == "Agua") {
        crearMensaje("Ganaste");
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensaje("Perdiste");
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador;
    }
    revisarVidas();
    }
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Felicidades Ganaste");
    } else if(vidasJugador == 0) {
        crearMensajeFinal("Lo Siento, Perdiste");
    }
}

function crearMensaje(resultado) {
   

    let ataqueDelJugador = document.createElement("p");
    let ataqueDelEnemigo = document.createElement("p");

    resultadoJuego.innerHTML = resultado
    ataqueDelJugador.innerHTML = ataqueJugador
    ataqueDelEnemigo.innerHTML = ataqueEnemigo

    
    vidasJugador.appendChild(ataqueDelJugador);
    vidasEnemigo.appendChild(ataqueDelEnemigo);
    
}
function crearMensajeFinal(resultadoFinal) {
    


    resultadoJuego.innerHTML = resultadoFinal;

   
    botonFuego.disabled= true;

    
    botonAgua.disabled= true;

   
    botonTierra.disabled= true;
    
    
    sectionBotonReinicio.style.display="flex";
}
function reiniciarJuego(){
    location.reload();
}

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
window.addEventListener("load", iniciarJuego);

        
        