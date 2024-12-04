import { usePatient } from "../hooks/usePatient"
import { PatientRow } from "./PatientRow"


function PatientTable() {
  const { patients } = usePatient()

  // En caso de que no vengan pacientes se ejecuta este return.
  if (patients.length == 0) {
    return (
      <div className="flex flex-col gap-2 items-center px-4 py-2 shadow-xl bg-slate-50">
        <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Health%20Worker%20Light%20Skin%20Tone.png" alt="No hay pacientes" width="96" height="96" />
        <span className="font-semibold text-lg">Ocurrió un error o no hay pacientes registrados.</span>
      </div>
    )
  }

  return (
    <>
      <table className="table-auto min-w-full rounded-lg text-text text-lg">
        <thead className="bg-primary justify-evenly rounded-full py-4">
          <th scope="col" className="py-4">Paciente</th>
          <th scope="col" className="py-4">Género</th>
          <th scope="col" className="py-4">Nacimiento</th>
          <th scope="col" className="py-4">Contacto</th>
        </thead>
        <tbody>
          {
            patients.map((paciente) => (
              <PatientRow key={paciente.id} patient={paciente} />
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default PatientTable