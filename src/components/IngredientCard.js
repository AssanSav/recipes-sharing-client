import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { removeIngredient} from "../actions/removeIngredient"



const IngredientCard = ({ recipe, ingredient, isloggedIn, user, removeIngredient }) => {

    const handleDelete = () => {
        removeIngredient(ingredient, recipe)
    }


    return (
        <div className="ingredient-card">
            <table>
                <tbody>
                    <tr>
                        <th>
                            {ingredient.name}
                            {isloggedIn && user.id === recipe.user_id ?
                                <>
                                <button onClick={handleDelete} className="edit-ingredient">
                                    Delete
                                </button>
                                
                                <Link to={`/recipes/${recipe.id}/ingredients/${ingredient.id}`}>
                                    <button className="edit-ingredient">
                                        Edit
                                </button>
                                    </Link> 
                                </>
                                : null}
                        </th>
                    </tr>
                    <tr>
                        <td>{ingredient.amount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default connect(null, {removeIngredient})(IngredientCard)