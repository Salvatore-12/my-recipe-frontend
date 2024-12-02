import { useDispatch, useSelector } from "react-redux";
import { getRecipeFrying } from "../../Redux/action";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const RecipeFrying= () => {
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipeFrying); 

    useEffect(() => {
        dispatch(getRecipeFrying());
    }, [dispatch]);
    console.log("Dati recipe:", recipe);

    if (!recipe) return <p>Caricamento in corso...</p>;
    return(
         <Container className="mt-4">
            <h1 className="text-center mb-4">Ricette Fritte:</h1>
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
export default RecipeFrying