import { useEffect, useState } from 'react'
import { Entry, Resource } from '../interfaces/patient.response'
import { getAllPatient } from '../api/fhir.api'

export const usePatient = () => {

  const [entries, setEntries] = useState<Entry[]>([])
  const [patients, setPatients] = useState<Resource[]>([])

  useEffect(() => {
    getAllPatient()
      .then((entries) => {
        setEntries(entries)
        // Extraemos el Resource de cada Entry y actualizamos patients
        const resourcesList = entries.map(entry => entry.resource)
        setPatients(resourcesList)
      })
  }, [])

  return {
    entries,
    patients
  }
}
