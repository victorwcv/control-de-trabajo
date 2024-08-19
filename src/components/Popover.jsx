import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

function Popover({ areaName }) {
  const { sharedData } = useAppContext();
  const [numPers, setnumPers] = useState(0);
  console.log(numPers);

  const filterWorkingAreaData = (area) => {
    const totalPersonas = sharedData?.filter(
      (data) => data.area === area && data.horaAp && !data.horaCierre
    ).reduce((acc, curr) => {
      return acc + curr?.numPersonas
    },0)
    setnumPers(totalPersonas);
  };

  useEffect(() => {
    filterWorkingAreaData(areaName);
  }, [sharedData]);

  return (
    <div className="absolute bottom-0 right-0 p-2">
      <div className="font-bold text-2xl">
        {numPers}
      </div>
    </div>
  );
}

export default Popover;
