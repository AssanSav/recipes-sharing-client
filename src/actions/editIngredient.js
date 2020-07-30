import { FETCH_TO_UPDATE_INGREDIENT } from "./types";

export function editIngredient(ingredient) {
  return (dispatch) => {
    return fetch(
      `http://localhost:3001/api/recipes/${ingredient.recipe_id}/recipe_ingredients/${ingredient.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ingredient: ingredient }),
        credentials: "include",
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: FETCH_TO_UPDATE_INGREDIENT,
          payload: data.ingredient,
        });
      });
  };
}
