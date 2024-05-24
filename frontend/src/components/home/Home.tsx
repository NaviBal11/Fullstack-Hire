import Info from "./Info";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Stack spacing={2} sx={{ marginY: 5 }}>
          <Info
            heading="ABOUT"
            content=" At HI-TECH, we are passionate about crafting
        cutting-edge solutions that redefine the digital landscape. As a leading
        software development company, we combine innovation, expertise, and
        dedication to deliver unparalleled results to our clients."
          />

          <Info
            heading="NEW HIRE"
            content="Welcome to HI-TECH! We are excited to have you on
    board and look forward to the positive energy and fresh perspectives
    we know you'll bring to our team. If you have any questions or need
    assistance as you settle in, feel free to reach out. Here's to a
    successful and rewarding journey with us!Please add your informtaion so that we can create an ID for you."
            linkto="form"
            linkhd="Add your Info"
          />
          <Info
            heading="EMPLOYEE DATA"
            content="You can find Employee informtion here!!"
            linkto="profiles"
            linkhd="Want to find someone?"
          />
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ margin: 2 }}>
          <img src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
