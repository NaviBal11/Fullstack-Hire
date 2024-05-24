import { useContext } from "react";
import EmployeeContext from "../../context/EmployeeContext";
import { EmployeeContextType } from "../../@types/employees";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditCard from "../EditCard";

interface Props {
  id: string;
  fullname: string;
  dob: string;
  position: string;
}

const EmployeeCard = ({ id, fullname, dob, position }: Props) => {
  const { deleteData } = useContext(EmployeeContext) as EmployeeContextType;

  const handleDelete = () => {
    deleteData(id);
  };

  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 450,
        borderRadius: 2,
        margin: "auto",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 40px 60px 0 rgba(0,0,0,0.5)",
        },
        backgroundColor: "#dad7cd",
      }}
    >
      <CardActions>
        <EditCard id={id} fullname={fullname} dob={dob} position={position} />
        <IconButton
          aria-label="delete"
          size="small"
          onClick={handleDelete}
          sx={{ position: "absolute", top: 5, right: 5 }}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </CardActions>

      <CardContent sx={{ paddingTop: 2 }}>
        <Typography variant="body1">
          <span
            style={{ display: "inline-block", width: 150, fontWeight: "550" }}
          >
            FULL NAME :{" "}
          </span>
          {fullname}
        </Typography>
        <Typography variant="body1">
          <span
            style={{ display: "inline-block", width: 150, fontWeight: "550" }}
          >
            DATE OF BIRTH :{" "}
          </span>
          {dob}
        </Typography>
        <Typography variant="body1">
          <span
            style={{ display: "inline-block", width: 150, fontWeight: "550" }}
          >
            {" "}
            POSITION :
          </span>
          {position}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
