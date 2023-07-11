import { Equipos } from '../clases.js';

const bdAutoelevadores = [
    {
        numeroSerie: "ABX534LM",
        modelo: "HELI 1-1.8",
        tipo: "COMBUSTION",
        numeroChasis: "543HSN36",
        proximoService: "2023-08-15",
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
        proximoService: "2023-07-15",
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
        modelo: "HELI 2-3.5",
        tipo: "ELECTRICO",
        numeroChasis: "689HSN56",
        proximoService: "2023-10-05",
        url: "../multimedia/heli1-2.png"
    },

    {
        numeroSerie: "ABX223LM",
        modelo: "HELI 2-3.5",
        tipo: "ELECTRICO",
        numeroChasis: "689HSN56",
        proximoService: "2023-12-19",
        url: "../multimedia/heli1-2.png"
    }
]



let diasRestantes = 0;
let estadoEquipo = "";

function diasProxService(el) {
    const diaActual = new Date();
    diasRestantes = Math.round((Date.parse(el) - Date.parse(diaActual)) / 86400000);

    // diasRestantes > 30 && console.log("estado del service VERDE");
    // diasRestantes <= 30 && diasRestantes > 15 && console.log("estado del service AMARILLO");
    // diasRestantes <= 15 && console.log("estado del service ROJO");

    
    // diasRestantes > 30 && (estadoEquipo = '../multimedia/verde.png');
    // diasRestantes <= 30 && (estadoEquipo = "../multimedia/amarillo.png");
    // diasRestantes <= 15 && (estadoEquipo = "../multimedia/rojo.png");
}

function RedireccionInicio() {
    location.href = "../index.html"
}


const signOutButton = document.getElementById("sign-out");

const searchInput = document.querySelector(".search-input");

const searchButton = document.querySelector("#search-button");

let equipoEncontrado = {};

const appEquipos = document.querySelector("#app-equipos");

const allButton = document.querySelector("#all")


signOutButton.addEventListener("click", () => {
    localStorage.clear()
    RedireccionInicio()
})

searchInput.addEventListener("input", (e) => {
    equipoEncontrado = bdAutoelevadores.find((el) => el.numeroSerie === e.target.value)
})

searchButton.addEventListener("click", () => {
    
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
    <li class="list-group-item">Dias para proximo service: ${diasRestantes}</li>
  </ul>
</div>

    `
    appEquipos.appendChild(tarjeta);
})

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
        <li class="list-group-item">Dias para proximo service: ${diasRestantes}</li>
      </ul>
    </div>
    
        `
        appEquipos.appendChild(tarjeta);
    })
})
