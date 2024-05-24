import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState, useEffect, useContext } from "react";
import Heading from "../Heading";
import EmployeeContext from "../../context/EmployeeContext";
import { EmployeeContextType } from "../../@types/employees";
import EmployeeCard from "./EmployeeCard";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

function Profiles() {
  const [term, setTerm] = useState(""); //for Search functionality
  const { profiles, readData } = useContext(
    EmployeeContext
  ) as EmployeeContextType;

  useEffect(() => {
    readData();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>EMPLOYEE DATA</Heading>
      <TextField
        label="Search..."
        variant="outlined"
        sx={{ marginBottom: 5 }}
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
        onChange={(e) => setTerm(e.target.value)}
      />

      <Grid container spacing={4}>
        {profiles
          .filter(
            (profile) =>
              profile.fullname && profile.fullname.toLowerCase().includes(term)
          )
          .map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Typography key={index} variant="body1">
                <EmployeeCard
                  id={item._id}
                  fullname={item.fullname}
                  dob={item.dob}
                  position={item.position}
                />
              </Typography>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default Profiles;
