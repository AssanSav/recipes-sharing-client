import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/fetchRecipes";
import RecipesList from "../components/RecipesList";

class RecipesContainers extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    if (!this.props.recipes || this.props.recipes === []) {
      return <div></div>;
    } else {
      const { recipes } = this.props;
      return (
        <div>
          <RecipesList recipes={recipes} />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ recipesReducer }) => {
  return {
    recipes: recipesReducer.recipes,
  };
};

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainers);
