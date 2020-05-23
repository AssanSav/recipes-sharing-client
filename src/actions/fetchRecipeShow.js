import { FETCH_RECIPE_SHOW } from "./types"



export function fetchRecipeShow(recipeId) {
    return dispatch => {
        return fetch(`http://localhost:3001/api/recipes/${recipeId}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            credentials: "include"
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch({
                    type: FETCH_RECIPE_SHOW, payload: {
                        recipe: data.recipe.data.attributes,
                        ingredients: data.ingredients
                    }
                })
            }
        )
    }
}