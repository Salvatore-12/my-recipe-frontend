import { useDispatch, useSelector } from "react-redux";
import { getRecipeBoiling } from "../Redux/action";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const RecipeBoiling= () => {
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipeBoiling); 

    useEffect(() => {
        dispatch(getRecipeBoiling());
    }, [dispatch]);
    console.log("Dati recipe:", recipe);

    if (!recipe) return <p>Caricamento in corso...</p>;
    return(  
        <div className="d-flex">
        {recipe.map((recipe) => (
            <div className="ms-3 customCard"  key={recipe.idRecipe}>
                <Link  style={{
                                textDecoration: 'none',
                               color: 'inherit', 
                                }}
                 className="text-dark" 
                 to={`/recipe/${recipe.idRecipe}`}>
                <h1>{recipe.name || 'Nome non disponibile'}</h1>
                <img 
                    src={recipe.imageUrl || 'immagine-default.jpg'} 
                    alt={recipe.name}  
                    className="recipe-image" 
                />
                <p className="MyDesciption">{recipe.description}</p>
            
                </Link>
            </div>
            
            
        ))}
        
    </div>
    
);
}
export default RecipeBoiling