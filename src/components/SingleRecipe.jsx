import { useEffect, useState } from "react";
import { Button, Card,Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; 
import { IoMdArrowBack } from "react-icons/io";
import { BsStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAddFavorite, setRemoveFavorite } from "../Redux/action";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


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

    const handleSavePDF = () => {
        // Nascondi l'icona della stella prima di generare il PDF
        const starIcon = document.getElementById('star-icon');
        if (starIcon) starIcon.style.display = 'none';

        const element = document.getElementById('recipe-content'); // Assicurati che questo ID esista
        if (!element) {
            console.error("Elemento non trovato!");
            return;
        }

// Sanitizza il nome della ricetta per usarlo come nome file
const recipeName = recipe.name || 'ricetta-senza-nome'; // Usa un nome di default se recipe.name è null o undefined
const pdfFilename = recipeName
    .toLowerCase() // Converti in minuscolo
    .replace(/[^a-z0-9\s-]/g, '') // Rimuovi caratteri speciali eccetto spazi e trattini
    .replace(/\s+/g, '-') // Sostituisci gli spazi con trattini
    .slice(0, 50);

        // Aspetta che tutte le immagini siano caricate prima di fare il rendering con html2canvas
        html2canvas(element, { useCORS: true,  scale: 3, 
                               scrollX: -window.scrollX,
                               scrollY: -window.scrollY,
                               windowWidth: document.documentElement.scrollWidth,
                               windowHeight: element.scrollHeight }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: [canvas.width * 0.2645, canvas.height * 0.2645]
            });


            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width * 0.2645, canvas.height * 0.2645);
            pdf.save(pdfFilename); // Salva il PDF

            // Mostra di nuovo l'icona della stella dopo aver generato il PDF
            if (starIcon) starIcon.style.display = 'inline';
        }).catch(error => {
            console.error("Errore durante la generazione del PDF:", error);
        });
    };

    return ( <>
        <Container fluid className="pt-4 mb-5 customContainer ">
            <Link to="#" onClick={(e) => { e.preventDefault(); window.history.back(); }} className="text-primary">
                <IoMdArrowBack size={28} className="back-button ms-2" />
            </Link>
            <Card className="recipe-card mt-3" style={{ width: "90%" }} id="recipe-content">
                <Row>
                    <Col sm={6} className="d-flex justify-content-center" >
                        <Card.Img
                            src={recipe.imageUrl || "immagine-default.jpg"}
                            alt={recipe.name || "Nome non disponibile"}
                            className="recipe-image"
                            style={{ objectFit: "cover", height: "100%", width: "100%" }} // Copri interamente l'area
                        />
                    </Col>
                    <Col sm={6}>
                        <Card.Body>
                            <Card.Title className="d-flex align-items-center">
                            <h1 className="mb-0 mr-4">{recipe.name || "Nome non disponibile"}</h1>
                                {!fromFavorites && (
                                  <BsStarFill
                                        id="star-icon"
                                        size={30} 
                                        color="black" // bordo nero
                                        onClick={handleFavoriteToggle}
                                        style={{
                                            cursor: "pointer",
                                            fill: isFavorite ? "gold" : "black", // riempimento giallo se è nei preferiti
                                            marginTop: "10px",
                                            marginLeft: "3px"
                                        }} 
                                    />
                                )}
                            </Card.Title>
                            
                            <Card.Text>
                                {recipe.description || "Descrizione non disponibile"}
                            </Card.Text>

                            <h3>Ingredienti</h3>
                            <ul  className="list-unstyled">
                                {(recipe.ingredients || []).map(ingredient => (
                                    <li key={ingredient.idIngredient} className="d-flex align-items-center">
                                        <span className="mr-2">•</span>
                                        <span>{ingredient.name}: {ingredient.quantity} {ingredient.unit}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3>Procedimenti</h3>
                            <ol className="pl-4">
                                {(recipe.steps || []).map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>

                            <h3>Informazioni aggiuntive</h3>
                            <div className="row">
                                <div className="col-6">
                                    <p>Tempo di preparazione: {recipe.preparationTime || "N/A"} minuti</p>
                                    <p>Tempo di cottura: {recipe.cookingTime || "N/A"} minuti</p>
                                    <p>Porzioni: {recipe.servings || "N/A"}</p>
                                </div>
                                <div className="col-6">
                                     <p>Metodo di cottura: {recipe.cookingMethod || "N/A"}</p>
                                     <p>Temperatura del piatto: {recipe.dishTemperature || "N/A"}</p>
                                     <p>Categoria del piatto: {recipe.dishCategory || "N/A"}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <p><strong>Stagione:</strong> {recipe.season || "N/A"}</p>
                                </div>
                                <div className="col-6">
                                    <p><strong>Difficoltà:</strong> {recipe.difficulty || "N/A"}</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            <div className="myContainerButton">
                    <Button 
                        onClick={handleSavePDF} 
                        style={{ width: "8%" }}
                        className="myButton"
                    >
                        Salva ricetta
                    </Button>
                </div>
        </Container>

        </>
);
    
}
export default SingleRecipe