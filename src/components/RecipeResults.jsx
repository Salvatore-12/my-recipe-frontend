import { Link, useLocation } from "react-router-dom";

const RecipeResults = () => {
    const location = useLocation();
    const { searchResults } = location.state || { searchResults: [] ,  searchTerm: ""};
    const { searchTerm } = location.state || { searchTerm: "" };
  
    return (
        <div className="customContainer">
        <h2>Risultati della ricerca per "{searchTerm}"</h2>
        {searchResults.length === 0 ? (
            <p>Nessuna ricetta trovata per la tua ricerca.</p>
        ) : (
            <div className="d-flex">
                {searchResults.map((recipe) => (
                    <div className="ms-3 customCard" key={recipe.idRecipe}>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}
                            className="text-dark"
                            to={`/recipe/${recipe.idRecipe}`}
                        >
                            <h4>{recipe.name || "Nome non disponibile"}</h4>
                            <img
                                src={recipe.imageUrl || "immagine-default.jpg"}
                                alt={recipe.name}
                                className="recipe-image"
                            />
                            <p>{recipe.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        )}
    </div>
);
  };
  
  export default RecipeResults;