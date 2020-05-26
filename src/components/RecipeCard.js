import React from "react"
import { Link } from "react-router-dom"




const RecipeCard = (props) => {
    const {id, name, image, category_name } = props.recipe
    return (
        <div className="recipe-card">
            <img src={image} alt={image} />
            <h3 >
                {name}
            </h3>
            <h3>
                CATEGORY: {category_name}
            </h3>

            <Link to={`/recipes/${id}`}>
                <button className="details">
                    Recipe Details
                </button>
            </Link>
        </div>
    )
}

export default RecipeCard