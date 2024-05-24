import Typography from "@mui/material/Typography";

interface Props {
  children: string;
}

function Heading({ children }: Props) {
  return (
    <Typography variant="h4" sx={{ margin: 6, textAlign: "center" }}>
      {children}
    </Typography>
  );
}

export default Heading;
