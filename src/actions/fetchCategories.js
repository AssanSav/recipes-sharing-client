import { FETCH_CATEGORIES } from "./types"



export function fetchCategories() {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/categories")
            .then(resp => resp.json())
            .then(({ categories }) => {
                dispatch({ type: FETCH_CATEGORIES, payload: categories })
            })
    }
}