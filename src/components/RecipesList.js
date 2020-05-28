import React, {Component} from "react"
import RecipeCard from "./RecipeCard"
import { search, searchByIngredients } from "../actions/search"
import {connect} from "react-redux"



class RecipesList extends Component { 
    constructor() {
        super()
        this.state = {
            query: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.search(this.state.query) 
        this.setState({
            query: ""
        })
    }
    
    render() {
        const { recipes } = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input
                            placeholder="Search"
                            type="text"
                            name="query"
                            value={this.state.query}
                            onChange={this.handleChange}
                        /><input type="submit" value="Search"/>
                    </p>
                    
                </form>
                {recipes.map(recipe => <div key={recipe.id}><RecipeCard recipe={recipe} /></div>)}
            </div>
        )
    }
} 


export default connect(null, { search, searchByIngredients})(RecipesList)