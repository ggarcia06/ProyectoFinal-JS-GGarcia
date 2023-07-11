
// login 

const datosUsuarios = [{
usuario: "usuarioA",
contraseña: "1234"
},
{
    usuario: "usuarioB",
    contraseña: "1234"
},
{
    usuario: "usuarioC",
    contraseña: "1234"
}
]

const user = {
    usuario:"",
    contraseña:""
}

const buttonLogin = document.getElementById("login-button");

const app = document.querySelector("#app");

const inputs = document.querySelectorAll("input");

function redireccionServicios() {
    location.href = "pages/services.html"
}




const bienvenidaAlUsuario = nombre => {
    //app.innerHTML = `<h1 clase="title">Bienvenido Sr/Sra ${nombre}</h1>`;
    redireccionServicios();
}
const usuarioInvalido = () => {
    app.innerHTML = `<h1 clase="title">El nombre de usuario o contraseña es incorrecto</h1>`;
}

let isAuth = JSON.parse(localStorage.getItem("autenticacion"));
if(isAuth === null){
    isAuth = { isLogin: false}
}


if (isAuth.isLogin){
    bienvenidaAlUsuario(isAuth.name);
}


buttonLogin.addEventListener("click", () => {            
    const usuarioEncontrado = datosUsuarios.find(el => el.usuario === user.usuario && el.contraseña === user.contraseña);
    if(usuarioEncontrado){
        bienvenidaAlUsuario(usuarioEncontrado.usuario);
        localStorage.setItem("autenticacion", JSON.stringify({ name: usuarioEncontrado.usuario, isLogin: true}));
    }else{
        usuarioInvalido();
    }
                           
    console.log (usuarioEncontrado);
})



inputs.forEach( (el) => {                  
    el.addEventListener("input", (e) => {
        
        const {name, value} = e.target;     

        user[name] = value;

    } )      
})

