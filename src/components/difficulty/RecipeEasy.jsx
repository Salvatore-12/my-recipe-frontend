import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFirstCourse, getRecipeEasy } from '../../Redux/action';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';


const RecipeEasy = () => {
  const dispatch = useDispatch();
  const  recipeEasy = useSelector((state) => state.recipeEasy);

  useEffect(() => {
    dispatch(getRecipeEasy());
  }, [dispatch]);

  if (! recipeEasy) return <p>Caricamento in corso...</p>;

  return ( 
    
  <Container className="mt-4">
      <h1 className="text-center mb-4">Ricette con difficoltà facile:</h1>
      <Row className="gy-4">
        { recipeEasy.map((recipe) => (
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
                  style={{ height: '150px', objectFit: 'cover' }}
                />
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    
  );
};

export default RecipeEasy;
