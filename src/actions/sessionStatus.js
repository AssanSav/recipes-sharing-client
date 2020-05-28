import { LOGGED_IN } from "./types"
import { LOGGED_OUT } from "./types"



export function sessionStatus() {
    return dispatch => {
        fetch("http://localhost:3001/api/login/status", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: "include"
        })
            .then(resp => resp.json())
            .then(data => {
                data.logged_in ? dispatch({ type: LOGGED_IN, payload: { user: data.user.data.attributes, isLoggedIn: data.logged_in} }) : dispatch({ type: LOGGED_OUT, payload: data })
            })
    }
}