import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchRecipes } from "../actions/fetchRecipes"
// import RecipesList from "../components/RecipesList"


class RecipesContainers extends Component {

    componentDidMount() {
        this.props.fetchRecipes()
    }

    render() {
        // const { recipes } = this.props
        return (
            <div>
                {/* <RecipesList recipes={recipes} /> */}
            </div>
        )
    }
}

const mapStateToProps = ({ recipes }) => {
    return {
        // recipes: state.recipesReducer.recipes
    }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainers)
