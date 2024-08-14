const INPUT_FIELDS = [
  {
    NAME: "nPDT",
    LABEL: "N° PDT",
    TYPE: "text",
    PLACEHOLDER: "00000",
  },
  {
    NAME: "area",
    LABEL: "Area",
    TYPE: "select",
    OPTIONS: ["Planta 1", "Planta 2", "Planta 3", "Almacen 1", "Almacen 2", "SS.AA. 1", "SS.AA. 2"],
    PLACEHOLDER: "Seleccione el area",
  },
  {
    NAME: "equipo",
    LABEL: "Equipo",
    TYPE: "text",
    PLACEHOLDER: "Máquina A",
  },
  {
    NAME: "tarea",
    LABEL: "Tarea",
    TYPE: "text",
    PLACEHOLDER: "Mantenimiento Preventivo",
  },
  {
    NAME: "disciplina",
    LABEL: "Disciplina",
    TYPE: "select",
    OPTIONS: ["Mecanica", "Electrica", "Instrum. & Control", "SS.GG.", "I.E."],
    PLACEHOLDER: "Selleccione la disciplina",
  },
  {
    NAME: "ejecutante",
    LABEL: "Ejecutante",
    TYPE: "text",
    PLACEHOLDER: "Juan Pérez",
  },
  {
    NAME: "autEjecutante",
    LABEL: "Autor Ejecutante",
    TYPE: "text",
    PLACEHOLDER: "Carlos García",
  },
  {
    NAME: "numPersonas",
    LABEL: "Personas",
    TYPE: "number",
    PLACEHOLDER: "3",
  },
  {
    NAME: "requerimiento",
    LABEL: "Requerimiento",
    TYPE: "text",
    PLACEHOLDER: "Repuestos",
  },
  {
    NAME: "observaciones",
    LABEL: "Observaciones",
    TYPE: "text",
    PLACEHOLDER: "Revisión mensual",
  },
  {
    NAME: "horaAp",
    LABEL: "Hora Apertura",
    TYPE: "text",
    PLACEHOLDER: "--:--",
  },
  {
    NAME: "horaCierre",
    LABEL: "Hora Cierre",
    TYPE: "text",
    PLACEHOLDER: "--:--",
  },
  {
    NAME: "fecha",
    LABEL: "Fecha",
    TYPE: "date",
    PLACEHOLDER: "2022-01-01",
  },
];

export default INPUT_FIELDS;