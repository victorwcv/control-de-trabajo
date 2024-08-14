import { curretDate } from "../DAL";

export const fakeEntryValues = () => {
  const fakes = {
    nPDT: fakenPDT(),
    area: randomValueofArray([
      "Planta 1",
      "Planta 2",
      "Planta 3",
      "Almacen 1",
      "Almacen 2",
      "SS.AA. 1",
      "SS.AA. 2",
    ]),
    equipo: randomValueofArray([
      "Máquina A",
      "Máquina B",
      "Máquina C",
      "Máquina D",
      "Máquina E",
      "Máquina F",
      "Máquina G",
      "Máquina H",
    ]),
    tarea: randomValueofArray([
      "Mantenimiento Preventivo",
      "Reparación",
      "Calibración",
      "Inspección",
    ]),
    disciplina: randomValueofArray([
      "Mecanica",
      "Electrica",
      "Instrum. & Control",
      "SS.GG.",
      "I.E.",
    ]),
    ejecutante: randomValueofArray([
      "Juan Perez",
      "Maria Rodriguez",
      "Carlos Gonzalez",
      "Ana Fernandez",
      "Isabel Ortiz",
      "Carmen Castro",
      "Ricardo Fuentes",
      "Miguel Vazquez",
    ]),
    autEjecutante: randomValueofArray([
      "Carlos Guzman",
      "Ana Fernandez",
      "Isabel Ortiz",
      "Carmen Castro",
      "Miguel Vazquez",
      "Ricardo Fuentes",
    ]),
    numPersonas: randomValueofArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    requerimiento: randomValueofArray([
      "Repuestos",
      "Instrumentos de calibración",
      "Osciloscopio",
      "Cinta adhesiva",
    ]),
    observaciones: randomValueofArray([
      "Revisión mensual",
      "Calibración trimestral",
      "Reemplazo de componentes",
      "Verificación de señales",
    ]),
    horaAp: "",
    horaCierre: "",
    fecha: curretDate(),
  };

  return fakes;
};

function fakenPDT() {
  return `PDT-${Math.floor(Math.random() * 9999)
    .toString()
    .padStart(5, "0")}`;
}

function randomValueofArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
