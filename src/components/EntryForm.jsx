import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import IMPUT_FIELDS from "../constants/newEntry";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO } from "date-fns";

function EntryForm({
  onShowForm,
  onSave,
  onEdit,
  onDelete,
  initialValues,
  disabled = false,
}) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-40">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          if (onSave) onSave(values);
          if (onEdit) onEdit(values.id, values);
        }}
        validationSchema={Yup.object({
          nPDT: Yup.string().required("Requerido"),
          area: Yup.string().required("Requerido"),
          equipo: Yup.string().required("Requerido"),
          tarea: Yup.string().required("Requerido"),
          disciplina: Yup.string().required("Requerido"),
          ejecutante: Yup.string().required("Requerido"),
          autEjecutante: Yup.string().required("Requerido"),
          numPersonas: Yup.number().required("Requerido"),
          requerimiento: Yup.string().required("Requerido"),
          observaciones: Yup.string().required("Requerido"),
          horaAp: Yup.string(),
          horaCierre: Yup.string(),
          fecha: Yup.date(),
        })}
      >
        {(formik) => (
          <Form className="bg-slate-100 max-w-[850px] max-h-[90%] p-8 m-4 rounded-lg flex flex-col">
            <div className="  flex justify-center flex-wrap gap-4 h-full w-full overflow-auto">
              {IMPUT_FIELDS.map((inp) => (
                <div key={inp.NAME}>
                  <p className="ml-4">{inp.LABEL}</p>
                  {inp.TYPE !== "select" && inp.NAME !== "fecha" ? (
                    <Field
                      name={inp.NAME}
                      type={inp.TYPE}
                      placeholder={inp.PLACEHOLDER}
                      className="border border-slate-300 px-4 py-2 rounded-md outline-none w-[250px] disabled:bg-white disabled:bg-opacity-50 disabled:text-neutral-500"
                      disabled={
                        inp.NAME === "horaAp" || inp.NAME === "horaCierre"
                          ? false
                          : disabled
                      }
                    />
                  ) : inp.TYPE === "select" ? (
                    <Field
                      as="select"
                      name={inp.NAME}
                      className="border border-slate-300 px-4 py-2 rounded-md outline-none w-[250px] disabled:bg-white disabled:bg-opacity-50 "
                      disabled={disabled}
                    >
                      <option value="">{inp.PLACEHOLDER}</option>
                      {inp.OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                  ) : (
                    <DatePicker
                      className="border border-slate-300 px-4 py-2 rounded-md outline-none w-[250px] disabled:bg-white disabled:bg-opacity-50 disabled:text-neutral-500"
                      selected={formik.values.fecha}
                      onChange={(date) =>
                        formik.setFieldValue(
                          "fecha",
                          format(
                            parseISO(date.toISOString()),
                            "yyyy-MM-dd'T'HH:mm:ss"
                          )
                        )
                      }
                      dateFormat="dd/MM/yyyy"
                      placeholderText="dd/mm/yyyy"
                      disabled={disabled}
                    />
                  )}
                  <p className="text-red-500 mr-4 h-1 text-sm text-right">
                    <ErrorMessage name={inp.NAME} />
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-wrap sm:justify-between justify-center gap-4 mt-8">
              <div className="flex gap-4">
                <button type="submit" className="btn bg-teal-500 w-32">
                  Guardar
                </button>

                <button
                  type="button"
                  onClick={onShowForm}
                  className="btn bg-blue-500 w-32"
                >
                  Cancelar
                </button>
              </div>

              {onDelete && (
                <button
                  type="button"
                  onClick={() => onDelete(initialValues.id)}
                  className="btn bg-red-500 w-32"
                >
                  Eliminar
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EntryForm;
