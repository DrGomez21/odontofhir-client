import axios from "axios";
import { Patient } from "../types/Patient";

export const postPatient = (patient: Patient) => {
    return axios.post('http://localhost:8080/fhir/Patient/', patient)
}

export const getAllPatient = () => {
    return axios.get('http://localhost:8080/fhir/Patient/')
}