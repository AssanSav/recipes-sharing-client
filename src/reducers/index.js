import {
    LOGGED_OUT,
    LOGGED_IN,
    SIGNUP,
    LOGIN,
    LOGOUT
} from "../actions/types"
import { combineReducers } from 'redux'
import { FETCH_RECIPES} from "../actions/types"

export function users(state = {
    user: {},
    isLoggedIn: null
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


export function recipes(state = {
    recipesId: [],
    recipesObjects: []
}, action) {

    const {type} = action
    switch ((type)) {
        case FETCH_RECIPES:
            return {

            }
        default:
            return state
            
    }
}

export const rootReducer = combineReducers({
    users
})