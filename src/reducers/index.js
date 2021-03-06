import { combineReducers } from "redux";

import {
  LOGGED_OUT,
  LOGGED_IN,
  SIGNUP,
  LOGIN,
  LOGOUT,
  FAILED_LOGIN,
  FAILED_SIGNUP,
  FETCH_RECIPE_SHOW_PLUS_INGREDIENTS,
  FETCH_RECIPES_PLUS_INGREDIENTS,
  FETCH_TO_DELETE_INGREDIENT,
  FETCH_TO_UPDATE_INGREDIENT,
  FETCH_TO_ADD_INGREDIENT,
  FETCH_TO_UPDATE_RECIPE,
  FETCH_TO_CREATE_RECIPE,
  FETCH_TO_DELETE_RECIPE,
  FETCH_CATEGORIES,
} from "../actions/types";

export const usersReducer = (
  state = { isLoggedIn: false, user: {}, emailError: "", passwordError: "" },
  action
) => {
  const { payload, emailEr, passwordEr, emailError, passwordError, usernameError, passwordConfirmationError, status,  type } = action;

  switch (type) {
    case SIGNUP:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };

    case LOGIN:
      return {
        isLoggedIn: true,
        user: payload,
      };

    case FAILED_LOGIN:
      return {
        emailEr: emailEr,
        passwordEr: passwordEr,
      };
    
    case FAILED_SIGNUP:
      return {
        status: status,
        emailError: emailError[0],
        usernameError: usernameError,
        passwordError: passwordError,
        passwordConfirmationError: passwordConfirmationError,
      };
    case LOGGED_IN:
      return {
        isLoggedIn: true,
        user: payload.user,
      };

    case LOGGED_OUT:
      return {
        isLoggedIn: false,
        user: {},
      };

    case LOGOUT:
      return {
        isLoggedIn: false,
        usersReducer: {},
      };

    default:
      return state;
  }
};

export const recipesReducer = (state = { recipes: [], recipe: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_RECIPES_PLUS_INGREDIENTS:
      return {
        recipes: payload,
      };

    case FETCH_RECIPE_SHOW_PLUS_INGREDIENTS:
      return {
        ...state,
        recipe: payload.recipe,
      };

    case FETCH_TO_CREATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.concat(payload),
      };

    case FETCH_TO_UPDATE_RECIPE:
      return {
        recipes: state.recipes.map((recipe) => {
          return payload.id === recipe.id ? payload : recipe;
        }),
      };

    case FETCH_TO_DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== payload.id),
      };

    default:
      return state;
  }
};

export const ingredientsReducer = (
  state = { allIngredients: [], ingredients: [] },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_RECIPES_PLUS_INGREDIENTS:
      return {
        allIngredients: payload.map((recipe) => recipe.ingredients),
      };

    case FETCH_RECIPE_SHOW_PLUS_INGREDIENTS:
      return {
        ingredients: payload.ingredients,
      };

    case FETCH_TO_ADD_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.concat(payload),
      };

    case FETCH_TO_UPDATE_INGREDIENT:
      return {
        ingredients: state.ingredients.map((ingredient) => {
          return payload.id === ingredient.id ? payload : ingredient;
        }),
      };

    case FETCH_TO_DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.id !== payload.id
        ),
      };

    default:
      return state;
  }
};

export const categoriesReducer = (state = { categories: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  usersReducer,
  recipesReducer,
  ingredientsReducer,
  categoriesReducer,
});
