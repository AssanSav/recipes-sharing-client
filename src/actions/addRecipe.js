import { FETCH_TO_CREATE_RECIPE } from "./types";

export function addRecipe(formData, ownProps) {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then(({ recipe }) => {
        dispatch(
          {
            type: FETCH_TO_CREATE_RECIPE,
            payload: recipe.data.attributes,
          },
          ownProps.history.push(`/recipes/${recipe.data.attributes.id}`)
        );
      })
      .catch((err) => ownProps.history.push("/recipes/new"));
  };
}
