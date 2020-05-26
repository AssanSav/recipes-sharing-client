import { FETCH_RECIPES_PLUS_INGREDIENTS } from "./types"


export function fetchRecipes() {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/recipes")
            .then(resp => resp.json())
            .then(({ recipes }) => {
                const { data } = recipes
                dispatch({ type: FETCH_RECIPES_PLUS_INGREDIENTS, payload: data.map(recipe => recipe.attributes) })
            })
    }
}