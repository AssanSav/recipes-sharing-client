import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchRecipeShow } from "../actions/fetchRecipeShow"
import { addIngredient } from "../actions/addIngredient"
import {Link} from "react-router-dom"



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


    render() {
        try {
            if (!this.props.recipe || this.props.ingredients === []) {
                return <div></div>
            }
            else {
                const { id, name, directions, image, username, category_name } = this.props.recipe
                const { ingredients } = this.props
                const { ingredient_name, amount } = this.state
                const { user, recipe, isLoggedIn } = this.props
                return (
                    <div className="render-show">
                        <span>
                            <img src={image} alt={image} />
                            <h3 style={{ color: "antiquewhite" }}>{name}</h3>
                            <h3 style={{ color: "antiquewhite" }}>{category_name}</h3>
                            <p style={{color: "antiquewhite"}}>{directions}</p>

                            {user.id === recipe.user_id ? <Link to={`/recipes/${id}/edit`} style={{ color: "yellow" }}>Edit Recipe</Link> : null}
                            <table>
                                {ingredients.map((ing) => {
                                    return <tbody key={ing.id}>
                                                <tr key={ing.id}> 
                                                    <th>{ing.name}</th>
                                                </tr>
                                                <tr>
                                                    <td>{ing.amount}</td>
                                                </tr>
                                            </tbody>
                                    }
                                )}
                            </table>
                            <footer>
                                <strong>
                                    By: {username}
                                </strong>
                            </footer>
                        </span>

                        {isLoggedIn && user.id === recipe.user_id ?
                            <form onSubmit={(e) => this.handleSubmit(e)}>
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
                                <input type="submit" value="Add Ingredients" ></input>
                            </form>
                        : null}
                    </div>
                )
            }
        } catch (err) {
            return <div>{err}</div>
        }
    }
}

const mapStateToProps = ({ recipesReducer, usersReducer }) => {
    const { recipe, recipeIngredients } = recipesReducer
    const { user, isLoggedIn} = usersReducer
    return {
        ingredients: recipeIngredients,
        recipe: recipe,
        isLoggedIn: isLoggedIn,
        user: user
    }
}

export default connect(mapStateToProps, { fetchRecipeShow, addIngredient })(RecipeShow)