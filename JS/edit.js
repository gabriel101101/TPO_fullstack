
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
        
          <h4>Formulario</h4>
          <div>
              <input type="text" id="nombre" placeholder="add name" value="${data.nombre}">
              <input type="text" id="titulo" placeholder="add a todo" value="${data.titulo}">
          </div>
          <div>
              <input type="text" id="texto" value="${data.texto}">
          </div>
          <button type="submit">Actualizar</button>
     
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

    //alert('tarea actualizada')
    location.href = 'http://localhost:5001';
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