export type Patient = {
  resourceType: string,
  name: [
    {
      use: string,
      given: [
        string
      ],
      family: string
    }
  ],
  gender: string,
  birthDate: Date,
  telecom: [
    {
      value: string,
      use: string,
      system: string,
    },
    {
      system: string,
      value: string
    }
  ],
  addres: [
    {
      line: [
        string
      ],
      city: string,
      state: string,
      country: string
    }
  ]
}