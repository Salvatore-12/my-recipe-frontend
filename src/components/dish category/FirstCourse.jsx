import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFirstCourse } from '../../Redux/action';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';


const FirstCourse = () => {
  const dispatch = useDispatch();
  const firstCourse = useSelector((state) => state.firstCourse);

  useEffect(() => {
    dispatch(getFirstCourse());
  }, [dispatch]);

  if (!firstCourse) return <p>Caricamento in corso...</p>;

  return ( 
    
  <Container className="mt-4">
      <h1 className="text-center mb-4">Primi piatti:</h1>
      <Row className="gy-4">
        {firstCourse.map((recipe) => (
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
                <h3 className="mb-3">{recipe.name || 'Nome non disponibile'}</h3>
                <img
                  src={recipe.imageUrl || 'immagine-default.jpg'}
                  alt={recipe.name}
                  className="recipe-image img-fluid rounded"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    
  );
};

export default FirstCourse;
