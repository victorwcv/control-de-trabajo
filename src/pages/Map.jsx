import React from "react";
import PlantMap from "../components/PlantMap";
import MapDetails from "../components/MapDetails";
import { PlotProvider } from "../context/PlotContext";

function Map() {
  return (
    <PlotProvider>
      <div className="min-h-[calc(100vh-64px)]  flex justify-center items-center overflow-auto">
        <div className="w-[90%] lg:w-[80%] min-h-[90%] flex justify-center items-center lg:flex-nowrap flex-wrap p-4 gap-4 bg-slate-200 shadow-md rounded-lg m-4">
          <PlantMap />
          <MapDetails />
        </div>
      </div>
    </PlotProvider>
  );
}

export default Map;
