import { FETCH_TO_DELETE_RECIPE } from "./types"



export function removeRecipe(recipe) {
    return (dispatch) => {
        return fetch(`http://localhost:3001/api/recipes/${recipe.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(recipe),
            credentials: "include"
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: FETCH_TO_DELETE_RECIPE, payload: data.recipe }
                )
        } )
    }
}