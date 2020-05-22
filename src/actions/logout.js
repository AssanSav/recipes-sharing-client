import { LOGOUT } from "./types"


export function fetchToLogout(userId) {
    return (dispatch) => {
        fetch(`http://localhost:3001/logout/${userId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: "include"
        })
            .then(resp => dispatch({ type: LOGOUT }))
    }
}