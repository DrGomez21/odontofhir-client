import { usePatient } from "../hooks/usePatient"

function PatientsPage() {

  const { patients } = usePatient()

  console.log(patients)

  return (
    <div>
      <h1>Patient Page</h1>
    </div>
  )
}

export default PatientsPage

