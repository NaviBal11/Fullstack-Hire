export interface ProfilesData {
    _id: string;
    fullname: string;
    dob: string;
    position: string;
  }

export const initialFormData = {
    fullname: "",
    dob: "",
    position: "",
  };

export type InitialFormData = typeof initialFormData;

export type EmployeeContextType={
  profiles:ProfilesData[];
  readData:()=>void;
  addData:(data:InitialFormData)=>void;
  editData:(data:ProfileData)=>void;
  deleteData:(id:string)=>void;
}