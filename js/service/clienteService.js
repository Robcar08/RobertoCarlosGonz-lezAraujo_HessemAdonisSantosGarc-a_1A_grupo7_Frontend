const API_URL = "https://retoolapi.dev/GgK2V9/data";


//get
export async function ObtenerUsuarios() {
    const respuesta = await fetch(API_URL);
    return respuesta.json();
}



