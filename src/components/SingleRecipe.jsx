import { useEffect, useState } from "react";
import { Card,Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; 
import { IoMdArrowBack } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAddFavorite, setRemoveFavorite } from "../Redux/action";

const SingleRecipe = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { idRecipe } = useParams(); // Uso idRecipe per ottenere l'ID della ricetta dalla URL
    const [recipe, setRecipe] = useState(null); // Usa useState per gestire lo stato della ricetta

    const favorites = useSelector(state => state.favorites);

    const fromFavorites = location.state?.fromFavorites || false;

    useEffect(() => {
        if (idRecipe) {
            fetch(`http://localhost:3001/Recipe/${idRecipe}`) // Effettuo la chiamata API con l'ID della ricetta
                .then(response => response.json())
                .then(data => {
                    console.log("Dati ricevuti:", data);
                    setRecipe(data); // Aggiorno lo stato locale con i dati della ricetta
                })
                .catch(error => {
                    console.error("Errore durante il recupero dei dettagli della ricetta:", error);
                });
        }
    }, [idRecipe]);

    // Mostra un messaggio di caricamento mentre recipe è null o undefined
    if (!recipe) return <p>Caricamento in corso...</p>;

    const isFavorite = favorites.some(fav => fav.idRecipe === recipe.idRecipe);
   
    const handleFavoriteToggle = () => {
        if (isFavorite) {
            console.log("Rimuovo dai preferiti:", recipe.idRecipe);
            dispatch(setRemoveFavorite(recipe.idRecipe));
        } else {
            console.log("Aggiungo ai preferiti:", recipe);
            dispatch(setAddFavorite(recipe));
        }
    };

    return (
        <Container fluid className="mt-4 mb-5">
            <Link to="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} className="text-success">
                <IoMdArrowBack size={25} />
            </Link>
            <Card className="recipe-card mt-3" style={{ width: "90%" }}>
                <Row>
                    <Col sm={6} className="d-flex justify-content-center">
                        <Card.Img
                            src={recipe.imageUrl || "immagine-default.jpg"}
                            alt={recipe.name || "Nome non disponibile"}
                            className="recipe-image"
                            style={{ objectFit: "cover", height: "100%", width: "100%" }} // Copri interamente l'area
                        />
                    </Col>
                    <Col sm={6}>
                        <Card.Body>
                            <Card.Title>
                                <h1>{recipe.name || "Nome non disponibile"}</h1>
                            </Card.Title>
                            {!fromFavorites && ( // Mostra il pulsante solo se non è aperto dai preferiti
                                <button onClick={handleFavoriteToggle} className="btn btn-primary">
                                    {isFavorite ? "Rimuovi dai Preferiti" : "Aggiungi ai Preferiti"}
                                </button>
                            )}
                            <Card.Text>
                                {recipe.description || "Descrizione non disponibile"}
                            </Card.Text>

                            <h3>Ingredienti</h3>
                            <ul>
                                {(recipe.ingredients || []).map(ingredient => (
                                    <li key={ingredient.idIngredient}>
                                        {ingredient.name}: {ingredient.quantity} {ingredient.unit}
                                    </li>
                                ))}
                            </ul>

                            <h3>Procedimenti</h3>
                            <ol>
                                {(recipe.steps || []).map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>

                            <h3>Informazioni aggiuntive</h3>
                            <p>Tempo di preparazione: {recipe.preparationTime || "N/A"} minuti</p>
                            <p>Tempo di cottura: {recipe.cookingTime || "N/A"} minuti</p>
                            <p>Porzioni: {recipe.servings || "N/A"}</p>
                            <p>Metodo di cottura: {recipe.cookingMethod || "N/A"}</p>
                            <p>Temperatura del piatto: {recipe.dishTemperature || "N/A"}</p>
                            <p>Categoria del piatto: {recipe.dishCategory || "N/A"}</p>
                            <p>Stagione: {recipe.season || "N/A"}</p>
                            <p>Difficoltà: {recipe.difficulty || "N/A"}</p>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
);
    
}
export default SingleRecipe