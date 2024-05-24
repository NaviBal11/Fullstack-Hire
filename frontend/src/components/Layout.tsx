import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "@mui/material/Container";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
