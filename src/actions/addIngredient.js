import { FETCH_TO_ADD_INGREDIENT } from "./types"



export function addIngredient(formData) {
    return (dispatch) => {
        return fetch(`http://localhost:3001/api/recipes/${formData.recipe_id}/recipe_ingredients`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ ingredient: formData })
        })
            .then(resp => resp.json())
            .then(({ingredient}) => {
                dispatch({ type: FETCH_TO_ADD_INGREDIENT, payload: ingredient })
            })
    }
}