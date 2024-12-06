import { Link } from "react-router-dom"
import PatientTable from "../components/PatientTable"

function PatientsPage() {

  return (
    <div className="px-12 flex flex-col bg-background h-full text-text">

      <header className="w-full items-center justify-between py-3">
        <img src="./negative-odontofhir-logo.png" alt="OdontoFhir" />
      </header>

      <div className="mt-4 mb-4 py-4 px-4 flex w-full justify-between">
        <h1 className="text-2xl font-bold">Pacientes</h1>
        {/* <input type="search" id="patient-search-bar" className="border-2 border-[#121212] rounded-md py-2 px-4" placeholder="Buscar paciente..." /> */}
        <Link
          to="/patients-create"
          className="flex gap-2 py-2 px-4 items-center font-semibold hover:scale-105 rounded-lg bg-primary shadow-2xl transition-all text-text hover:shadow-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M16 19h6" />
            <path d="M19 16v6" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
          </svg>
          Agregar paciente
        </Link>
      </div>

      <div className="flex w-full justify-center px-4 pb-6">
        <PatientTable />
      </div>

    </div >
  )
}

export default PatientsPage

