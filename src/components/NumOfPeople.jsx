// import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";

function NumOfPeople({ areaName }) {
  const { sharedData } = useAppContext();

  const people = useMemo(() => sharedData
    ?.filter(
      (data) => data.area === areaName && data.horaAp && !data.horaCierre
    )
    .reduce((acc, curr) => {
      return acc + curr?.numPersonas;
    }, 0),[sharedData]);

  return (
    <div className="absolute bottom-0 right-0 p-2">
      <div className="font-bold md:text-xl text-base">{people}</div>
    </div>
  );
}

export default NumOfPeople;
