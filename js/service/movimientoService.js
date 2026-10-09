const API_URL = "";


//get
export async function ObtenerMovimientos() {
    const respuesta = await fetch(API_URL);
    const resultado = await respuesta.json();
    if(!respuesta.ok) throw new Error(resultado.message || "Error al cargar usuarios");
    return resultado.data

}

//get por id
export async function ObtenerMovimientoPorID(id) {
    const respuesta = await fetch(`${API_URL}/${id}`);
    const resultado = await respuesta.json();
    if(!respuesta.ok) throw new Error(resultado.message || "Error al cargar usuario");
    return resultado.data

}

//post
export async function CrearMovimiento(nombre, correo, fecha) {
    const respuesta = await fetch (API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ nombre, correo, fecha})
    });

    if (!respuesta.ok) {
        throw new Error(`Error: ${respuesta.status}`);
    }

    const nuevoUsuario = await respuesta.json();
    console.log('Creado con ID:', nuevoUsuario.id);
    return nuevoUsuario;
}

//put
export async function CrearUsuario(id, nombre, correo, fecha) {
    const respuesta = await fetch (`${API_URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id: id, nombre, correo, fecha})
    });

    if (!respuesta.ok) {
        throw new Error(`Error: ${respuesta.status}`);
    }

    const actualizarUsuario = await respuesta.json();
    console.log('Actualizado con ID:', actualizarUsuario.id);
    return actualizarUsuario;
}

async function eliminarUsuario(id) {
    const respuesta = await fetch(`${API_URL}{id}`, {
      method: 'DELETE'
    });
  
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
  
    if (respuesta.status === 204) {
      console.log(`usuario ${id} eliminado.`);
      return null;
    }
  
    const eliminado = await respuesta.json();
    return eliminado;
  }