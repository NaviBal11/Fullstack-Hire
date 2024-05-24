import axios from "axios";
import { createContext, ReactNode, useState } from "react";
import {
  EmployeeContextType,
  ProfilesData,
  InitialFormData,
} from "../@types/employees";

const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined
);

interface EmployeeProviderProps {
  children: ReactNode;
}

export const EmployeeProvider = ({ children }: EmployeeProviderProps) => {
  const [profiles, setProfiles] = useState<ProfilesData[]>([]);

  axios.defaults.withCredentials = true;

  //Reading Data from database and adding it to profiles state
  const readData = () => {
    axios
      .get(`${window.location.origin}/api/profiles`)
      .then((response) => {
        setProfiles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Adding data to database
  const addData = async (data: InitialFormData) => {
    await axios.post(`${window.location.origin}/api/profiles`, data);
  };

  //Editing a profile
  const editData = async (data: ProfilesData) => {
    axios.put(`${window.location.origin}/api/profiles/${data._id}`, {
      fullname: data.fullname,
      dob: data.dob,
      position: data.position,
    });
    setProfiles(
      profiles.map((profile) => (profile._id === data._id ? data : profile))
    );
  };

  //Deleting data from the database and profiles state
  const deleteData = async (id: string) => {
    await axios.delete(`${window.location.origin}/api/profiles/${id}`);
    setProfiles(profiles.filter((profile) => profile._id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{ profiles, readData, addData, editData, deleteData }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContext;
