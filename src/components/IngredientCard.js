import React from "react"
import { Link } from "react-router-dom"


const IngredientCard = ({ recipe, ingredient }) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>
                            {ingredient.name}
                
                            <Link to={`/recipes/${recipe.id}/ingredients/${ingredient.id}`}>
                                <button className="edit-ingredient">
                                    Edit Ingredient
                                </button>
                            </Link>
                            
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

export default IngredientCard