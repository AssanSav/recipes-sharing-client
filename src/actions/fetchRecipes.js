import { FETCH_RECIPES } from "./types"


export function fetchRecipes() {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/recipes")
            .then(resp => resp.json())
            .then(({ recipes }) => {
                const { data } = recipes
                dispatch({ type: FETCH_RECIPES, payload: data.map(recipe => recipe.attributes) })
            })
    }
}