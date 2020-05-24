import React, { Component } from "react"
import { connect } from "react-redux"
import { addRecipe } from "../actions/addRecipe"
import { fetchCategories } from "../actions/fetchCategories"
import { editRecipe } from "../actions/editRecipe"
import { withRouter } from 'react-router-dom';


class AddRecipeInput extends Component {
    constructor(props) {
        super(props)

        const {recipe} = props
        this.state = {
            id: recipe ? recipe.id : null,
            name: props.recipe ? recipe.name : "",
            directions: props.recipe ? recipe.directions :"",
            image: recipe ? recipe.image :"",
            category_id: recipe ? recipe.category_id :""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
        this.props.fetchCategories()
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault()
        if (this.props.match.params.recipeId) {
            this.props.editRecipe(this.state)
        }
        else {
            this.props.addRecipe(this.state, { ...this.props })
            this.setState({
            name: "",
            directions: "",
            image: "",
            category_id: ""
        })
        }
        
    }

    render() {
        const { name, directions, image, category_id } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select name="category_id" value={category_id} onChange={this.handleChange}>
                        {this.props.categories.map(category => <option key={category.id} value={category.id} >{category.name}</option>)}
                    </select>
                    <p>
                        <input
                            placeholder="Recipe Name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <input
                            placeholder="Image"
                            type="text"
                            name="image"
                            value={image}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <textarea className="direction" rows="7" cols="50"
                            placeholder="Directions"
                            type="text"
                            name="directions"
                            value={directions}
                            onChange={this.handleChange}
                        >
                        </textarea>
                    </p>
                    {this.props.match.params.recipeId ? <input type="submit" value="Edit" ></input>: <input type="submit" value="Create" ></input>}
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ categoriesReducer, recipesReducer }, ownProps) => {
    if (ownProps.match.params.recipeId) {
        return {
            recipe: recipesReducer.recipes.find(r => r.id == ownProps.match.params.recipeId) || recipesReducer.recipe,
            categories: categoriesReducer.categories,
        }
    }
    else {
        return {
            categories: categoriesReducer.categories,
            recipe: null
        } 
    }
   
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addRecipe: (formData) => dispatch(addRecipe(formData, ownProps)),
        fetchCategories: () => dispatch(fetchCategories()),
        editRecipe: (formData) => dispatch(editRecipe(formData, ownProps)),
    }
}

const customComponent = connect(mapStateToProps, mapDispatchToProps)(AddRecipeInput)

export default withRouter(customComponent)

