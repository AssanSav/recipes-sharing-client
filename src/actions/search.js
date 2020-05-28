import { SEARCH, SEARCH_BY_INGREDIENTS } from "./types"


export function search(value) {
    return dispatch => dispatch({
        type: SEARCH,
        payload: value
    })
}

export function searchByIngredients(query) {
    return dispatch => dispatch({
        type: SEARCH_BY_INGREDIENTS,
        payload: query
    })
}