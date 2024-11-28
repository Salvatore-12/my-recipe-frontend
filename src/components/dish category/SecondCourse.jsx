import { useDispatch, useSelector } from "react-redux";
import { getSecondCourse } from "../../Redux/action";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SecondCourse = () => {
  const dispatch = useDispatch()
  const secondCourse = useSelector((state) => state.secondCourse)
   
  useEffect(() => {
    dispatch(getSecondCourse());
  },[dispatch]) 
  if (!secondCourse) return <p>Caricamento in corso...</p>;

   return ( <Container className="mt-4">
  <h1 className='text-center mb-4'>Secondi piatti:</h1>
    <Row className="gy-4">
      {secondCourse.map((recipe) => (
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
            <h3>{recipe.name || 'Nome non disponibile'}</h3>
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

export default SecondCourse