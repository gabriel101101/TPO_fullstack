
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');
var check1 = document.getElementById('check1');
var check2 = document.getElementById('check2');
var check3 = document.getElementById('check3');
var check4 = document.getElementById('check4');

var error = document.getElementById('error');

var form = document.getElementById('formulario');
var contcheck=0;


    form.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log("Enviando formulario ...");
        var erroEvent = ['COMPLETE EL CAMPO : '];
        var check = [check1,check2,check3,check4];
        
        if(nombre.value === ''){
            erroEvent.push('"Nombre"');
        }
        if(apellido.value === ''){
            erroEvent.push('"Apellido"');
        }
        if(email.value === ''){
            erroEvent.push('"Email"');
        }
        if(message.value === ''){
            erroEvent.push('"Mensaje"');
        }

        for(let i=0; i<4; i++){
            if(check[i].checked === false){
                contcheck++;
            }
        }
        if(contcheck===4){
            erroEvent.push('"Recorrido"');
        }
        
        
        if(nombre.value === '' || apellido.value === '' || email.value === '' 
        || message.value === '' || contcheck===4){
            alert(erroEvent);
        }

        contcheck=0;
        return true;
    });


