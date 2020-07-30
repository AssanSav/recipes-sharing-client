import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import RecipesContainer from "../containers/RecipesContainer";
import RecipeShow from "./RecipeShow";
import AddRecipeInput from "./AddRecipeInput";
import EditIngredient from "./EditIngredient.js";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/login"
          render={(routerProps) => <Login history={routerProps.history} />}
        ></Route>
        <Route
          exact
          path="/signup"
          render={(routerProps) => <Signup {...routerProps} />}
        ></Route>
        <Route exact path="/">
          <RecipesContainer />
        </Route>
        <Route path="/recipes/new">
          <AddRecipeInput />
        </Route>
        <Route
          exact
          path="/recipes/:recipeId"
          render={(routerProps) => <RecipeShow {...routerProps} />}
        ></Route>
        <Route
          exact
          path="/recipes/:recipeId/edit"
          render={(routerProps) => <AddRecipeInput {...routerProps} />}
        ></Route>
        <Route
          exact
          path="/recipes/:recipeId/ingredients/:id"
          render={(routerProps) => <EditIngredient {...routerProps} />}
        ></Route>
      </Switch>
    </div>
  );
};

export default Routes;
