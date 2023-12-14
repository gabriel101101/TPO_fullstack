
let queryS = new URLSearchParams(window.location.search)
let param = Object.fromEntries(queryS.entries())
let imp = Object.entries(param)

const id = imp[0][1]






const API_URL= "http://localhost:5000";


//TRAE UN SOLO DATO POR ID 

function get_one(id){

    const HTMLResponse = document.querySelector("#formTask");

    fetch(`${API_URL}/comentarios/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red - Código de estado: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        HTMLResponse.innerHTML = `
        
        <div class="cont_input coment_edit">
        <p class="title" style="font-size: 30px;">Edita tus comentarios</p>
                    <label for="">Nombre / Usuario</label>
                    <input class="input" type="text" id="nombre" placeholder="Nombre o Usuario" value="${data.nombre}" >
                    <label for="">Titulo</label>
                    <input class="input" type="text" id="titulo" placeholder="Titulo" value="${data.titulo}">
                    <label for="">Comentario</label>
                    <input class="input_coment" type="text" id="texto" placeholder="Comentario" value="${data.texto}">
        </div><br>
        <button class="boton2 btn"  type="submit">Actualizar</button>
      
        `
        console.log('Dato específico recuperado:', data);
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
    }

get_one(id);

document.getElementById('formTask').addEventListener('submit', saveTask)


function saveTask(e){
    let titulo = document.getElementById('titulo').value;
    let nombre = document.getElementById('nombre').value;
    let texto = document.getElementById('texto').value;
    
    const postData = {
      nombre: `${nombre}`,
      titulo: `${titulo}`,
      texto: `${texto}`
    };
    console.log(postData);
    editData(postData);
    //e.preventDefault();

    alert('tarea actualizada')
    //location.href = 'http://localhost:5001';
    }

function editData(datos){
    
    fetch(`${API_URL}/comentarios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Puedes agregar otros encabezados si es necesario
      },
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red - Código de estado: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Dato editado exitosamente:', data);
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
      
}