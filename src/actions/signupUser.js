import { SIGNUP, FAILED_SIGNUP } from "./types";

export function signupUser(user) {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        data.status === 200
          ? dispatch({ type: SIGNUP, payload: data.user.data.attributes })
        :
        dispatch(
          {
            type: FAILED_SIGNUP,
            status: 409,
            usernameError: data.username_error,
            emailError: data.email_error,
            passwordError: data.passwordError,
            passwordConfirmationError: data.password_confirmation_error,
          })
      });
  };
}
