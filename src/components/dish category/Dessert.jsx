import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDessert } from "../../Redux/action";

const Dessert = () => {
    const dispatch = useDispatch()
    const dessert = useSelector((state) => state.dessert)
     
    useEffect(() => {
      dispatch(getDessert());
    },[dispatch]) 
    if (!dessert) return <p>Caricamento in corso...</p>;
  
     return ( <>
    <h1 className='ms-3 mt-3'>Secondi piatti:</h1>
      <div className="d-flex">
        {dessert.map((recipe) => (
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
  
  export default Dessert