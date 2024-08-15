import { useEffect } from "react";
import "../styles/plantMap.css";
import { useAppContext } from "../context/AppContext";
import { db } from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { currentDateFormated } from "../utils/dates";
import { usePlotContext } from "../context/PlotContext";

function PlantMap() {
  const { sharedData, setSharedData } = useAppContext();
  const { setWorkPermit } = usePlotContext();

  useEffect(() => {
    const date = currentDateFormated().split("T")[0];

    const q = query(
      collection(db, "reports"),
      where("fecha", ">=", `${date}T00:00:00.000Z`),
      where("fecha", "<=", `${date}T23:59:59.999Z`)
    );

    // Escucha los cambios en tiempo real en la colección específica de Firestore
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setSharedData(data);
    });
    // Limpia la suscripción cuando el componente se desmonta
    return () => unsubscribe();
  }, [setSharedData]);

  const _AREAS = {
    planta1: "Planta 1",
    planta2: "Planta 2",
    planta3: "Planta 3",
    almacen1: "Almacen 1",
    almacen2: "Almacen 2",
    ssaa1: "SS.AA. 1",
    ssaa2: "SS.AA. 2",
  };

  const areaWorking = (area) => {
    const working = sharedData?.filter(
      (data) => data.area === area && data.horaAp && !data.horaCierre
    );
    return working;
  };

  return (
    <div className="plantMap">
      <div className="area planta1">
        <p className="area__title">Planta 1</p>
        {areaWorking(_AREAS.planta1)?.map((data) => (
          <img
            key={data.id}
            src="./images/pointer.png"
            className="size-6 inline-block shine"
            alt="pointer"
            title={data?.nPDT}
            onClick={() => {
              setWorkPermit(null);
              setWorkPermit(data);
            }}
          />
        ))}
      </div>
      <div className="area planta2">
        <p className="area__title">Planta 2 </p>
        {areaWorking(_AREAS.planta2)?.map((data) => (
          <img
            key={data.id}
            src="./images/pointer.png"
            className="size-6 inline-block shine"
            alt="pointer"
            title={data?.nPDT}
            onClick={() => {
              setWorkPermit(null);
              setWorkPermit(data);
            }}
          />
        ))}
      </div>
      <div className="area planta3">
        <p className="area__title">Planta 3</p>
        {areaWorking(_AREAS.planta3)?.map((data) => (
          <img
            key={data.id}
            src="./images/pointer.png"
            className="size-6 inline-block shine"
            alt="pointer"
            title={data?.nPDT}
            onClick={() => {
              setWorkPermit(null);
              setWorkPermit(data);
            }}
          />
        ))}
      </div>
      <div className="area almacen1">
        <p className="area__title">Almacén 1</p>
        {areaWorking(_AREAS.almacen1)?.map((data) => (
          <img
            key={data.id}
            src="./images/pointer.png"
            className="size-6 inline-block shine"
            alt="pointer"
            title={data?.nPDT}
            onClick={() => {
              setWorkPermit(null);
              setWorkPermit(data);
            }}
          />
        ))}
      </div>
      <div className="area almacen2">
        <p className="area__title">Almacén 2</p>
        {areaWorking(_AREAS.almacen2)?.map((data) => (
          <img
            key={data.id}
            src="./images/pointer.png"
            className="size-6 inline-block shine"
            alt="pointer"
            title={data?.nPDT}
            onClick={() => {
              setWorkPermit(null);
              setWorkPermit(data);
            }}
          />
        ))}
      </div>
      <div className="area ssaa1">
        <p className="area__title">SSAA 1</p>
        {areaWorking(_AREAS.ssaa1)?.map((data) => (
          <img
            key={data.id}
            src="./images/pointer.png"
            className="size-6 inline-block shine"
            alt="pointer"
            title={data?.nPDT}
            onClick={() => {
              setWorkPermit(null);
              setWorkPermit(data);
            }}
          />
        ))}
      </div>
      <div className="area ssaa2">
        <p className="area__title">SSAA 2</p>
        {areaWorking(_AREAS.ssaa2)?.map((data) => (
          <img
            key={data.id}
            src="./images/pointer.png"
            className="size-6 inline-block shine"
            alt="pointer"
            title={data?.nPDT}
            onClick={() => {
              setWorkPermit(null);
              setWorkPermit(data);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default PlantMap;
