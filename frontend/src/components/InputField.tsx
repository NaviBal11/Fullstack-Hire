import TextField from "@mui/material/TextField";
import { UseFormRegister } from "react-hook-form";

interface Props {
  label?: string;
  type?: string;
  register: UseFormRegister<any>;
  name: string;
}

function InputField({ label, type, register, name }: Props) {
  return (
    <TextField
      required
      id="outlined-basic"
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      {...register(name)}
      sx={{ margin: 2 }}
    />
  );
}

export default InputField;
