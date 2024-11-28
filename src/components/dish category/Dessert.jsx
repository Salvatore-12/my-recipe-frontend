import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDessert } from "../../Redux/action";
import { Col, Container, Row } from "react-bootstrap";

const Dessert = () => {
    const dispatch = useDispatch()
    const dessert = useSelector((state) => state.dessert)
     
    useEffect(() => {
      dispatch(getDessert());
    },[dispatch]) 
    if (!dessert) return <p>Caricamento in corso...</p>;
  
     return ( <Container className="mt-4">
    <h1 className='text-center mb-4'>Dessert:</h1>
      <Row className="gy-4">
        {dessert.map((recipe) => (
          <Col  
            key={recipe.idRecipe}
            xs={12} sm={6} md={4} lg={3} 
            className="d-flex justify-content-center"
          >
          <div className="customCard text-center">
             <Link
               to={`/recipe/${recipe.idRecipe}`}
               style={{
                 textDecoration: 'none',
                 color: 'inherit',
               }}
             >
              <h1>{recipe.name || 'Nome non disponibile'}</h1>
              <img
                src={recipe.imageUrl || 'immagine-default.jpg'}
                alt={recipe.name}
                className="recipe-image img-fluid rounded"
                style={{ height: '150px', objectFit: 'cover' }} 
              />
            </Link>
          </div>
          </Col>
        ))}
      </Row>
      </Container>
    );  
  }
  
  export default Dessert