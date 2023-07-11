export function NuevaPersona(id, nombre, apellido, fecha, parametro){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha = fecha;
    this.parametro = parametro ? "Entrada" : "Salida";
}