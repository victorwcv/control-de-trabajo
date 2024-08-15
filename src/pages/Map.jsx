import React from "react";
import PlantMap from "../components/PlantMap";
import MapDetails from "../components/MapDetails";

function Map() {
  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center overflow-auto">
      <div className="flex justify-center items-center p-4 gap-4 bg-slate-200 shadow-md rounded-lg">
        <PlantMap />
        <MapDetails />
      </div>
    </div>
  );
}

export default Map;
