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
    isLoggedIn: false
}, action) {

    const { payload, type } = action
    switch (type) {
        case SIGNUP:
            debugger
            return {
                isLoggedIn: true,
                user: payload
            }
        case LOGIN:
            return {
                isLoggedIn: payload.logged_in,
                user: payload.user.data
            }
        case LOGGED_IN:
            return {
                isLoggedIn: payload.logged_in,
                user: payload.user.data
            }
        case LOGGED_OUT:
            return {
                isLoggedIn: false,
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
    recipesIds: [],
    recipesObjects: []
}, action) {
    const { type, payload } = action
    
    switch ((type)) {
        case FETCH_RECIPES:
            return {
                recipesIds: payload.map(recipe => recipe.id),
                recipes: payload.reduce((idM, recipe) => {
                    idM[recipe.id] = recipe
                }, {})
            }
        default:
            return state
            
    }
}

export const rootReducer = combineReducers({
    users
})