import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setRemoveFavorite } from "../Redux/action";
import { MdDelete } from "react-icons/md";


const Favorites = () => {
    const dispatch = useDispatch();
    // Ottengo la lista dei preferiti dallo store Redux
    const favorites = useSelector((state) => state.favorites);

    const handleRemoveFavorite = (idRecipe) => {
        dispatch(setRemoveFavorite(idRecipe));
    };

    if (favorites.length === 0) {
        return <p>Nessuna ricetta aggiunta ai preferiti.</p>;
    }

    return (
        <Container fluid className="mt-4 ">
            <h2 className="mb-4">Ricette Preferite</h2>
            <Row>
                {favorites.map((recipe) => (
                    <Col md={4} key={recipe.idRecipe} className="mb-4">
                        <Card className="CardPrefer">
                        <Link to={`/recipe/${recipe.idRecipe}`} state={{ fromFavorites: true }}>
                            <Card.Img
                                variant="top"
                                src={recipe.imageUrl || "immagine-default.jpg"}
                                alt={recipe.name || "Nome non disponibile"}
                                style={{ objectFit: "cover", height: "200px" }}
                            />
                        </Link>
                            <Card.Body>
                                <Card.Title>{recipe.name || "Nome non disponibile"}</Card.Title>
                                <Card.Text>
                                    {recipe.description || "Descrizione non disponibile"}
                                </Card.Text>
            
                                <Button
                                    onClick={() => handleRemoveFavorite(recipe.idRecipe)}
                                    className="ml-2 IconRemoveFavorities"
                                >
                                    <MdDelete className="IconRemoveFavorities" />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Favorites;
