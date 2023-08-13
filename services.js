// Aplicacion: muestra los equipos de la empresa de alquiler de autoelevadores, sus caracteristicas y fecha del proximo service, asi como tambien los dias restantes para realizarlo 

// import { Equipos } from '../clases.js';

const bdAutoelevadores = [
    {
        numeroSerie: "ABX534LM",
        modelo: "HELI 1-1.8",
        tipo: "COMBUSTION",
        numeroChasis: "543HSN36",
        proximoService: "2023-08-01",
        url: "../multimedia/heli1-1.8.png"
    },

    {
        numeroSerie: "ABX489LM",
        modelo: "HELI 2-3.5",
        tipo: "COMBUSTION",
        numeroChasis: "894HSN25",
        proximoService: "2023-09-05",
        url: "../multimedia/heli2-3.5.png"
    },

    {
        numeroSerie: "ABX348LM",
        modelo: "HELI 4-10",
        tipo: "COMBUSTION",
        numeroChasis: "863HSN37",
        proximoService: "2023-08-25",
        url: "../multimedia/heli4-10.png"
    },

    {
        numeroSerie: "ABX972LM",
        modelo: "HELI 1-2",
        tipo: "ELECTRICO",
        numeroChasis: "231HSN81",
        proximoService: "2023-11-22",
        url: "../multimedia/heli1-1.8.png"
    },

    {
        numeroSerie: "ABX617LM",
        modelo: "HELI 12-46",
        tipo: "COMBUSTION",
        numeroChasis: "689HSN56",
        proximoService: "2023-08-24",
        url: "../multimedia/heli1-2.png"
    },

    {
        numeroSerie: "ABX223LM",
        modelo: "HELI KSERIES CPCD35",
        tipo: "ELECTRICO",
        numeroChasis: "689HSN56",
        proximoService: "2023-12-19",
        url: "../multimedia/heli1-2.png"
    },

    {
        numeroSerie: "ABX478AX",
        modelo: "HELI 12-46",
        tipo: "COMBUSTION",
        numeroChasis: "428HSN49",
        proximoService: "2023-08-15",
        url: "../multimedia/heli1-1.8.png"
    },

    {
        numeroSerie: "ABX794AX",
        modelo: "HELI 1-2",
        tipo: "ELECTRICO",
        numeroChasis: "932HSN96",
        proximoService: "2023-08-01",
        url: "../multimedia/heli1-1.8.png"
    },

    {
        numeroSerie: "ABX373AX",
        modelo: "HELI 1-2.35",
        tipo: "ELECTRICO",
        numeroChasis: "128HSN63",
        proximoService: "2024-01-09",
        url: "../multimedia/heli1-1.8.png"
    },

    {
        numeroSerie: "ABX269AX",
        modelo: "HELI 4-10",
        tipo: "COMBUSTION",
        numeroChasis: "362HSN98",
        proximoService: "2023-10-19",
        url: "../multimedia/heli1-1.8.png"
    },

    {
        numeroSerie: "ABX609AX",
        modelo: "HELI 1-2",
        tipo: "ELECTRICO",
        numeroChasis: "002HSN58",
        proximoService: "2023-08-26",
        url: "../multimedia/heli1-1.8.png"
    },

    {
        numeroSerie: "ABX029AX",
        modelo: "HELI 1-1.8",
        tipo: "COMBUSTION",
        numeroChasis: "727HSN45",
        proximoService: "2023-08-07",
        url: "../multimedia/heli1-1.8.png"
    }
]

const appEquipos = document.querySelector("#app-equipos");



// libreria

Toastify({
    text: "Agendar un turno",
    duration: -1,
    offset: {
        x: 70, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
  style: {
    background: "linear-gradient(to right, #670010, #cb4c46)",
  },
 onClick: function(){
    appEquipos.innerHTML = ''
    const contacto = document.createElement("div");
    contacto.innerHTML = `<h1>Contacto</h1>
    <form action="">
        <div>
        <label class="labelform" for="nombre">Nombre:</label>
        <input class="inputform" type="text" name="nombre" placeholder="Ingrese su nombre">
    </div>
    <div>
        <label class="labelform" for="apellido">Apellido:</label>
        <input class="inputform" type="text" name="apellido" placeholder="Ingrese su apellido">
    </div>
    <div>
        <label class="labelform" for="email">Email</label>
        <input class="inputform" type="email" name="email" placeholder="Ingrese su email">
    </div>
    <div>
        <textarea name="" id="" cols="" rows="10">Deje su mensaje</textarea>          
    </div>  
    
    <div>
            <input class="inputform" type="reset" value="Resetear Formulario">
            <button type="submit" class="services-buttons">Enviar</button>
        </div>
    </form>`
appEquipos.appendChild(contacto);
}
  
    }).showToast();



// calcula los dias que faltan para el proximo service a partir del dia actual. 

let diasRestantes = 0;
let estadoEquipo = "";

function diasProxService(el) {
    const diaActual = new Date();
    diasRestantes = Math.round((Date.parse(el) - Date.parse(diaActual)) / 86400000);

    // diasRestantes > 30 && console.log("estado del service VERDE");
    // diasRestantes <= 30 && diasRestantes > 15 && console.log("estado del service AMARILLO");
    // diasRestantes <= 15 && console.log("estado del service ROJO");

    
    diasRestantes > 30 && (estadoEquipo = '../multimedia/verde.png');
    diasRestantes <= 30 && (estadoEquipo = "../multimedia/amarillo.png");
    diasRestantes <= 15 && (estadoEquipo = "../multimedia/rojo.png");
}


//funcion de  redireccionamiento de pagina al cerrar sesion

function RedireccionInicio() {
    location.href = "../index.html"
}


const signOutButton = document.getElementById("sign-out");

const searchInput = document.querySelector(".search-input");

const searchButton = document.querySelector("#search-button");

let equipoEncontrado = {};


const allButton = document.querySelector("#all")










// boton cerrar sesion

signOutButton.addEventListener("click", () => {
    localStorage.clear()
    RedireccionInicio()
})

// codigo para buscar un equipo mediante el numero de serie

searchInput.addEventListener("input", (e) => {
    equipoEncontrado = bdAutoelevadores.find((el) => el.numeroSerie === e.target.value)
})

// LIBRERIA

searchButton.addEventListener("click", () => {
    if(!equipoEncontrado){
        Swal.fire('El numero ingresado no es valido')
    }
    else{
    diasProxService(equipoEncontrado.proximoService);

    appEquipos.innerHTML = ''
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card");
    tarjeta.innerHTML = `
    <div class="card text-center" style="width: 18rem;">
  <img src="${equipoEncontrado.url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${equipoEncontrado.numeroSerie}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">MODELO :${equipoEncontrado.modelo}</li>
    <li class="list-group-item">TIPO: ${equipoEncontrado.tipo}</li>
    <li class="list-group-item">No. CHASIS: ${equipoEncontrado.numeroChasis}</li>
    <li class="list-group-item">Proximo Service: ${equipoEncontrado.proximoService}</li>
    <li class="list-group-item">Dias para proximo service: ${diasRestantes}<img class="img-semaforo" src="${estadoEquipo}"></li>
  </ul>
</div>

    `
    appEquipos.appendChild(tarjeta);
}})



// funcion para mostrar todos los equipos y su estado de mantenimiento

allButton.addEventListener("click", () => {
    appEquipos.innerHTML = ''
    bdAutoelevadores.forEach(el => {
        diasProxService(el.proximoService);
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.innerHTML = `
        <div class="card text-center" style="width: 18rem;">
      <img src="${el.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${el.numeroSerie}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">MODELO :${el.modelo}</li>
        <li class="list-group-item">TIPO: ${el.tipo}</li>
        <li class="list-group-item">No. CHASIS: ${el.numeroChasis}</li>
        <li class="list-group-item">Proximo Service: ${el.proximoService}</li>
        <li class="list-group-item">Dias para proximo service: ${diasRestantes}<img class="img-semaforo" src="${estadoEquipo}"></li>
      </ul>
    </div>
    
        `
        appEquipos.appendChild(tarjeta);
    })
})

// configuracion de botones de equipos electricos y combustion usando fetch

const urlCombustion = "../equipos.json";
const urlElectricos = "../electricos.json";
const electricos = document.querySelector("#eElectricos");
const combustion = document.querySelector("#eCombustion");


combustion.addEventListener ("click", ()=>{

fetch (urlCombustion)
.then(res => res.json())
.then(data => mostrarEquipos(data))
.catch(err => appEquipos.innerHTML = '<div class="mensaje"><h2>Por el momento no tenemos equipos disponibles</h2></div>')

function mostrarEquipos(productos){
    appEquipos.innerHTML = ''
    
 productos.forEach(e => {
    const tarjeta = document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.innerHTML = `
        <div class="card text-center" style="width: 35rem;">
      <img src="${e.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><strong>MODELO ${e.modelo}</strong></h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Capacidad:</strong> ${e.capacidad}</li>
        <li class="list-group-item"><strong>Motor:</strong> ${e.motor}</li>
        <li class="list-group-item"><strong>Torre:</strong> ${e.torre}</li>
        <li class="list-group-item"><strong>Transmision:</strong> ${e.transmision}</li>
        <li class="list-group-item"><strong>Rodado:</strong> ${e.rodado}</li>
        <li class="list-group-item"><strong>Accesorios:</strong> ${e.accesorios}</li>
      </ul>
    </div>
    
        `
        appEquipos.appendChild(tarjeta);
    })
}
})

electricos.addEventListener ("click", ()=>{

    fetch (urlElectricos)
    .then(res => res.json())
    .then(data => mostrarEquipos(data))
    .catch(err => appEquipos.innerHTML = '<div class="mensaje"><h2>Por el momento no tenemos equipos disponibles</h2></div>')
    
    function mostrarEquipos(productos){
        appEquipos.innerHTML = ''
     productos.forEach(e => {
        const tarjeta = document.createElement("div");
            tarjeta.classList.add("card");
            tarjeta.innerHTML = `
            <div class="card text-center cardWidth" style="width: 35rem;" >
          <img src="${e.url}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><strong>MODELO ${e.modelo}</strong></h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Capacidad:</strong> ${e.capacidad}</li>
            <li class="list-group-item"><strong>Torre:</strong> ${e.torre}</li>
            <li class="list-group-item"><strong>Bateria:</strong> ${e.bateria}</li>
            <li class="list-group-item"><strong>Controlador:</strong> ${e.controlador}</li>
            <li class="list-group-item"><strong>Rodado:</strong> ${e.rodado}</li>
            <li class="list-group-item"><strong>Accesorios:</strong> ${e.accesorios}</li>
          </ul>
        </div>

        
            `
            appEquipos.appendChild(tarjeta);
        })
    }
    })

