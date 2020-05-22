import { LOGIN } from "./types"

export function fetchToLoginUser(user) {
    return dispatch => {
        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify(user)
        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: LOGIN, payload: data }))
    }
}