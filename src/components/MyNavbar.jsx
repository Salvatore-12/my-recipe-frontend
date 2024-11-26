import { useState } from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const MyNavbar =() => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleSearch = async () => {
        if (!searchTerm || searchTerm.trim().length < 3) {
            alert("Inserisci almeno 3 caratteri per la ricerca");
            return;
        }
    
        // Prepara i parametri di ricerca
        const params = new URLSearchParams();
        params.append("name", searchTerm);  // Nome della ricetta
    
        // URL dell'endpoint Java
        const url = `http://localhost:3001/Recipe/search?${params.toString()}`;
    
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (!response.ok) {
                throw new Error("Errore nella risposta del server");
            }
    
            const data = await response.json();
            if (data.length === 0) {
                alert("Nessuna ricetta trovata per la tua ricerca");
                return;
            }
    
            console.log("Dati ricevuti dalla chiamata API:", data);
            setSearchResults(data);
    
            // Passa sia searchResults che searchTerm allo stato durante la navigazione
            navigate("/risultati-perNome", { state: { searchResults: data, searchTerm: searchTerm } });
        } catch (error) {
            setError("Si è verificato un errore durante la ricerca: " + error.message);
        }
    };
      
   
    return (
      <Navbar bg="primary" data-bs-theme="dark">
      <Container fluid>
          <Navbar.Brand style={{color:"black"}} >Ricette Con Salvo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <NavDropdown title="Cottura">
                      <NavDropdown.Item as={Link} to="/al-forno">
                          al forno
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/Griglia">
                          alla griglia
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to="/Bollitura">
                          bollito
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/Fritto">
                          fritto
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/alla-brace">
                          alla brace
                      </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Portata">
                      <NavDropdown.Item as={Link} to="/DishCategory-Appetizer">
                          Antipasto
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/first-course">
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
                      <NavDropdown.Item href="/Alcoholic_Drinks">Alcoliche</NavDropdown.Item>
                      <NavDropdown.Item href="Non_Alcoholic_Drinks">Analcoliche</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/preferiti">Preferiti</Nav.Link>
              </Nav>
              <Form className="d-flex me-4">
                  <Form.Control
                      type="search"
                      placeholder="Cerca"
                      className="me-2"
                      aria-label="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button variant="outline-success" 
                          type="button"
                          onClick={handleSearch}>Cerca</Button>
              </Form>
          </Navbar.Collapse>
      </Container>
  </Navbar>
      );
}
export default MyNavbar