import {
    LOGGED_IN,
    LOGGED_OUT,
    SIGNUP,
    LOGIN,
    LOGOUT
} from "../actions/types"
import { combineReducers } from 'redux'

export function usersReducer(state = { user: {}, isLoggedIn: null }, action) {
    const { payload } = action
    
    switch (action.type) {
        case SIGNUP:
            return {
                isLoggedIn: true,
                user: payload
            }
        case LOGIN:
            return {
                isLoggedIn: payload.logged_in,
                user: payload.user
            }
        case LOGGED_IN:
            return {
                isLoggedIn: payload.logged_in,
                user: payload.user
            }
        case LOGGED_OUT:
            return {
                isLoggedIn: payload.logged_in,
                user: {}
            }
        case LOGOUT:
            return {
                isLoggedIn: false,
                users: {}
            }
        default: 
            return state
    }
}

export const rootReducer = combineReducers({
    usersReducer
})