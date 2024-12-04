import { Toaster } from "react-hot-toast"
import PatientsPage from "./pages/PatientsPage"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import PatientFormCreate from "./pages/PatientFormCreate"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/patients'} />} />
        <Route path="/patients" element={<PatientsPage />} />
        <Route path="/patients-create" element={<PatientFormCreate />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
