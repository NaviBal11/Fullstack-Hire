import { useContext } from "react";
import { useForm } from "react-hook-form";
import Heading from "./Heading";
import InputField from "./InputField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import EmployeeContext from "../context/EmployeeContext";
import { EmployeeContextType, InitialFormData } from "../@types/employees";

function Form() {
  const { register, handleSubmit, reset } = useForm<InitialFormData>();
  const { addData } = useContext(EmployeeContext) as EmployeeContextType;

  const upload = (data: InitialFormData) => {
    addData(data);
    reset();
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit(upload)}>
        <Heading>REGISTER YOURSELF</Heading>
        <InputField label="Full Name" register={register} name="fullname" />

        <InputField type="date" register={register} name="dob" />

        <InputField label="Position" register={register} name="position" />

        <Button
          type="submit"
          variant="contained"
          sx={{
            display: "block",
            margin: "auto",
            backgroundColor: "#dad7cd",
            color: "black",
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default Form;
