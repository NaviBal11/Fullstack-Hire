import { NavLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const appBarStyle = {
    position: "relative",
    padding: 2,
    borderRadius: 2,
    maxWidth: 800,
    margin: "auto",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 40px 60px 0 rgba(0,0,0,0.5)",
    },
    backgroundColor: "#dad7cd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
  };
  return (
    <Container>
      <Box sx={{ marginTop: 5 }}>
        <AppBar position="static" sx={appBarStyle}>
          <Stack
            direction="row"
            sx={{
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <NavLink
              to="/"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  textDecoration: isActive ? "none" : "none",
                };
              }}
            >
              HOME
            </NavLink>
            <NavLink
              to="/form"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  textDecoration: isActive ? "none" : "none",
                };
              }}
            >
              FORM
            </NavLink>
            <NavLink
              to="/profiles"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  textDecoration: isActive ? "none" : "none",
                };
              }}
            >
              DATA
            </NavLink>
          </Stack>
        </AppBar>
      </Box>
      <Box display="flex" justifyContent="end" gap={2}>
        <Link
          to="https://github.com/NaviBal11"
          target="_blank"
          className="icon-link transform hover:scale-110 transition-transform duration-300"
        >
          <FaGithub size={30} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/navdeep-kaur-webdeveloper/"
          target="_blank"
          className="icon-link transform hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin size={30} />
        </Link>
      </Box>
    </Container>
  );
}

export default Header;
