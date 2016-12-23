export interface IBorrower {
  id: number,
  pfmFileId: string,
  isCoApp: boolean,
  firstName: string,
  lastName: string,
  middleName?: string,
  ssn: number,
  gender?: string,
  marital?: number,
  dob?: string,
  age?: number
  dependents?: number,
  phone?: number
}
