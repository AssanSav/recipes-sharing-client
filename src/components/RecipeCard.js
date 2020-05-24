import React from "react"
import { Link } from "react-router-dom"




const RecipeCard = (props) => {
    const {id, name, image, category_name } = props.recipe
    return (
        <div className="container">
            <img src={image} alt={image} />
            <h3 style={{ color: "antiquewhite" }}>{name}</h3>
            <h3 style={{ color: "antiquewhite" }}>{category_name}</h3>

            <Link to={`/recipes/${id}`} style={{ color: "antiquewhite" }}> Recipe Details</Link>
        </div>
    )
}

export default RecipeCard