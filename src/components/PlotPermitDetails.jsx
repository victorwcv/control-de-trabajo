import React from "react";

function PlotPermitDetails({ workPermit }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-center font-bold text-xl my-4">Detalle</h2>
      <h5 className="font-semibold mt-1">Numero de permiso</h5>
      <p> {workPermit.nPDT}</p>
      <h5 className="font-semibold mt-1">Area</h5>
      <p> {workPermit.area}</p>
      <h5 className="font-semibold mt-1">Ejecutante</h5>
      <p> {workPermit.ejecutante}</p>
      <h5 className="font-semibold mt-1">Personas</h5>
      <p> {workPermit.numPersonas}</p>
      <h5 className="font-semibold mt-1">Hora de apertura</h5>
      <p> {workPermit.horaAp}</p>
    </div>
  );
}

export default PlotPermitDetails;
