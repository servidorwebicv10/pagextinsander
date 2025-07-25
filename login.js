const input_email = document.getElementById("email")
const input_password = document.getElementById("password")
const boton = document.getElementById("ingresar")
let listaUsuarios = []
if(localStorage.getItem("usuarios")){
    listaUsuarios = JSON.parse(localStorage.getItem("usuarios"))
}
let usuario_encontrado = ""

function ingresar(){
    let email = input_email.value 
    let password = input_password.value 
    for(let usuario of listaUsuarios){
        if(usuario.email == email){
           usuario_encontrado = usuario
        }
    }

     if(usuario_encontrado.password == password){
                localStorage.setItem("login", 1)
                window.location.href = "home.html"
                return
    }else{
            alert("contraseña incorrecta")
    }
}

boton.addEventListener("click", ingresar)