import { useContext, useState } from "react";
import EmployeeContext from "../context/EmployeeContext";
import { EmployeeContextType } from "../@types/employees";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface Props {
  id: string;
  fullname: string;
  dob: string;
  position: string;
}

function EditCard({ id, fullname, dob, position }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [editedFullname, setEditedFullname] = useState(fullname);
  const [editedDob, setEditedDob] = useState(dob);
  const [editedPosition, setEditedPosition] = useState(position);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null); //Popper functionality

  const { editData } = useContext(EmployeeContext) as EmployeeContextType;

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handlePopperClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    const data = {
      _id: id,
      fullname: editedFullname,
      dob: editedDob,
      position: editedPosition,
    };
    editData(data);
    toggleEditMode();
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton
        aria-label="edit"
        size="small"
        onClick={toggleEditMode}
        sx={{ position: "absolute", top: 5, right: 40 }}
      >
        <EditIcon fontSize="inherit" />
      </IconButton>
      <Popover
        open={editMode}
        anchorEl={anchorEl}
        onClose={handlePopperClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <Box
          height={300}
          width={600}
          display="flex"
          flexDirection="column"
          gap={2}
          p={5}
          sx={{
            border: "3px grey",
            backgroundColor: "#dad7cd",
            borderRadius: "2",
          }}
        >
          <TextField
            label="Full Name"
            value={editedFullname}
            onChange={(e) => setEditedFullname(e.target.value)}
          />
          <TextField
            label="Date of Birth"
            value={editedDob}
            onChange={(e) => setEditedDob(e.target.value)}
          />
          <TextField
            label="Position"
            value={editedPosition}
            onChange={(e) => setEditedPosition(e.target.value)}
          />
          <Button onClick={handleEdit}>Save</Button>
          <Button onClick={toggleEditMode}>Cancel</Button>
        </Box>
      </Popover>
    </>
  );
}

export default EditCard;
