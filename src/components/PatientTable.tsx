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
      <table className="w-[600px] rounded-lg text-[#4A4A4A] text-xl">
        <thead className="bg-[#B3E5FC] justify-evenly">
          <th>Paciente</th>
          <th>Género</th>
          <th>Nacimiento</th>
          <th>Contacto</th>
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