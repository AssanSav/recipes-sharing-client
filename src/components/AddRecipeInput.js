import React, { Component } from "react"
import { connect } from "react-redux"
import { addRecipe } from "../actions/addRecipe"
import { fetchCategories } from "../actions/fetchCategories"
import { withRouter } from 'react-router-dom';


class AddRecipeInput extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            directions: "",
            image: "",
            category_id: ""
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
        this.props.addRecipe(this.state, { ...this.props })
        this.setState({
            name: "",
            directions: "",
            image: "",
            category_id: ""
        })
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
                        <input
                            placeholder="Directions"
                            type="text"
                            name="directions"
                            value={directions}
                            onChange={this.handleChange}
                        />
                    </p>
                    <input type="submit" value="Create" ></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ categoriesReducer}) => {
    return {
        categories: categoriesReducer.categories
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addRecipe: recipe => dispatch(addRecipe(recipe, ownProps)),
        fetchCategories: () => dispatch(fetchCategories())
    }
}

const customComponent = connect(mapStateToProps, mapDispatchToProps)(AddRecipeInput)

export default withRouter(customComponent)

