import * as XLSX from "xlsx";
import { dateFormated } from "../utils/dates";

const ExcelUploader = ({ onUploadFile }) => {
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (e) => {
      const arrayBuffer = e.target.result;
  
      // Leer el archivo de Excel
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
  
      // Convertir la hoja a JSON, utilizando la primera fila como cabecera
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      jsonData.shift(); // Eliminar la primera fila (cabecera)
      // Separar las cabeceras y las filas
      const headers = jsonData[0].slice(1).map((header) => header.trim()); // Tomar las cabeceras desde la segunda columna
      console.log(headers);
      
      const rows = jsonData.slice(1); // Omitir la primera fila (cabeceras)
  
      // Procesar los datos para omitir la primera columna (item) y crear un array de objetos
      const processedData = rows.map((row) => {
        const rowData = {};
        headers.forEach((header, index) => {
          rowData[header] = row[index + 1]; // Omitir la primera columna
        });
        return rowData;
      });
  
      // Filtrar los datos para eliminar los objetos donde el campo 'n pdt' es undefined o vacío
      const filteredData = processedData.filter((row) => row["nPDT"]);

      const dataWithDate = filteredData.map((row) => ({
        ...row,
        fecha: dateFormated(new Date().toISOString()), // Agregar el campo fecha con la fecha seleccionada
      }));
  
      // Guardar los datos en el estado padre
      onUploadFile(dataWithDate);
    };
  
    reader.readAsArrayBuffer(file);
  };
  

  return (
    <>
      <label
        htmlFor="file-upload"
        className="bg-green-500 text-white px-6 py-2 rounded-full cursor-pointer"
      >
        Subir archivo Excel
      </label>

      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="hidden"
        id="file-upload"
      />
    </>
  );
};

export default ExcelUploader;
