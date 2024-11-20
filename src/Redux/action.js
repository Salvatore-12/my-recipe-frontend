export const ActionTypes = {
    //1)Sezione di tutte le ricette con i vari metodi di cottura
    SET_RECIPE_OVEN : "SET_RECIPE_OVEN ",
    SET_RECIPE_BOILING : "SET_RECIPE_BOILING",
    //2)Sezione di tutte le ricette tramite la portata
    SET_FIRST_COURSE: "SET_FIRST_COURSE",
    //3)Sezione per mettere una ricetta ai preferiti
    SET_ADD_FAVORITE : "SET_ADD_FAVORITE",
    SET_REMOVE_FAVORITE : "SET_REMOVE_FAVORITE",
     //4)SETTAGIO GENERALE 
    SET_ERROR: "SET_ERROR"
};

export const setRemoveFavorite = (idRecipe) => ({
    type: ActionTypes.SET_REMOVE_FAVORITE,
    payload : idRecipe
});

export const setAddFavorite = (recipe) => ({
    type: ActionTypes.SET_ADD_FAVORITE,
    payload : recipe
});


export const setFirstCourse = (FirstCourse) => ({
    type: ActionTypes.SET_FIRST_COURSE,
    payload : FirstCourse
})
export const getFirstCourse = ()=> async(dispatch) =>{
    const URLFirstCourse = "http://localhost:3001/Recipe/DishCategory-First_Course";
    try {
     const response = await fetch(URLFirstCourse, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setFirstCourse(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati dei FirstCourse");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
 }    
}

export const setRecipeBoiling = (RecipeBoiling) => ({
    type : ActionTypes.SET_RECIPE_BOILING,
    payload : RecipeBoiling
})

export const getRecipeBoiling = ()=> async(dispatch) => {
    const URLRecipeBoiling = "http://localhost:3001/Recipe/CookingMethod-Boiling";
    try {
     const response = await fetch(URLRecipeBoiling, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setRecipeBoiling(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati" });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati dei RecipeBoiling");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei RecipeBoiling" });
 }
}

export const setRecipeOven = (RecipeOven) => ({
    type : ActionTypes.SET_RECIPE_OVEN,
    payload : RecipeOven
})

export const getRecipeOven = ()=> async(dispatch) => {
   const URLRecipeOVEN = "http://localhost:3001/Recipe/CookingMethod-Oven";
   try {
    const response = await fetch(URLRecipeOVEN, {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    });
    if (response.ok) {
        const data = await response.json();
        console.log("Dati ricevuti:", data);
        dispatch(setRecipeOven(data));
        console.log("Dati ricevuti:", data);
        return data;
    } else {
        const errorMessage = await response.text();
        if (response.status === 401) {
            // Invia un'azione di errore al reducer
            dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
        } else {
            // Invia un'azione di errore al reducer
            dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati" });
        }
        throw new Error(errorMessage || "Errore durante la richiesta dei dati dei RecipeOven");
    }
} catch (error) {
    console.error("Errore:", error);
    // Invia un'azione di errore al reducer
    dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati RecipeOven" });
}
}

