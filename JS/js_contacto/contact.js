
let formulario = document.getElementById("mi_formulario");


window.onload = iniciar;

const iniciar = () =>{
    document.getElementById("submit").addEventListener('click', validar, false);

}


const validaDatos = () =>{
    var elemento1 = document.getElementById("nombre");
    var elemento2 = document.getElementById("apellido");
    var elemento3 = document.getElementById("email");
    var elemento4 = document.getElementById("message");

    if(elemento1.value == "" && elemento2.value == "" && elemento3.value == "" && elemento4.value == ""){
        alert("El campo no puede ser vacio");
        return false;
    }
    return true;
}

const validaTelefono = () =>{
    var elemento = document.getElementById("telefono");
    if(isNaN(elemento.value)){
        alert("El campo teléfono tiene que ser numérico");
        return false;
    }
    return true;
}

const validaCheck = () =>{
    var campoCheck = document.querySelector('.check');
    if(!campoCheck.checked){
        alert("Debes seleccionar alguna provincia");
        return false;
    }
    return true;
}

const validar = (e) =>{
    if(validaDatos() && validaTelefono() && validaCheck() && validaCheck 
    && confirm("Pulsa aceptar si deseas enviar el formulario")){
        return true;
    }else{
        e.preventDefault();
        return false;
    }
}


