import { FETCH_TO_DELETE_INGREDIENT } from "./types";

export function removeIngredient(ingredient, recipe) {
  return (dispatch) => {
    fetch(
      `http://localhost:3001/api/recipes/${recipe.id}/recipe_ingredients/${ingredient.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(ingredient),
        credentials: "include",
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: FETCH_TO_DELETE_INGREDIENT,
          payload: data.ingredient,
        });
      });
  };
}
