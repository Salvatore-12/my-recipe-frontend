import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeOven } from "../Redux/action";
import { Link } from "react-router-dom";

const RecipeOven = () => {
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipeOven); 

    useEffect(() => {
        dispatch(getRecipeOven());
    }, [dispatch]);
    console.log("Dati recipe:", recipe);

    if (!recipe) return <p>Caricamento in corso...</p>;
    return(  <div>
        {recipe.map((recipe) => (
            <div className="ms-3"  key={recipe.idRecipe}>
                <Link  style={{
                                textDecoration: 'none',
                               color: 'inherit', 
                                }}
                 className="text-dark" to={`/recipe/${recipe.idRecipe}`}>
                <h1>{recipe.name || 'Nome non disponibile'}</h1>
                <img 
                    src={recipe.imageUrl || 'immagine-default.jpg'} 
                    alt={recipe.name}  
                    width="300" 
                />
            
                </Link>
            </div>
            
            
        ))}
        
    </div>
    
);
}
export default RecipeOven;