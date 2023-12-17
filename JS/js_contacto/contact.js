
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


    form.addEventListener('submit', async function(e){
        e.preventDefault();
        var erroEvent = ['COMPLETE EL CAMPO : '];
        var check = [check1,check2,check3,check4];
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        //let regex = /^\d+$/;
        const form = new FormData(this);

        
        if(nombre.value === ''){
            erroEvent.push('< Nombre >');
            //e.preventDefault();
        }
        if(apellido.value === ''){
            erroEvent.push('< Apellido >');
            //e.preventDefault();
        }
        if(!regexEmail.test(email.value)){
            erroEvent.push('< Email >');
            //e.preventDefault();
        }
        if (!validarTelefono(telefono.value)) {
            e.preventDefault(); // Evitar que el formulario se envíe
            erroEvent.push('< Telefono >');
          }
        if(message.value === ''){
            erroEvent.push('< Mensaje >');
            //e.preventDefault();
        }

        for(let i=0; i<4; i++){
            if(check[i].checked === false){
                contcheck++;
            }
        }
        if(contcheck===4){
            erroEvent.push('< Recorrido >');
            //e.preventDefault();
        }

        const response = await fetch(this.action,{
            method:this.method,
            body:form,
            headers:{
                'Accept':'application/json'
            }
        })
        if(response.ok){

            if(nombre.value === '' || apellido.value === '' || !regexEmail.test(email.value) || message.value === '' 
            || contcheck===4 || !validarTelefono(telefono.value)){
            alert(erroEvent);
            
            return false;
            }else{
                this.reset()
                alert('Formulario Enviado...')
                return true;
            }   
        }
        contcheck=0;

        function validarTelefono(telefono) {
            const regex = /^\d{10}$/;
            return regex.test(telefono);
          }
        
        //return true;
        

    });
   

