
// HECHO POR LAURA

function guardar (){
    let user = document.getElementById("usuario").value;
    let pass= document.getElementById("contraseña").value;


if(user=="admin" && pass=="1212"){
    window.location="a_administrador.html";
    // alert("Usuario y contraseña introducido correctamnete")
} else {
    if(user=="maria" && pass=="1212"){
        window.location="u_servicios.html";
        // alert("Usuario y contraseña introducido correctamnete")
    } else {
        alert("Ingresar tus datos correctos")
    }
}



}




