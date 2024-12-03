import { Toaster } from "react-hot-toast"
import PatientForm from "./components/PatientForm"

function App() {

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <PatientForm />
      </div>

      <Toaster />
    </>
  )
}

export default App
