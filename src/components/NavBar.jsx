import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          Cucina of monde
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#bebidas">SOBRE NOSOTROS</Nav.Link>
          <Nav.Link href="#alimentos">SERVICIOS</Nav.Link>
          <Nav.Link href="#contactos">OPINIONES</Nav.Link>
          <Nav.Link href="#nosotros">CONTACTANOS</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;