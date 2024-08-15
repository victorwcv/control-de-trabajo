import { useAppContext } from "../context/AppContext";
import { shortDateFormated } from "../utils/dates";

function MapDetails() {
  const { sharedData, setSharedData } = useAppContext();

  return (
    <div className="w-[300px] h-[700px] bg-slate-50 rounded-lg ">
      <h2 className="text-center font-bold text-2xl mt-4">Resumen</h2>
      <div className="flex flex-col gap-2 p-4">
        <ul className="text-center">
          <li>
            {shortDateFormated()}
          </li>
          <br />
          <hr />
          <br />
          <li className="mb-1">
            <p className="block text-left font-semibold">
              Permisos registrados:{" "}
            </p>
            {sharedData?.length}
          </li>

          <li className="mb-1">
            <p className="block text-left font-semibold">Permisos abiertos: </p>
            {sharedData?.filter((entry) => entry.horaAp).length}
          </li>
          <li className="mb-1">
            <p className="block text-left font-semibold">Permisos por abrir: </p>
            {sharedData?.filter((entry) => !entry.horaAp && !entry.horaCierre).length}
          </li>

          <li className="mb-1">
            <p className="block text-left font-semibold">Permisos cerrados: </p>
            {
              sharedData?.filter((entry) => entry.horaAp && entry.horaCierre)
                .length
            }
          </li>

          <li className="mb-1">
            <p className="block text-left font-semibold">
              Permisos en ejecucion:{" "}
            </p>
            {
              sharedData?.filter((entry) => entry.horaAp && !entry.horaCierre)
                .length
            }
          </li>
          <li className="mb-1">
            <p className="block text-left font-semibold">
              Total personas en ejecucion:{" "}
            </p>
            {sharedData
              ?.filter((entry) => entry.horaAp && !entry.horaCierre)
              .reduce((prev, curr) => prev + curr?.numPersonas, 0)}
          </li>

          <br />
          <hr />
          <br />
        </ul>
      </div>
    </div>
  );
}

export default MapDetails;
