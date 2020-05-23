import React from "react"
import RecipeCard from "./RecipeCard"


export default function RecipesList(props) {
    const { recipes } = props
    return (
        <div>
            {recipes.map(recipe => <div key={recipe.id}><RecipeCard recipe={recipe} /></div>)}
        </div>
    )
}