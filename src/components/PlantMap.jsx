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

  const _AREAS = [
    {
      name: "Planta 1",
      className: "planta1",
    },
    {
      name: "Planta 2",
      className: "planta2",
    },
    {
      name: "Planta 3",
      className: "planta3",
    },
    {
      name: "Almacen 1",
      className: "almacen1",
    },
    {
      name: "Almacen 2",
      className: "almacen2",
    },
    {
      name: "SS.AA. 1",
      className: "ssaa1",
    },
    {
      name: "SS.AA. 2",
      className: "ssaa2",
    },
  ];

  const areaWorking = (area) => {
    const working = sharedData?.filter(
      (data) => data.area === area && data.horaAp && !data.horaCierre
    );
    return working;
  };

  return (
    <div className="plantMap">
      {_AREAS.map((area, index) => (
        <div key={index} className={`area ${area.className}`}>
          <p className="area__title">{area.name}</p>
          {areaWorking(area.name)?.map((data) => (
            <div
              key={data.id}
              className="cursor-pointer inline-flex flex-col justify-center items-center m-2"
              onClick={() => {
                setWorkPermit(null);
                setWorkPermit(data);
              }}
            >
              <img
                src="./images/pointer.png"
                className="size-6 shine"
                alt="pointer"
              />
              <small className="text-xs">{data?.nPDT}</small>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PlantMap;
