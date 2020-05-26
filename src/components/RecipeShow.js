import React, { Component } from "react"
import { connect } from "react-redux"
import {Link} from "react-router-dom"
import { fetchRecipeShow } from "../actions/fetchRecipeShow"
import { addIngredient } from "../actions/addIngredient"
import { removeRecipe } from "../actions/removeRecipe"
import IngredientCard from "./IngredientCard"

class RecipeShow extends Component {
    constructor() {
        super()
        this.state = {
            ingredient_name: "",
            amount: "",
            recipe_id: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    };


    componentDidMount() {
        this.props.fetchRecipeShow(this.props.match.params.recipeId)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            recipe_id: this.props.match.params.recipeId
        })
    }


    handleSubmit(e) {
        e.preventDefault()
        this.props.addIngredient(this.state)
        this.setState({
            ingredient_name: "",
            amount: "",
            recipeId: ""
        })
    }

    handleDelete() {
        this.props.removeRecipe(this.props.recipe)
        .then(() => {
            this.props.history.push("/recipes")
        })
    }

    render() {
        if (!this.props.recipe || this.props.ingredients === []) {
            return <div></div>
        }
        else {
            const { id, name, directions, image, username, category_name } = this.props.recipe
            const { ingredient_name, amount } = this.state
            const { user, recipe, isLoggedIn } = this.props
            return (
                <div className="render-show">
                    <img src={image} alt={image} />
                    <h3>
                        {name}
                    </h3>
                    <h3>
                        {category_name}
                    </h3>
                    <p>
                        {directions}
                    </p>

                    {user.id === recipe.user_id ?
                        <Link to={`/recipes/${id}/edit`}>
                            <button className="edit">
                                Edit Recipe 
                            </button>
                        </Link> : null}
                    
                    {this.props.ingredients.map((ingredient) => 
                        <IngredientCard ingredient={ingredient} recipe={recipe} />
                    )}

                    {isLoggedIn && user.id === recipe.user_id ?
                        <form onSubmit={this.handleSubmit}>
                            <p>
                                <input
                                    placeholder="Ingredient Name"
                                    type="text"
                                    name="ingredient_name"
                                    value={ingredient_name}
                                    onChange={this.handleChange}
                                />
                            </p>
                            <p>
                                <input
                                    placeholder="Amount"
                                    type="text"
                                    name="amount"
                                    value={amount}
                                    onChange={this.handleChange}
                                />
                            </p>
                            <input type="submit" value="Add Ingredient" ></input>
                            <br/>
                            <Link to={`/recipes/${id}`} >
                                <button className="delete" onClick={this.handleDelete}>
                                    Delete
                                </button>
                            </Link>
                        </form>
                        : null}
                    <br/>
                    <footer>
                        <strong>
                            By: {username}
                        </strong>
                    </footer>
                </div>
            )
        }
    }
}

const mapStateToProps = ({ recipesReducer, usersReducer, ingredientsReducer }) => {
    return {
        ingredients: ingredientsReducer.ingredients,
        recipe: recipesReducer.recipe,
        isLoggedIn: usersReducer.isLoggedIn,
        user: usersReducer.user
    }
}

export default connect(mapStateToProps, { fetchRecipeShow, addIngredient, removeRecipe })(RecipeShow)