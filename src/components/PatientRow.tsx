import { Resource } from "../interfaces/patient.response"

interface Props {
  patient: Resource
}

export const PatientRow = ({ patient }: Props) => {
  return (
    <tr className="border-2 border-black">
      <td className="py-2 px-4">
        <div className="flex gap-2 justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-heart">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
            <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
          </svg>
          <span className="font-semibold text-[#4A4A4A] text-base">{patient.name[0].given[0]}</span>
        </div>
      </td>
      <td className="font-semibold text-center text-[#4A4A4A] text-base">
        {patient.gender === 'male' ? 'Masculino' : 'Femenino'}
      </td>
      <td className="font-semibold text-center text-[#4A4A4A] text-base">{new Date(patient.birthDate).toLocaleDateString()}</td>
      <td className="text-end pr-4 font-semibold text-[#4A4A4A] text-base">{patient.telecom[0].value}</td>
    </tr>
  )
}
