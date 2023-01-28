// borrando el texto predeterminado en el form (campo usuario)

let input_usuario = document.getElementById("input_usuario")


input_usuario.onclick = function() {
    input_usuario.setAttribute("value", "")
}

// borrando el texto predeterminado en el form (campo contraseña)

let input_contrasenia = document.getElementById("input_contrasenia")

input_contrasenia.onclick=function(){
    input_contrasenia.setAttribute("value","")
    input_contrasenia.setAttribute("type","password")
}

//creando funcion para boton de mostrar

let boton_mostrar= document.querySelector(".show")



boton_mostrar.addEventListener("click",function() {
    if (input_contrasenia.getAttribute("type")=="password"){
        input_contrasenia.setAttribute("type", "text")
    }

    else{input_contrasenia.setAttribute("type","password")}

})

