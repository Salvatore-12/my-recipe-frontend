import { ActionTypes } from "./action";

const initialstate = {
    recipeOven : null
};
console.log(initialstate);
const reducer = (state = initialstate, action) => {
    switch (action.type) {

    case ActionTypes.SET_RECIPE_OVEN:
      return {
         ...state,
         recipeOven : action.payload,
      };
      default: return state;
    }
}
export default reducer