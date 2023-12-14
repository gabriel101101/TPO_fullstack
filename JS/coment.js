document.getElementById('formTask').addEventListener('submit', saveTask)


const API_URL= "http://localhost:5000";

//const itemIdToDelete = 13; // Id del elemento que deseas eliminar
const itemIdToRetrieve = 8; // Id del elemento que deseas recuperar



//ENVIA LOS DATOS (METODO: 'POST')
//==========================================================
function post(){
let titulo = document.getElementById('titulo').value;
let nombre = document.getElementById('nombre').value;
let texto = document.getElementById('texto').value;
// Datos que desea enviar 
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
//==============================================================



//TRAE TODOS LOS DATOS (METODO: 'GET')
//==============================================================
function getData(){

  const HTMLResponse = document.querySelector("#app");

  fetch(`${API_URL}/comentarios`)
  .then((response) => response.json())
  .then((comentarios) => {
      const tpl = comentarios.map((comentario) => 
      `
      <div id="formDatos">
      <li>${comentario.nombre}/${comentario.titulo}/${comentario.texto}</li>
            <button type="submit"  onclick="deleteId(${comentario.id})">ELIMINAR</button>
            <button><a href="edit.html?id =${comentario.id}" >Edit</a></button>
      </div>
      
      `);
      console.log(tpl)
      HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
  });
}
getData();
//====================================================================



/*
function get_one(){

fetch(`${API_URL}/comentarios/${itemIdToRetrieve}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error de red - Código de estado: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Dato específico recuperado:', data);
  })
  .catch(error => {
    console.error('Error en la solicitud:', error);
  });

}*/




//EDITA LOS DATOS SELECCIONADOS (METODO: 'PUT')
//=========================================================
/*
function editData(){
// Nuevos datos que deseas enviar para editar el elemento
const updatedData = {
  nombre: 'gaby',
  titulo: 'ya toy',
  texto: 'lllll'
};

fetch(`${API_URL}/comentarios/${itemIdToEdit}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    // Puedes agregar otros encabezados si es necesario
  },
  body: JSON.stringify(updatedData)
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
}*/
//===========================================================






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
  alert('tarea guardada')
  }
//================================================================





//ELIMINA EL DATO ELEGIDO (METODO: 'DELETE')========================
function deleteId(data){
 
 fetch(`${API_URL}/comentarios/${data}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    // Puedes agregar otros encabezados si es necesario
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

  
  /*
  console.log('==========================');
  console.log(data);*/
  alert("Producto Eliminado");
  location.reload()
}


  
    