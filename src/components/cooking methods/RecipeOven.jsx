import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getRecipeOven } from "../../Redux/action";
import { IoMdArrowBack } from "react-icons/io";
import { Col, Container, Row } from "react-bootstrap";

const RecipeOven = () => {
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipeOven); 
    const location = useLocation(); // verifico lo stato di navigazione
    const fromHomepage = location.state?.fromHomepage; // Controllo se si proviene dalla homepage

    useEffect(() => {
        dispatch(getRecipeOven());
    }, [dispatch]);
    console.log("Dati recipe:", recipe);

    if (!recipe) return <p>Caricamento in corso...</p>;

    return( 

      <Container className="mt-4">
            {/* Mostro il pulsante "Indietro" solo se si proviene dalla homepage */}
            {fromHomepage && (
                <Link 
                    to="/" 
                    onClick={(e) => { 
                        e.preventDefault(); 
                        window.history.back(); 
                    }} 
                    className="text-primary"
                >
                    <IoMdArrowBack size={28} className="mt-3 back-button" />
                </Link>
            )}

            <h1 className="text-center mb-4">Ricette al forno:</h1>
            
            <Row className="gy-4">
                {recipe.map((recipe) => (
                    <Col 
                      key={recipe.idRecipe} 
                      xs={12} sm={6} md={4} lg={3} 
                      className="d-flex justify-content-center"
                    >
                        <div className="customCard text-center">
                            <Link  
                                to={`/recipe/${recipe.idRecipe}`}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >    
                                <h3>{recipe.name || "Nome non disponibile"}</h3>
                                <img 
                                    src={recipe.imageUrl || "immagine-default.jpg"} 
                                    alt={recipe.name}  
                                    className="recipe-image img-fluid rounded"
                                    style={{ height: "150px", objectFit: "cover" }}
                                />
                            </Link>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
   
    
);
}
export default RecipeOven;