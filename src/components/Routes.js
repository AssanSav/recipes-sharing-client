import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import NavBar from "./NavBar"
import RecipesContainer from "../containers/RecipesContainer"
import RecipeShow from "./RecipeShow"
import AddRecipeInput from "./AddRecipeInput"


const Routes = () => {

    return (
        <Router>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/login" render={(routerProps) =>
                        <Login history={routerProps.history}
                        />}>
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/recipes/new">
                        <AddRecipeInput />
                    </Route>
                    <Route exact path="/recipes/:recipeId" render={(routerProps) =>
                        <RecipeShow {...routerProps}
                        />}>
                    </Route>
                    <Route exact path="/recipes/:recipeId/edit" render={(routerProps) =>
                        <AddRecipeInput {...routerProps}
                        />}>
                    </Route>
                    <Route exact path="/recipes">
                        <RecipesContainer />
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}

export default Routes