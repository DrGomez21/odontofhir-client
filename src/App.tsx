import { Toaster } from "react-hot-toast"
import PatientTable from "./components/PatientTable"

function App() {

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* <PatientForm /> */}
        {/* <PatientsPage /> */}
        <PatientTable />
      </div>

      <Toaster />
    </>
  )
}

export default App
