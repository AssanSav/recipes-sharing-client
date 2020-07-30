import { FETCH_TO_UPDATE_RECIPE } from "./types";

export function editRecipe(formData, ownProps) {
  return (dispatch, getState) => {
    return fetch(`http://localhost:3001/api/recipes/${formData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then(({ recipe }) => {
        dispatch(
          {
            type: FETCH_TO_UPDATE_RECIPE,
            payload: recipe.data.attributes,
          },
          ownProps.history.push(`/recipes/${recipe.data.attributes.id}`)
        );
      });
  };
}
