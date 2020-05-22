import { LOGGED_IN } from "./types"
import { LOGGED_OUT } from "./types"

export function sessionStatus() {
    return dispatch => {
        fetch("http://localhost:3001/login/status", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: "include"
        })
            .then(resp => resp.json())
            .then(data => data.logged_in ? dispatch({ type: LOGGED_IN, payload: data }) : dispatch({ type: LOGGED_OUT, payload: data }))
    }
}