import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeOven } from "../Redux/action";

const RecipeOven = () => {
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipeOven); // Accede ai dati dallo stato Redux

    // Effettua la chiamata API quando il componente si monta
    useEffect(() => {
        dispatch(getRecipeOven());
    }, [dispatch]);
    console.log("Dati recipe:", recipe);

    // Mostra un messaggio di caricamento mentre `recipe` è `null` o `undefined`
    if (!recipe) return <p>Caricamento in corso...</p>;
    return(  <div className="recipe-container">
        {recipe.map((recipe) => (
            <div key={recipe.idRecipe} className="recipe-card">
                <h1>{recipe.name || 'Nome non disponibile'}</h1>
                <img 
                    src={recipe.imageUrl || 'immagine-default.jpg'} 
                    alt={recipe.name} 
                    className="recipe-image" 
                    width="300" 
                />
                <p>{recipe.description || 'Descrizione non disponibile'}</p>

                <h3>Ingredienti</h3>
                <ul>
                    {(recipe.ingredients || []).map(ingredient => (
                        <li key={ingredient.idIngredient}>
                            {ingredient.name}: {ingredient.quantity} {ingredient.unit}
                        </li>
                    ))}
                </ul>

                <h3>Procedimenti</h3>
                <ol>
                    {(recipe.steps || []).map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>

                <h3>Informazioni aggiuntive</h3>
                <p>Tempo di preparazione: {recipe.preparationTime || 'N/A'} minuti</p>
                <p>Tempo di cottura: {recipe.cookingTime || 'N/A'} minuti</p>
                <p>Porzioni: {recipe.servings || 'N/A'}</p>
                <p>Metodo di cottura: {recipe.cookingMethod || 'N/A'}</p>
                <p>Temperatura del piatto: {recipe.dishTemperature || 'N/A'}</p>
                <p>Categoria del piatto: {recipe.dishCategory || 'N/A'}</p>
                <p>Stagione: {recipe.season || 'N/A'}</p>
                <p>Difficoltà: {recipe.difficulty || 'N/A'}</p>
            </div>
        ))}
    </div>
);
}
export default RecipeOven;