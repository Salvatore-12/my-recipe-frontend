import { ActionTypes } from "./action";

const initialstate = {
    recipeOven : null,
    recipeBoiling : null,
    firstCourse : null,
    favorites: []
};
console.log(initialstate);

const reducer = (state = initialstate, action) => {
    switch (action.type) {

    case ActionTypes.SET_RECIPE_OVEN:
      return {
         ...state,
         recipeOven : action.payload,
      };

      case ActionTypes.SET_RECIPE_BOILING:
        return {
           ...state,
           recipeBoiling : action.payload,
        };
        case ActionTypes.SET_FIRST_COURSE:
          return {
            ...state,
            firstCourse : action.payload,
          };

        case ActionTypes.SET_ADD_FAVORITE:
          if (state.favorites.some(fav => fav.idRecipe === action.payload.idRecipe)) {
            return state;
        }
          return {
            ...state,
            favorites :[...state.favorites, action.payload]
          }  

        case ActionTypes.SET_REMOVE_FAVORITE:
          return {
            ...state,
            favorites: state.favorites.filter(recipe => recipe.idRecipe !== action.payload)
          };

      default: return state;
    }
}
export default reducer