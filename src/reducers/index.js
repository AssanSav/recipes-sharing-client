import {
    LOGGED_IN,
    LOGGED_OUT,
    SIGNUP,
    LOGIN,
    LOGOUT
} from "../actions/types"
import { combineReducers } from 'redux'

export function UsersReducer(state = { user: {}, isLoggedIn: null }, {payload}) {
    switch (action.type) {
        case SIGNUP:
            return {
                isLoggedIn: true,
                user: payload
            }
        case LOGIN:
            return {
                isLogged_in: payload.logged_in,
                user: payload.user
            }
        case LOGGED_IN:
            return {
                isLogged_in: payload.logged_in,
                user: payload.user
            }
        case LOGGED_OUT:
            return {
                isLogged_in: payload.logged_in,
                user: {}
            }
        case LOGOUT:
            return {
                isLogged_in: false,
                users: {}
            }
        default: 
            return state
    }
}

export const rootReducer = combineReducers({
    UsersReducer,
})