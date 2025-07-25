const input_nombre = document.getElementById("nombre")
const input_apellido = document.getElementById("apellido")
const input_email = document.getElementById("email")
const input_password = document.getElementById("password")
const boton = document.getElementById("registrarse")
let listaUsuarios = []
if(localStorage.getItem("usuarios")){
    listaUsuarios = JSON.parse(localStorage.getItem("usuarios"))
}

function registro(){
    let nombre = input_nombre.value
    let apellido = input_apellido.value
    let email = input_email.value
    let password = input_password.value

    let usuario = {"nombre":nombre,"apellido":apellido, "email":email, "password":password}
    listaUsuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios))
}

boton.addEventListener("click", registro)