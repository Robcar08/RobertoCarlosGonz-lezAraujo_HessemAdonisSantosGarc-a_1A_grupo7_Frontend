import {ObtenerUsuarios} from "../service/clienteService.js"

const cuerpoTabla = document.getElementById("UsuariosTabla");

async function cargarUsuario() {
    try {
        const usuario = await ObtenerUsuarios();
        crearTabla(usuario);
    } catch (error) {
        console.error("Error al cargar datos: ", error);
        cuerpoTabla.innerHTML = '<tr><td colspan="4">Error al cargar las personas.</td></tr>';
    }

}

function crearTabla(usuario){
    cuerpoTabla.innerHTML = "";
    usuario.array.forEach((usuario) => {
        cuerpoTabla.innerHTML += `<tr>
            <td>
            ${usuario.nombre}
            </td>
            <td>
            ${usuario.correo}
            </td>
            <tp>
            ${usuario.fecha}
            </tp>
        </tr>
        `;
    });
}