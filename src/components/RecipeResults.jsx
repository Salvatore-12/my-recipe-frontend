import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const RecipeResults = () => {
    const location = useLocation();
    const { searchResults } = location.state || { searchResults: [] ,  searchTerm: ""};
    const { searchTerm } = location.state || { searchTerm: "" };
  
    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">
                Risultati della ricerca per "{searchTerm}"
            </h2>
            {searchResults.length === 0 ? (
                <p className="text-center">Nessuna ricetta trovata per la tua ricerca.</p>
            ) : (
                <Row className="gy-4">
                    {searchResults.map((recipe) => (
                        <Col 
                            key={recipe.idRecipe} 
                            xs={12} sm={6} md={4} lg={3} 
                            className="d-flex justify-content-center"
                        >
                            <div className="customCard text-center p-3 border rounded">
                                <Link
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                    to={`/recipe/${recipe.idRecipe}`}
                                >
                                    <h4 className="mb-3">
                                        {recipe.name || "Nome non disponibile"}
                                    </h4>
                                    <img
                                        src={recipe.imageUrl || "immagine-default.jpg"}
                                        alt={recipe.name}
                                        className="recipe-image img-fluid rounded mb-3"
                                    />
                                    <p className="text-muted">
                                        {recipe.description || "Nessuna descrizione disponibile"}
                                    </p>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
);
  };
  
  export default RecipeResults;