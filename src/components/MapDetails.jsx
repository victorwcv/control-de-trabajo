import { useAppContext } from "../context/AppContext";
import { usePlotContext } from "../context/PlotContext";
import { shortDateFormated } from "../utils/dates";
import PlotPermitDetails from "./PlotPermitDetails";

function MapDetails() {
  const { sharedData } = useAppContext();
  const { workPermit, setWorkPermit } = usePlotContext();

  return (
    <div className="w-[300px] h-[700px] bg-slate-50 rounded-lg ">
      <h2 className="text-center font-bold text-2xl mt-4">Resumen</h2>
      <div className="flex flex-col gap-2 p-4">
        <ul className="text-center">
          <li>{shortDateFormated()}</li>
          <br />
          <hr />
          <br />
          <li className="mb-1 flex justify-between border-b">
            <span className=" text-left font-semibold">
              Permisos registrados:{" "}
            </span>
            <span>{sharedData?.length}</span>
          </li>

          <li className="mb-1 flex justify-between border-b">
            <span className=" text-left font-semibold">
              Permisos abiertos:{" "}
            </span>
            {sharedData?.filter((entry) => entry.horaAp).length}
          </li>
          <li className="mb-1 flex justify-between border-b">
            <span className=" text-left font-semibold">
              Permisos por abrir:{" "}
            </span>
            {
              sharedData?.filter((entry) => !entry.horaAp && !entry.horaCierre)
                .length
            }
          </li>

          <li className="mb-1 flex justify-between border-b">
            <span className=" text-left font-semibold">
              Permisos cerrados:{" "}
            </span>
            {
              sharedData?.filter((entry) => entry.horaAp && entry.horaCierre)
                .length
            }
          </li>

          <li className="mb-1 flex justify-between border-b">
            <span className=" text-left font-semibold">
              Permisos en ejecucion:{" "}
            </span>
            {
              sharedData?.filter((entry) => entry.horaAp && !entry.horaCierre)
                .length
            }
          </li>
          <li className="mb-1 flex justify-between border-b">
            <p className="font-semibold">Total personas en ejecucion: </p>
            {sharedData
              ?.filter((entry) => entry.horaAp && !entry.horaCierre)
              .reduce((prev, curr) => prev + curr?.numPersonas, 0)}
          </li>

          <br />
          <hr />
        </ul>
        <div className="relative">
          {workPermit ? (
            <>
              <button
                className="absolute top-0 right-0 font-bold bg-red-500 text-white px-2 rounded-sm"
                onClick={() => setWorkPermit(null)}
              >
                X
              </button>

              <PlotPermitDetails workPermit={workPermit} />
            </>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <img
                src="/images/pointer.png"
                alt="pointer"
                className="size-14 mt-20"
              />
              <p className=" font-semibold text-center mx-6">
                Seleccione un permiso para ver los detalles
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MapDetails;
