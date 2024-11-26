import { Link } from "react-router-dom";
import { getRecipeEmbers } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const RecipeEmbers = () => {
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipeEmbers); 

    useEffect(() => {
        dispatch(getRecipeEmbers());
    }, [dispatch]);
    console.log("Dati recipe:", recipe);

    if (!recipe) return <p>Caricamento in corso...</p>;
    return( <>
        <h1 className="mb-2 ms-3">Ricette alla brace:</h1>
    <div className="d-flex customContainer">
        {recipe.map((recipe) => (
            <div className="ms-3 customCard"  key={recipe.idRecipe}>
                <Link  style={{
                                textDecoration: 'none',
                               color: 'inherit', 
                                }}
                 className="text-dark" to={`/recipe/${recipe.idRecipe}`}>
                    
                <h3>{recipe.name || 'Nome non disponibile'}</h3>
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
export default RecipeEmbers;