import { LOGOUT } from "./types"


export function logoutUser(userId) {
    return (dispatch) => {
        fetch(`http://localhost:3001/api/logout/${userId}`, {
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