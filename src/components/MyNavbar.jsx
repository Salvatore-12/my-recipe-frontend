import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

const MyNavbar =() => {
    return (
        <Navbar  bg="primary" data-bs-theme="light">
          <Container fluid>
            <Navbar.Brand href="#">Ricette Con Salvo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" >
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <NavDropdown title="Cottura">
                  <NavDropdown.Item href="/" >
                   al forno 
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                   alla griglia
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    bolliti
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    fritto
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    alla brace
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Portata">
                  <NavDropdown.Item href="#action3" >
                  Antipasto 
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                  Primo
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                  Secondo
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                  Dessert
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Bevande" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Alcolici 
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  Analcolici 
                </NavDropdown.Item>
                
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Cerca</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default MyNavbar