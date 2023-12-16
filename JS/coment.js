document.getElementById('formTask').addEventListener('submit', saveTask)


//const API_URL= "https://gaby0101.pythonanywhere.com/";
const API_URL= "http://localhost:5000";


//ENVIA LOS DATOS A LA BESE DE DATOS=================================
function post(){
let titulo = document.getElementById('titulo').value;
let nombre = document.getElementById('nombre').value;
let texto = document.getElementById('texto').value;

const postData = {nombre: `${nombre}`,titulo: `${titulo}`,texto: `${texto}`};
  
fetch(`${API_URL}/comentarios`, {
  method: 'POST',
  headers: {'Content-Type': 'application/json', },
  body: JSON.stringify(postData) 
})
  .then(response => {
    if (!response.ok) {throw new Error(`Error de red - Código de estado: ${response.status}`);}
    return response.json();
  })
  .then(data => {console.log('Datos recibidos:', data);})
  .catch(error => {console.error('Error en la solicitud:', error);});
}
//====================================================================


//TRAE TODOS LOS DATOS DE LA BASE DE DATOS=============================
function getData(){

  const HTMLResponse = document.querySelector("#app");

  fetch(`${API_URL}/comentarios`)
  .then((response) => response.json())
  .then((comentarios) => {
      const tpl = comentarios.map((comentario) => 
      `
      <div class="coment">
      <h2 class="name">${comentario.nombre}</h2>
      <h4 class="titulo">${comentario.titulo}</h4>
      <p class=" comentario">${comentario.texto}</p><br>
      <button class="boton" type="submit"  onclick="deleteId(${comentario.id})">
      <i class="fa-solid fa-trash-can" style="color: rgb(243, 8, 8);"></i>
      </button>
      <button class="boton"><a href="edit.html?id =${comentario.id}" >
      <i class="fa-solid fa-pen-to-square" style="color: rgb(255, 200, 47);"></i></a>
      </button>
            
      </div>
      
      `);
      console.log(tpl)
      HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
  });
}
getData();
//====================================================================


//GUARDA LOS DATOS...=========================================
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
  post(postData);
  //e.preventDefault();
  alert('Comentario guardado')
  }
//================================================================



//ELIMINA EL DATO ELEGIDOS ========================================
function deleteId(data){
 
 fetch(`${API_URL}/comentarios/${data}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error de red - Código de estado: ${response.status}`);
    }
    console.log('Elemento eliminado exitosamente');
  })
  .catch(error => {
    console.error('Error en la solicitud:', error);
  });

  //console.log('==========================');
  //console.log(data);
  alert("Comentario Eliminado");
  location.reload()
}


  
    