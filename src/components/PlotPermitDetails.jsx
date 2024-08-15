import React from "react";

function PlotPermitDetails({ workPermit }) {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h3 className="font-bold text-xl mt-1"> {workPermit.nPDT}</h3>
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
