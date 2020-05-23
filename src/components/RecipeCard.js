import React from "react"
import { Link } from "react-router-dom"




const RecipeCard = (props) => {
    const {id, name, image, category_name } = props.recipe
    return (
        <div className="column">
            <img src={image} alt={image} />
            <h3>{name}</h3>
            <h3>{category_name}</h3>

            <Link to={`/recipes/${id}`}> Recipe Details</Link>
            <br />
            {/* <Link to={`/recipes/${id}/edit`}> Edit Recipe</Link> */}
        </div>
    )
}

export default RecipeCard