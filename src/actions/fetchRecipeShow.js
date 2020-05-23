import { FETCH_RECIPE_SHOW } from "./types"



export function fetchRecipeShow(recipeId) {
    return dispatch => {
        fetch(`http://localhost:3001/api/recipes/${recipeId}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            credentials: "include"
        })
            .then(resp => resp.json())
            .then(data => {
                debugger
                dispatch({ type: FETCH_RECIPE_SHOW, payload: data.recipe })
            }
        )
    }
}