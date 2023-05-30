import { actualizarTabla } from "./tabla.js";
import { Personas, buscarPersona } from "./personas.js";
import { NuevaPersona } from "./NuevaPersona.js";

const personas = JSON.parse(localStorage.getItem("personas")) || [];

const $input = document.getElementById("miInput");
const $formulario = document.getElementById("miFormulario");
const $container = document.getElementById("container");
const $h2 = document.createElement("h2");
const $seccionTabla = document.getElementById("tabla");

window.onload = () => {
  $input.addEventListener("input", () => {
    if (parseInt($input.value)) {
      const personaEncontrada = buscarPersona(parseInt($input.value));
      if (personaEncontrada !== null) {
        const newPerson = new NuevaPersona(personaEncontrada.id,personaEncontrada.nombre,personaEncontrada.apellido,personaEncontrada.fecha,personaEncontrada.parametro);
        handlerCreate(newPerson);
        console.log(personas);
      }
    }
    $formulario.reset();
  });

  $input.focus();

  $input.addEventListener("blur", () => {
    $input.focus();
  });
  $container.appendChild($h2);
};
function handlerCreate(nuevaPersona) {
  personas.push(nuevaPersona);
  actualizarTabla($seccionTabla, personas);
  guardarObjetosEnCSV(personas);
}

function guardarObjetosEnCSV(objetos) {
  // Obtener la fecha actual
  const fecha = new Date();

  // Formatear la fecha en el formato deseado (por ejemplo: AAAA-MM-DD)
  const formatoFecha = fecha.toISOString().split("T")[0];

  // Generar el nombre del archivo con la fecha actual
  const nombreArchivo = `datos_${formatoFecha}.csv`;

  // Obtener las claves (encabezados) de los objetos
  const encabezados = Object.keys(objetos[0]);

  // Crear una matriz para almacenar los datos
  const datos = [encabezados];

  // Iterar sobre los objetos y extraer los valores de las propiedades
  objetos.forEach(objeto => {
    const fila = encabezados.map(encabezado => objeto[encabezado]);
    datos.push(fila);
  });

  // Convertir los datos a formato CSV
  const csv = datos.map(row => row.join(",")).join("\n");

  // Crear un enlace de descarga
  const blob = new Blob([csv], { type: "text/csv" });
  
  const url = URL.createObjectURL(blob);

  const enlaceDescarga = document.createElement("a");
  enlaceDescarga.href = url;
  enlaceDescarga.download = nombreArchivo;
  enlaceDescarga.textContent = "Descargar CSV";

  // Simular clic en el enlace de descarga
  enlaceDescarga.click();
  
}
