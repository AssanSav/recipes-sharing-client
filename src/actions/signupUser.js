import { SIGNUP } from "./types"

export function signupUser(user) {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(user)

        })
            .then(resp => resp.json())
            .then(({ user }) => {
                dispatch({ type: SIGNUP, payload: user.data.attributes })
            } )
    }
}