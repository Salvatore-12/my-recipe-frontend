export const ActionTypes = {
    //1)Sezione di tutte le ricette con i vari metodi di cottura
    SET_RECIPE_OVEN : "SET_RECIPE_OVEN ",
    SET_RECIPE_BOILING : "SET_RECIPE_BOILING",
    SET_RECIPE_GRILL : "SET_RECIPE_GRILL",
    SET_RECIPE_FRYING : "SET-RECIPE_FRYING",
    SET_RECIPE_EMBERS : "SET_RECIPE_EMBERS",
    //2)Sezione di tutte le ricette tramite la portata
    SET_APPETIZER : "SET_APPETIZER",
    SET_FIRST_COURSE: "SET_FIRST_COURSE",
    SET_SECOND_COURSE: "SET_SECOND_COURSE",
    SET_DESSERT: "SET_DESSERT",
    //3)Sezione di tutte le ricette per le bevande
    SET_ALCOHOLIC_DRINK: " SET_ALCOHOLIC_DRINK",
    SET_NON_ALCOHOLIC_DRINK: " SET_NON_ALCOHOLIC_DRINK",
    //4)Sezione di tutte le ricette in base la difficolta
    SET_RECIPE_EASY: "SET_RECIPE_EASY",
    SET_RECIPE_MEDIUM:"SET_RECIPE_MEDIUM",
    SET_RECIPE_HARD:"SET_RECIPE_HARD",
    //5)Sezione di tutte le ricette per stagioni
    SET_RECIPESUMMER: "SET_RECIPESUMMER",
    //6)Sezione per mettere una ricetta ai preferiti
    SET_ADD_FAVORITE : "SET_ADD_FAVORITE",
    SET_REMOVE_FAVORITE : "SET_REMOVE_FAVORITE",
     //7)SETTAGIO GENERALE 
    SET_ERROR: "SET_ERROR"
};

export const setRecipeSummer = (RecipeSummer)=> ({
    type: ActionTypes.SET_RECIPESUMMER,
    payload : RecipeSummer
})

export const getRecipeSummer = ()=> async(dispatch) =>{
    const URLDessert = "http://localhost:3001/Recipe/Season-Summer";
    try {
     const response = await fetch(URLDessert, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setRecipeSummer(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati per le ricette estive ");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati per le ricette estive" });
 }    
}

export const setRecipeHard =(RecipeHard) => ({
    type : ActionTypes.SET_RECIPE_HARD,
    payload : RecipeHard
})

export const getRecipeHard = ()=> async(dispatch) =>{
    const URLDessert = "http://localhost:3001/Recipe/Difficulty-Hard";
    try {
     const response = await fetch(URLDessert, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setRecipeHard(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati dei dessert");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dessert" });
 }    
}

export const setRecipeMedium =(RecipeMedium) => ({
    type : ActionTypes.SET_RECIPE_MEDIUM,
    payload : RecipeMedium
})

export const getRecipeMedium = ()=> async(dispatch) =>{
    const URLDessert = "http://localhost:3001/Recipe/Difficulty-Medium";
    try {
     const response = await fetch(URLDessert, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setRecipeMedium(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati dei dessert");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dessert" });
 }    
}

export const setRecipeEasy =(RecipeEasy) => ({
    type : ActionTypes.SET_RECIPE_EASY,
    payload : RecipeEasy
})

export const getRecipeEasy = ()=> async(dispatch) =>{
    const URLDessert = "http://localhost:3001/Recipe/Difficulty-Easy";
    try {
     const response = await fetch(URLDessert, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setRecipeEasy(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati dei dessert");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dessert" });
 }    
}

export const setDessert = (Dessert) => ({
    type : ActionTypes.SET_DESSERT,
    payload : Dessert
})

export const getDessert = ()=> async(dispatch) =>{
    const URLDessert = "http://localhost:3001/Recipe/DishCategory-Dessert";
    try {
     const response = await fetch(URLDessert, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setDessert(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati dei dessert");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dessert" });
 }    
}


export const setSecondCourse = (SecondCourse) => ({
    type : ActionTypes.SET_SECOND_COURSE,
    payload : SecondCourse
})

export const getSecondCourse = ()=> async(dispatch) =>{
    const URLSecondCourse = "http://localhost:3001/Recipe/DishCategory-Second_Course";
    try {
     const response = await fetch(URLSecondCourse, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setSecondCourse(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati dei second_course");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei second_course" });
 }    
}

export const setAppetizier = (Appetizier) => ({
    type: ActionTypes.SET_APPETIZER,
    payload : Appetizier
})

export const getAppetizier = ()=> async(dispatch) =>{
    const URLAppetizier = "http://localhost:3001/Recipe/DishCategory-Appetizer";
    try {
     const response = await fetch(URLAppetizier, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setAppetizier(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati degli appetizier");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati degli appetizier" });
 }    
}

export const setRecipeEmbers = (RecipeEmbers) => ({
    type : ActionTypes.SET_RECIPE_EMBERS,
    payload: RecipeEmbers
})

export const getRecipeEmbers = () =>async(dispatch) =>{
    const URL_RecipeEmbers = "http://localhost:3001/Recipe/CookingMethod-Embers";
    try {
     const response = await fetch(URL_RecipeEmbers, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setRecipeEmbers(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati delle ricette alla brace");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati delle ricette alla brace " });
 }        
}


export const setRecipeFrying = (RecipeFrying) => ({
    type: ActionTypes.SET_RECIPE_FRYING,
    payload: RecipeFrying
})

export const getRecipeFrying = () =>async(dispatch) =>{
    const URL_RecipeFrying = "http://localhost:3001/Recipe/CookingMethod-Frying";
    try {
     const response = await fetch(URL_RecipeFrying, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setRecipeFrying(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati delle ricette fritte");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati delle ricette fritte " });
 }        
}

export const setRecipeGrill = (RecipeGrill) => ({
    type: ActionTypes.SET_RECIPE_GRILL,
    payload: RecipeGrill
})

export const getRecipeGrill = () =>async(dispatch) =>{
    const URL_RecipeGrill = "http://localhost:3001/Recipe/CookingMethod-Grill";
    try {
     const response = await fetch(URL_RecipeGrill, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setRecipeGrill(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati delle ricette alla griglia");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati delle ricette alla griglia " });
 }        
}
export const setNonAlcoholicDrink = (NonAlcoholicDrink) => ({
    type: ActionTypes.SET_NON_ALCOHOLIC_DRINK,
    payload: NonAlcoholicDrink
})

export const getNonAlcoholicDrink = ()=> async(dispatch) =>{
    const URL_NonAlcoholicDrink = "http://localhost:3001/Recipe/DishCategory-Non_Alcoholic_Drink";
    try {
     const response = await fetch(URL_NonAlcoholicDrink, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setNonAlcoholicDrink(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati degli NonAlcoholicDrink");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati degli NonAlcoholicDrink " });
 }     
}

export const setAlcoholicDrink = (AlcoholicDrink) => ({
    type: ActionTypes.SET_ALCOHOLIC_DRINK,
    payload: AlcoholicDrink
})

export const getAlcoholicDrink = ()=> async(dispatch) =>{
    const URL_AlcoholicDrink = "http://localhost:3001/Recipe/DishCategory-Alcoholic_Drink";
    try {
     const response = await fetch(URL_AlcoholicDrink, {
         method: "GET",
         headers: {
             "Content-Type":"application/json"
         }
     });
     if (response.ok) {
         const data = await response.json();
         console.log("Dati ricevuti:", data);
         dispatch(setAlcoholicDrink(data));
         console.log("Dati ricevuti:", data);
         return data;
     } else {
         const errorMessage = await response.text();
         if (response.status === 401) {
             dispatch({ type: ActionTypes.SET_ERROR, payload: "Token JWT non valido o scaduto. Effettua di nuovo l'accesso." });
         } else {
             dispatch({ type: ActionTypes.SET_ERROR, payload: errorMessage || "Errore durante la richiesta dei dati " });
         }
         throw new Error(errorMessage || "Errore durante la richiesta dei dati degli AlcoholicDrink");
     }
 } catch (error) {
     console.error("Errore:", error);
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati degli AlcoholicDrink " });
 }     
}

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
     dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || "Errore durante la richiesta dei dati dei FirstCourse" });
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

