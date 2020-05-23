import {
    LOGGED_OUT,
    LOGGED_IN,
    SIGNUP,
    LOGIN,
    LOGOUT
} from "../actions/types"
import { combineReducers } from 'redux'
import { FETCH_RECIPES} from "../actions/types"

export function usersReducer(state = {
    user: {},
    isLoggedIn: false
}, action) {

    const { payload, type } = action

    switch (type) {
        case SIGNUP:
            return {
                isLoggedIn: true,
                user: payload
            }
        case LOGIN:
            return {
                isLoggedIn: payload.logged_in,
                user: payload
            }
        case LOGGED_IN:
            return {
                isLoggedIn: payload.logged_in,
                user: payload
            }
        case LOGGED_OUT:
            return {
                isLoggedIn: false,
                user: {}
            }
        case LOGOUT:
            return {
                isLoggedIn: false,
                usersReducer: {}
            }
        default: 
            return state
    }
}


export function recipesReducer(state = {
    recipes: []
}, action) {
    const { type, payload } = action
    
    switch ((type)) {
        case FETCH_RECIPES:
            return {
                recipes: payload
            }
        default:
            return state
            
    }
}

export const rootReducer = combineReducers({
    usersReducer, 
    recipesReducer
})