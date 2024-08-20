import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import EntryForm from "../components/EntryForm";
import ExcelUploader from "../components/ExcelUploader";
import { fakeEntryValues } from "../mocks/fakeEntryValues";
import {
  getAllFromFirestore,
  saveToFirestore,
  deleteFromFirestore,
  updateFirestore,
} from "../DAL";
import { useAppContext } from "../context/AppContext";

function Resume() {
  const { sharedData, setSharedData } = useAppContext();
  const [isActive, setIsActive] = useState(null);
  const [showNewEntry, setShowNewEntry] = useState(null);
  const [editEntry, setEditEntry] = useState(null);

  useEffect(() => {
    getAllFromFirestore().then((data) => setSharedData(data));
  }, []);

  const newEntryValues = {
    nPDT: "",
    area: "",
    equipo: "",
    tarea: "",
    disciplina: "",
    ejecutante: "",
    autEjecutante: "",
    numPersonas: "",
    requerimiento: "",
    observaciones: "",
    horaAp: "",
    horaCierre: "",
    fecha: "",
  };

  const handleEdit = (id, entry) => {
    updateFirestore(id, entry).then(() => {
      setSharedData((data) => {
        return data.map((d) => (d.id === id ? entry : d));
      });
      setEditEntry(null);
    });
  };

  const handleDelete = (id) => {
    deleteFromFirestore(id).then(() => {
      getAllFromFirestore()
        .then((data) => setSharedData(data))
        .then(() => {
          setEditEntry(null);
        });
    });
  };

  const handleNewEntry = (newEntry) => {
    saveToFirestore(newEntry).then(() => {
      getAllFromFirestore().then((data) => setSharedData(data));
      setShowNewEntry(null);
    });
  };

  return (
    <>
      {showNewEntry && (
        <EntryForm
          form={"new"}
          onShowForm={() => setShowNewEntry(null)}
          onSave={handleNewEntry}
          initialValues={fakeEntryValues()}
        />
      )}

      {editEntry && (
        <EntryForm
          form={"edit"}
          onShowForm={() => setEditEntry(null)}
          onEdit={handleEdit}
          onDelete={handleDelete}
          initialValues={editEntry}
          disabled={true}
        />
      )}
      <section className="container mx-auto md:px-8 px-2 py-4 h-[calc(100vh-64px)]">
        <div className="flex flex-wrap justify-around items-center gap-4 my-8">
          <h2 className="text-2xl font-bold">Anexo 1</h2>

          <Formik
            initialValues={{ fecha: "" }}
            onSubmit={(values, { resetForm }) => {
              getAllFromFirestore(values.fecha).then((data) => {
                setSharedData(data);
                resetForm();
              });
            }}
          >
            {(formik) => (
              <Form className="flex flex-wrap items-center justify-center">
                <DatePicker
                  className="border border-slate-300 px-4 py-2 m rounded-full  text-center"
                  selected={formik.values.fecha}
                  onChange={(date) =>
                    formik.setFieldValue("fecha", date.toISOString())
                  }
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Ingrese Fecha"
                />
                <button type="submit" className="btn bg-teal-500 m-2">
                  Buscar Registro
                </button>
              </Form>
            )}
          </Formik>
          <div className="flex flex-wrap justify-center items-center gap-2">
            <button
              type="button"
              onClick={setShowNewEntry}
              className="bg-blue-500 text-white px-6 py-2 rounded-full"
            >
              Crear PDT
            </button>
            <ExcelUploader
              onUploadFile={(fileData) => setSharedData([...fileData, ...data])}
            />
          </div>
        </div>
        <div className="relative overflow-auto shadow-md">
          <table className="table-auto w-full">
            <thead className="bg-slate-200 text-nowrap text-center sticky top-0">
              <tr className="">
                <th className="p-4">Item</th>
                <th className="p-4">N° PDT</th>
                <th className="p-4">Area</th>
                <th className="p-4">Equipo</th>
                <th className="p-4">Tarea</th>
                <th className="p-4">Disciplina</th>
                <th className="p-4">Ejecutante</th>
                <th className="p-4">Aut. Ejecutante</th>
                <th className="p-4">Personas</th>
                <th className="p-4">Requerimiento</th>
                <th className="p-4">Observaciones</th>
                <th className="p-4">Hora Ap.</th>
                <th className="p-4">Hora Cie.</th>
              </tr>
            </thead>
            <tbody className="bg-slate-100 text-center text-sm ">
              {sharedData?.length > 0 ? (
                sharedData
                  .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
                  .map((item, index) => (
                    <tr
                      className={`border-b border-slate-300 cursor-pointer hover:bg-yellow-300 ${
                        isActive === item.id && "bg-yellow-200"
                      }`}
                      key={index}
                      onClick={() => {
                        setEditEntry(item);
                        setIsActive(item.id);
                      }}
                    >
                      <td className="cell p-2">{index + 1}</td>
                      <td className="cell p-2">{item.nPDT}</td>
                      <td className="cell p-2">{item.area}</td>
                      <td className="cell p-2">{item.equipo}</td>
                      <td className="cell p-2">{item.tarea}</td>
                      <td className="cell p-2">{item.disciplina}</td>
                      <td className="cell p-2">{item.ejecutante}</td>
                      <td className="cell p-2">{item.autEjecutante}</td>
                      <td className="cell p-2">{item.numPersonas}</td>
                      <td className="cell p-2">{item.requerimiento}</td>
                      <td className="cell p-2">{item.observaciones}</td>
                      <td className="cell p-2">{item.horaAp}</td>
                      <td className="cell p-2">{item.horaCierre}</td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan={13} className="cell p-2">
                    No hay datos
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Resume;
