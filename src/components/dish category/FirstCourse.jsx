import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFirstCourse } from '../../Redux/action';
import { Link } from 'react-router-dom';


const FirstCourse = () => {
  const dispatch = useDispatch();
  const firstCourse = useSelector((state) => state.firstCourse);

  useEffect(() => {
    dispatch(getFirstCourse());
  }, [dispatch]);

  if (!firstCourse) return <p>Caricamento in corso...</p>;

  return (
    <div className="d-flex">
      {firstCourse.map((recipe) => (
        <div className="ms-3 customCard" key={recipe.idRecipe}>
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
              className="recipe-image" 
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FirstCourse;
