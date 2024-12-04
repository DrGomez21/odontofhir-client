import { Link } from "react-router-dom"
import PatientForm from "../components/PatientForm"

function PatientFormCreate() {


  return (
    <div className="px-12 flex flex-col bg-background h-screen text-text">
      <header className="w-full items-center justify-between py-3">
        <Link to={'/'}>
          <img src="./odontofhir-logo.png" alt="OdontoFhir" />
        </Link>
      </header>
      <div className="flex w-full justify-center items-center px-4 mt-10">
        <PatientForm />
      </div>
    </div>
  )
}

export default PatientFormCreate