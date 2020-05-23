import { LOGIN } from "./types"

export function loginUser(user) {
    return dispatch => {
        return fetch("http://localhost:3001/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify(user)
        })
            .then(resp => resp.json())
            .then(({ user }) => {
                dispatch({ type: LOGIN, payload: user.data.attributes })
            })
    
    }
}