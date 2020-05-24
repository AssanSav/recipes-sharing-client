import {
    LOGGED_OUT,
    LOGGED_IN,
    SIGNUP,
    LOGIN,
    LOGOUT
} from "../actions/types"
import { combineReducers } from 'redux'
import {
    FETCH_TO_ADD_INGREDIENT,
    FETCH_TO_UPDATE_RECIPE,
    FETCH_TO_CREATE_RECIPE,
    FETCH_RECIPE_SHOW,
    FETCH_CATEGORIES,
    FETCH_RECIPES
} from "../actions/types"



export function usersReducer(state = {
    isLoggedIn: false,
    user: {}
}, action) {
    const { payload, type } = action
    switch (type) {
        case SIGNUP:
            return {
                ...state,
                isLoggedIn: true,
                user: payload
            }
        case LOGIN:
            return {
                isLoggedIn: true,
                user: payload
            }
        case LOGGED_IN:
            return {
                isLoggedIn: true,
                user: payload.user
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


export const recipesReducer = (state = {
    recipeIngredients: [],
    recipes: [],
    recipe: {},
}, action) => {
    const { type, payload } = action
    
    switch ((type)) {
        case FETCH_RECIPES:
            return {
                ...state,
                recipes: payload
            }
        case FETCH_RECIPE_SHOW: 
            return {
                ...state,
                recipe: payload.recipe,
                recipeIngredients: payload.ingredients
            }
        case FETCH_TO_CREATE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.concat(payload)
            }
        case FETCH_TO_ADD_INGREDIENT:
            return {
                ...state,
                recipeIngredients: state.recipeIngredients.concat(payload)
            }
        case FETCH_TO_UPDATE_RECIPE:
            return {
                recipes: state.recipes.map(recipe => {
                    return payload.id === recipe.id ? payload : recipe
                })
            }
        default:
            return state
            
    }
}


export function categoriesReducer(state = {
    categories: []
}, action) {
    const {type, payload} = action
    switch (type) {
        case FETCH_CATEGORIES:
            return {
                categories: payload
            }
        default: 
            return state
    }
}


export const rootReducer = combineReducers({
    usersReducer, 
    recipesReducer, 
    categoriesReducer
})