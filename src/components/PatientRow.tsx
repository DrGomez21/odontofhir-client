import { Resource } from "../interfaces/patient.response"

interface Props {
  patient: Resource
}

export const PatientRow = ({ patient }: Props) => {
  return (
    <tr className="border-b-2 border-slate-200 text-text hover:bg-accent hover:text-background hover:cursor-pointer transition duration-100">
      <td className="py-4 px-4">
        <div className="flex gap-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-heart">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
            <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
          </svg>
          <span className="font-semibold text-base">{patient.name[0].given[0]}</span>
        </div>
      </td>
      <td className="font-semibold text-center text-base">
        {patient.gender === 'male' ? 'Masculino' : 'Femenino'}
      </td>
      <td className="font-semibold text-center text-base">{new Date(patient.birthDate).toLocaleDateString()}</td>
      <td className="text-end pr-4 font-semibold text-base">{patient.telecom[0].value}</td>
      <td className="text-end pr-4 font-semibold text-base">
        <div className="flex gap-2 justify-center">
          <button className="p-1 bg-accent rounded-md border border-background hover:bg-red-300">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  )
}
