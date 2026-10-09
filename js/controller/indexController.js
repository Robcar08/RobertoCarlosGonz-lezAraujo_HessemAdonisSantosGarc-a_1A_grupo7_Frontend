import { ObtenerUsuarios } from "../service/clienteService.js";

const contenedor = document.getElementById("contenedor-cartas")

async function cargarUsuario() {
    try {
        const usuarios = await ObtenerUsuarios();
        dibujarTarjetas(usuarios);
    } catch (error) {
        console.error("error:", error);
        contenedor.innerHTML = "<p>Error al cargar</p>";
    }
}

function dibujarTarjetas(usuarios) {
    contenedor.innerHTML = "";

    if(usuarios.length === 0){
        contenedor.innerHTML = "<p>no hay personas</p>";
        return;
    }

    usuarios.forEach((usuario) => {
        contenedor.innerHTML += `
        <tr>
            <td>${usuario.nombre}</td>
        </tr>
        `;
    });
}
cargarUsuario();