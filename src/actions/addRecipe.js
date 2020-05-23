import { FETCH_TO_CREATE_RECIPE } from "./types"


export function fetchToAddRecipe(formData, ownProps) {
    return (dispatch, getState) => {
        fetch("http://localhost:3001/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(data => {
                debugger
                dispatch({ type: FETCH_TO_CREATE_RECIPE, payload: data.recipe },
                    ownProps.history.push(`/recipes/${data.recipe[0].id}`))
            }
            )
            .catch(err => ownProps.history.push("/recipes/new"))
    }
}