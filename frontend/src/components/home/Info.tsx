import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdOutlinePersonSearch } from "react-icons/md";
import Stack from "@mui/material/Stack";

interface Props {
  heading: string;
  content: string;
  linkto?: string;
  linkhd?: string;
}
const Info = ({ heading, content, linkto, linkhd }: Props) => {
  const cardStyle = {
    position: "relative",
    maxWidth: 500,
    borderRadius: 2,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 40px 60px 0 rgba(0,0,0,0.5)",
    },
    backgroundColor: "#dad7cd",
  };

  return (
    <Card variant="outlined" sx={cardStyle}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ paddingBottom: 2 }}
        >
          {content}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Link to={`/${linkto}`}>{linkhd}</Link>
          {heading === "NEW HIRE" && <BsFillPersonPlusFill />}
          {heading === "EMPLOYEE DATA" && <MdOutlinePersonSearch />}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Info;
