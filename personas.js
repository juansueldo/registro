export const Personas = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Sueldo",
        fecha: "",
        parametro: false
    },
    {
        id: 2,
        nombre: "Laura",
        apellido: "Gonzalez",
        fecha: "",
        parametro: false
    },
    {
        id: 3,
        nombre: "Carmen",
        apellido: "Borda",
        fecha: "",
        parametro: false
    },
    {
        id: 4,
        nombre: "Jacqueline",
        apellido: "Escudero",
        fecha: "",
        parametro: false
    },
    
];

export function buscarPersona(id){
    const index = Personas.findIndex((per) => per.id === id);
    Personas[index].parametro = !Personas[index].parametro;
    const fechaActual = new Date();
    Personas[index].fecha = fechaActual.toLocaleString();
    return Personas[index];
}
   