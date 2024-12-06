import axios from "axios";
import { Patient } from "../types/Patient";
import { HapiFhirPatientResponse } from "../interfaces/patient.response";

export const postPatient = (patient: Patient) => {
    return axios.post('http://localhost:8080/fhir/Patient/', patient)
}

export const getAllPatient = async () => {
    try {
        const response = await axios.get<HapiFhirPatientResponse>('http://localhost:8080/fhir/Patient/')
        return response.data.entry
    } catch (error) {
        console.log(error)
        return []
    }
}

export const deletePatient = async (id: number) => {
    try {
        const response = await axios.delete(`http://localhost:8080/fhir/Patient/${id}`)
        return response
    } catch (error) {
        console.log(error)
    }
}