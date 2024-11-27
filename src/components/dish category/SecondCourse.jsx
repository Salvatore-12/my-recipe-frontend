import { useDispatch, useSelector } from "react-redux";
import { getSecondCourse } from "../../Redux/action";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SecondCourse = () => {
  const dispatch = useDispatch()
  const secondCourse = useSelector((state) => state.secondCourse)
   
  useEffect(() => {
    dispatch(getSecondCourse());
  },[dispatch]) 
  if (!secondCourse) return <p>Caricamento in corso...</p>;

   return ( <>
  <h1 className='ms-3 mt-3'>Secondi piatti:</h1>
    <div className="d-flex">
      {secondCourse.map((recipe) => (
        <div className="ms-3 mt-2 customCard" key={recipe.idRecipe}>
        
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
    </>
  );  
}

export default SecondCourse