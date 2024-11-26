import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getRecipeOven } from "../../Redux/action";
import { IoMdArrowBack } from "react-icons/io";

const RecipeOven = () => {
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipeOven); 
    const location = useLocation(); // verifico lo stato di navigazione
    const fromHomepage = location.state?.fromHomepage; // Controllo se si proviene dalla homepage

    useEffect(() => {
        dispatch(getRecipeOven());
    }, [dispatch]);
    console.log("Dati recipe:", recipe);

    if (!recipe) return <p>Caricamento in corso...</p>;

    return( <>

          {/* Mostro il pulsante "Indietro" solo se si proviene dalla homepage */}
          {fromHomepage && (
                <Link 
                    to="/" 
                    onClick={(e) => { 
                        e.preventDefault(); 
                        window.history.back(); 
                    }} 
                    className="text-primary ms-3"
                >
                    <IoMdArrowBack size={28} className="mt-3 back-button" />
                </Link>
            )}

        <h1 className="mb-2 ms-3">Ricette al forno:</h1>
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
export default RecipeOven;