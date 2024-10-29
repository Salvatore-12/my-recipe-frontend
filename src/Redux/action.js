export const ActionTypes = {
    //1)Sezione di tutte le ricette con i vari metodi di cottura
    SET_RECIPE_OVEN : "SET_RECIPE_OVEN ",
     //4)SETTAGIO GENERALE 
    SET_ERROR: "SET_ERROR"
};

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
            dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati dei mangimi" });
        }
        throw new Error(errorMessage || "Errore durante la richiesta dei dati dei tiragraffi");
    }
} catch (error) {
    console.error("Errore:", error);
    // Invia un'azione di errore al reducer
    dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei tiragraffi" });
}
}

