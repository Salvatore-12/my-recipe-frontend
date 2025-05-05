import { useEffect, useRef, useState } from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const MyNavbar =() => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const formRef = useRef();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (!searchTerm || searchTerm.trim().length < 3) {
            alert("Inserisci qualcosa da cercare");
            return;
        }
    
        // Prepara i parametri di ricerca
        const params = new URLSearchParams();
        params.append("name", searchTerm);
    
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
    
            const text = await response.text();

            const data = text ? JSON.parse(text) : [];

            if (data.length === 0) {
                alert("Nessuna ricetta trovata per la tua ricerca");
                return;
            }
    
            console.log("Dati ricevuti dalla chiamata API:", data);
           
    
            // Passa sia searchResults che searchTerm allo stato durante la navigazione
            navigate("/risultati-perNome", { state: { searchResults: data, searchTerm: searchTerm } });
        } catch (error) {
            setError("Si è verificato un errore durante la ricerca: " + error.message);
        }
    };

    const fetchSuggestions = async (query) => {
        if (!query || query.trim().length < 2) {
            setSuggestions([]);
            setShowDropdown(false);
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:3001/Recipe/search?name=${query}`
            );
            const text = await response.text();
            const data = text ? JSON.parse(text) : [];

            setSuggestions(data.slice(0, 5)); // massimo 5 suggerimenti
            setShowDropdown(true);
        } catch (error) {
            console.error("Errore durante il fetch dei suggerimenti:", error);
            setSuggestions([]);
        }
    };

    useEffect(() => {
        fetchSuggestions(searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);


      
   
    return (
      <Navbar   expand="md" className="px-3 py-2 navbarCustom">
      <Container fluid>
          <Navbar.Brand >Ricette Con Salvo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', }} navbarScroll>
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <NavDropdown title="Cottura">
                      <NavDropdown.Item as={Link} to="/al-forno">
                          al forno
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/Griglia">
                          alla griglia
                      </NavDropdown.Item>
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
                      <NavDropdown.Item as={Link} to="/appetizier">
                          Antipasto
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/first-course">
                          Primo
                      </NavDropdown.Item>
                      <NavDropdown.Item href="second-course">
                          Secondo
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/dessert">
                          Dessert
                      </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Bevande" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="/Alcoholic_Drinks">Alcoliche</NavDropdown.Item>
                      <NavDropdown.Item href="Non_Alcoholic_Drinks">Analcoliche</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Stagione">
                      <NavDropdown.Item as={Link} to="/RecipeSummer">
                          Estiva
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/Recipe-Winter">
                          Invernale
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/RecipeAllSeasons">
                           Tutte le stagioni
                      </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Difficoltà">
                      <NavDropdown.Item as={Link} to="/RecipeEasy">
                          Facile
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/RecipeMedium">
                          Media
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/RecipeHard">
                          Difficile
                      </NavDropdown.Item>
                  </NavDropdown>
                  

                  <Nav.Link as={Link} to="/preferiti">Preferiti</Nav.Link>
              </Nav>

              <Form ref={formRef} className="d-flex flex-column flex-md-row align-items-md-center position-relative ">
                  <Form.Control
                      type="search"
                      placeholder="Cerca"
                      className=" ms-auto mb-4 mb-md-0  me-md-3  w-75 FormSearch"
                      aria-label="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onFocus={() => {
                        if (suggestions.length > 0) setShowDropdown(true);
                    }}
                  />
                  <Button
                          type="button"
                          onClick={handleSearch}
                          className="customButton"
                  >
                    Cerca
                  </Button>
                  {showDropdown && suggestions.length > 0 && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    right: 0,
                                    backgroundColor: "white",
                                    border: "1px solid #ccc",
                                    zIndex: 1000,
                                    maxHeight: "250px",
                                    overflowY: "auto",
                                }}
                            >
                                {suggestions.map((item) => (
                                    <div
                                        key={item.idRecipe}
                                        style={{
                                            padding: "8px",
                                            display: "flex",
                                            alignItems: "center",
                                            borderBottom: "1px solid #eee",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            setSearchTerm(item.name);
                                            navigate(`/recipe/${item.idRecipe}`);
                                            setShowDropdown(false);
                                        }}
                                    >
                                        <img
                                            src={item.imageUrl || "immagine-default.jpg"}
                                            alt={item.name}
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                objectFit: "cover",
                                                borderRadius: "5px",
                                                marginRight: "10px",
                                            }}
                                        />
                                        <span>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
              </Form>
          </Navbar.Collapse>
      </Container>

            {/* Visualizza il messaggio di errore se presente */}
            {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}

           

  </Navbar>
      );
}
export default MyNavbar