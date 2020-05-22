import { FETCH_RECIPES } from "./types"


export function fetchRecipes() {
    return (dispatch) => {
        fetch("http://localhost:3001/recipes")
            .then(resp => resp.json())
            .then(data => dispatch({ type: FETCH_RECIPES, payload: data.recipes })
            )
    }
}