import { ActionTypes } from "./action";

const loadFavoritesFromStorage = () => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
  return storedFavorites ? storedFavorites : []; // Restituisce un array vuoto se non ci sono preferiti
};
const initialstate = {
    recipeOven : null,
    recipeBoiling : null,
    recipeGrill : null,
    recipeFrying : null,
    recipeEmbers : null,
    appetizier : null,
    firstCourse : null,
    secondCourse : null,
    dessert : null,
    recipeEasy : null,
    recipeMedium : null,
    recipeHard : null,
    alcoholicDrink : null,
    non_alcoholicDrink : null,
    recipeSummer: null,
    recipeWinter: null,
    recipeAllSeasons: null,
    favorites: loadFavoritesFromStorage()
};
console.log(initialstate);

const reducer = (state = initialstate, action) => {
    switch (action.type) {

     case ActionTypes.SET_RECIPE_OVEN:
       return {
         ...state,
          recipeOven : action.payload
       };

      case ActionTypes.SET_RECIPE_BOILING:
        return {
           ...state,
           recipeBoiling : action.payload
        };

      case ActionTypes.SET_RECIPE_GRILL:
        return{
          ...state,
          recipeGrill : action.payload
        }  

        case ActionTypes.SET_RECIPE_FRYING:
          return{
            ...state,
            recipeFrying : action.payload
          }  

        case ActionTypes.SET_RECIPE_EMBERS:
          return{
            ...state,
            recipeEmbers : action.payload
          }
          
        case ActionTypes.SET_APPETIZER:
          return{
            ...state,
            appetizier : action.payload
          }  

        case ActionTypes.SET_FIRST_COURSE:
          return {
            ...state,
            firstCourse : action.payload
          };

        case ActionTypes.SET_SECOND_COURSE:
          return{
            ...state,
            secondCourse : action.payload
          }
        
          case ActionTypes.SET_DESSERT:
            return{
              ...state,
              dessert : action.payload
            }
           
          case ActionTypes.SET_RECIPE_EASY:
            return{
              ...state,
              recipeEasy : action.payload
            }
          
          case ActionTypes.SET_RECIPE_MEDIUM:
            return {
              ...state,
              recipeMedium : action.payload
            }
          
          case ActionTypes.SET_RECIPE_HARD:
            return{
              ...state,
              recipeHard : action.payload
            }  

        case ActionTypes.SET_NON_ALCOHOLIC_DRINK:
          return {
            ...state,
            non_alcoholicDrink : action.payload
          }  

        case ActionTypes.SET_ALCOHOLIC_DRINK:
          return {
            ...state,
            alcoholicDrink : action.payload
          } 
        
         case ActionTypes.SET_RECIPESUMMER:
          return{
            ...state,
            recipeSummer : action.payload
          }
          
          case ActionTypes.SET_RECIPEWINTER:
          return{
            ...state,
            recipeWinter : action.payload
          } 

          case ActionTypes.SET_ALLSEASONSRECIPE:
            return{
              ...state,
              recipeAllSeasons : action.payload
            } 

        case ActionTypes.SET_ADD_FAVORITE:
          if (state.favorites.some(fav => fav.idRecipe === action.payload.idRecipe)) {
            return state;
        }
        
        const updatedFavoritesAdd = [...state.favorites, action.payload];
        localStorage.setItem('favorites', JSON.stringify(updatedFavoritesAdd));
          return {
            ...state,
            favorites :updatedFavoritesAdd
          }  

        case ActionTypes.SET_REMOVE_FAVORITE:
          const updatedFavoritesRemove = state.favorites.filter(recipe => recipe.idRecipe !== action.payload);
          localStorage.setItem('favorites', JSON.stringify(updatedFavoritesRemove));
          return {
            ...state,
            favorites: updatedFavoritesRemove
          };

      default: return state;
    }
}
export default reducer