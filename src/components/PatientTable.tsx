import { usePatient } from "../hooks/usePatient"
import { PatientRow } from "./PatientRow"


function PatientTable() {
  const { patients } = usePatient()

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