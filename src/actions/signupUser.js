import { SIGNUP } from "./types"

export function fetchToSignupUser(user) {
    return (dispatch) => {
        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(user)

        })
            .then(resp => resp.json())
            .then(data => dispatch({ type: SIGNUP, payload: data.user }))
    }
}