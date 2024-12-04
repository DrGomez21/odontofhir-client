import { useForm } from "react-hook-form"
import { Patient } from "../types/Patient.js";
import { postPatient } from "../api/fhir.api.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type PatientFormValues = {
  given: string,
  family: string,
  gender: string,
  birthDate: Date,
  phoneValue: string,
  emailValue: string,
  addresLine: string,
  addresCity: string,
  addresState: string,
  addresCountry: string
}

function PatientForm() {

  // Sirve para capturar las entradas del formulario
  const { register, handleSubmit } = useForm<PatientFormValues>()
  const navigate = useNavigate()

  const onSubmit = (data: PatientFormValues) => {
    parseFHIRResource(data)
  }

  const parseFHIRResource = (patient: PatientFormValues) => {
    const patientResource: Patient = {
      resourceType: 'Patient',
      name: [
        {
          use: 'official',
          given: [
            patient.given
          ],
          family: patient.family
        }
      ],
      gender: patient.gender,
      birthDate: patient.birthDate,
      telecom: [
        {
          value: patient.phoneValue,
          use: 'mobile',
          system: 'phone',
        },
        {
          system: 'email',
          value: patient.emailValue
        }
      ],
      addres: [
        {
          line: [
            patient.addresLine
          ],
          city: patient.addresCity,
          state: patient.addresState,
          country: patient.addresCountry
        }
      ]
    }

    addPatient(patientResource)

  }

  const addPatient = async (patient: Patient) => {
    try {
      toast.promise(
        postPatient(patient),
        {
          loading: 'Registrando...',
          success: <span>Registrado con éxito</span>,
          error: <span>No se pudo registrar</span>
        }
      )
      // Espera para luego volver a la pantalla de inicio.
      // TODO: ALGÚN DÍA MEJORAR ESTO
      setTimeout(() => {
        navigate('/patients');
      }, 1500);
    } catch (error) {
      console.log(error)
      toast.error('No pudimos completar el registro')
    }
  }

  return (
    <>
      <div className="p-4 w-auto max-w-[800px] bg-primary rounded-lg justify-center items-center">
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>

          <div className="flex colums-2 gap-6 w-full mb-3">
            <div className="flex flex-col gap-2 w-full">
              <label className="flex flex-col gap-1 font-semibold text-base" htmlFor="given">
                Nombre
                <input
                  className="px-3 py-3 text-base font-medium rounded-lg border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
                  type="text"
                  placeholder="Nombre"
                  {...register('given', { required: true })}
                />
              </label>

              <label className="flex flex-col gap-1 font-semibold text-base" htmlFor="family">
                Apellido
                <input
                  className="px-3 py-3 text-base font-medium rounded-lg border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
                  type="text"
                  placeholder="Apellido"
                  {...register('family', { required: true })}
                />
              </label>

              <label className="flex flex-col gap-1 font-semibold text-base" htmlFor="gender">
                Género
                <select
                  className="px-3 py-3 text-base font-medium rounded-lg border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
                  id="gender"
                  {...register('gender', { required: true })}
                >
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                  <option value="other">Otro</option>
                  <option value="unknown">Desconocido</option>
                </select>
              </label>

              <label htmlFor="birthDate" className="font-semibold text-base mt-2 mb-2 flex items-center gap-3">Nacimiento:
                <input
                  className="px-3 py-3 text-base font-medium rounded-lg border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
                  type="date"
                  id="birthDate"
                  {...register('birthDate', { required: true })}
                />
              </label>

              <label className="flex flex-col gap-1 font-semibold text-base" htmlFor="telefono">
                Número de teléfono
                <input
                  className="px-3 py-3 text-base font-medium rounded-lg border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
                  type="tel"
                  placeholder="Número de teléfono"
                  {...register('phoneValue', { required: true })}
                />
              </label>

              <label className="flex flex-col gap-1 font-semibold text-base" htmlFor="email">
                Correo electrónico
                <input
                  className="px-3 w-full py-3 text-base font-medium rounded-lg border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
                  type="email"
                  placeholder="Email"
                  {...register('emailValue', { required: true })}
                />
              </label>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="flex flex-col gap-1 font-semibold text-base" htmlFor="direccion">
                Dirección (Nro. Casa, calle, etc.)
                <input
                  className="px-3 py-3 text-base font-medium rounded-lg border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"

                  type="text"
                  placeholder="Dirección"
                  {...register('addresLine', { required: true })}
                />
              </label>

              <label className="flex flex-col gap-1 font-semibold text-base" htmlFor="ciudad">
                Ciudad:
                <input
                  className="px-3 py-3 text-base font-medium rounded-lg border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
                  id="ciudad"
                  type="text"
                  placeholder="Ciudad"
                  {...register('addresCity')}
                />
              </label>

              <label className="flex flex-col gap-1 mb-2 font-semibold text-base" htmlFor="departamento">
                Departamento
                <input
                  className="px-3 py-3 text-base font-medium rounded-lg border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
                  id="departamento"
                  type="text"
                  placeholder="Departamento"
                  {...register('addresState', { required: true })}
                />
              </label>

              <label className="flex flex-col gap-1 mb-2 font-semibold text-base" htmlFor="pais">
                País
                <input
                  className="px-3 py-3 text-base font-medium rounded-lg border focus:outline-none bg-[#ffffff] text-[#092d26] border-[#262323]"
                  type="text"
                  placeholder="País"
                  {...register('addresCountry', { required: true })}
                />
              </label>
            </div>
          </div>

          <button
            className="flex gap-2 mt-4 items-center font-semibold hover:scale-105 rounded-lg bg-accent px-4 py-2 shadow-2xl transition-all text-text hover:shadow-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
            </svg>
            Registrar paciente
          </button>

        </form>
      </div>
    </>

  )
}

export default PatientForm