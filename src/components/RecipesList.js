import React, {Component} from "react"
import RecipeCard from "./RecipeCard"



class RecipesList extends Component { 
    constructor() {
        super()
        this.state = {
            query: "",
            recipes: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            query: e.target.value, 
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            recipes: this.props.recipes.filter(r => {
                return r.category_name.includes(this.state.query.charAt(0).toUpperCase()) 
            }),
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
                        />
                <input type="submit" value="Search" />
                    </p>
                    
                </form>
                {this.state.recipes.length > 0 ? this.state.recipes.map(recipe => <div key={recipe.id}><RecipeCard recipe={recipe} /></div>) : recipes.map(recipe => <div key={recipe.id}><RecipeCard recipe={recipe}/></div>)}
            </div>
        )
    }
} 


export default (RecipesList)