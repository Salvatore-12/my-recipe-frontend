import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAlcoholicDrink, getRecipeOven } from "../Redux/action";

const Homepage = () => {
    const dispatch = useDispatch();

  // Recupero i dati dallo stato globale
  const recipesOven = useSelector((state) => state.recipeOven);
  const recipesDrinks = useSelector((state) => state.alcoholicDrink);

  // Effettuo le chiamate API al caricamento del componente
  useEffect(() => {
    dispatch(getRecipeOven());
    dispatch(getAlcoholicDrink());
  }, [dispatch]);
    return(
        <>
        <Link to="/al-forno" style={{ textDecoration: "none", color: "inherit" }}>
         <h3 className="titleHomepage">Ricette al forno:</h3>
       </Link>
      <div className="d-flex justify-content-evenly">
        {!recipesOven? (
          <p>Caricamento delle ricette al forno...</p>
        ) : recipesOven.length === 0 ? (
          <p>Non ci sono ricette disponibili al momento.</p>
        ) : (
          <Carousel className="CarouseCustom" interval={1500}>
            {recipesOven.slice(0, 3).map((recipe, index) => (
              <Carousel.Item key={index}>
                <img
                  src={recipe.imageUrl || "immagine-default.jpg"}
                  alt={recipe.name || "Immagine della ricetta"}
                  className="d-block w-100 ImgCarouseCustom"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>{recipe.name || "Nome non disponibile"}</h3>
                  <p>{recipe.description || "Descrizione non disponibile"}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>

      <Link
        to="/Alcoholic_Drinks"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h3 className="titleHomepage">Ricette bevande alcoliche:</h3>
      </Link>
      <div className="d-flex justify-content-evenly">
        {!recipesDrinks ? (
          <p>Caricamento delle bevande alcoliche...</p>
        ) : recipesDrinks.length === 0 ? (
          <p>Non ci sono bevande disponibili al momento.</p>
        ) : (
          <Carousel className="CarouseCustom" interval={1500}>
            {recipesDrinks.map((recipe, index) => (
              <Carousel.Item key={index}>
                <img
                  src={recipe.imageUrl || "immagine-default.jpg"}
                  alt={recipe.name || "Immagine della ricetta"}
                  className="d-block w-100 ImgCarouseCustom"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>{recipe.name || "Nome non disponibile"}</h3>
                  <p>{recipe.description || "Descrizione non disponibile"}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
        </>
    );
}
export default Homepage