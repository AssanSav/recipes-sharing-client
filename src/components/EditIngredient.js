import React, { Component } from "react";
import { connect } from "react-redux";
import { editIngredient } from "../actions/editIngredient";
import { fetchRecipeShow } from "../actions/fetchRecipeShow";

class EditIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.ingredient ? props.ingredient.id : props.match.params.id,
      ingredient_name: props.ingredient ? props.ingredient.name : "",
      amount: props.ingredient ? props.ingredient.amount : "",
      recipe_id: props.match.params.recipeId,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.ingredient.id,
      ingredient_name: nextProps.ingredient.name,
      amount: nextProps.ingredient.amount,
      recipe_id: this.props.match.params.recipeId,
    });
  }

  componentDidMount() {
    if (this.props.match.params) {
      this.props.fetchRecipeShow(this.props.match.params.recipeId);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      recipe_id: this.props.match.params.recipeId,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editIngredient(this.state).then(() => {
      this.props.history.push(`/recipes/${this.props.match.params.recipeId}`);
    });
    this.setState({
      ingredient_name: "",
      amount: "",
      recipeId: "",
    });
  }

  render() {
    const { ingredient_name, amount } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>
            <input
              placeholder="Ingredient Name"
              type="text"
              name="ingredient_name"
              value={ingredient_name}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              placeholder="Amount"
              type="text"
              name="amount"
              value={amount}
              onChange={this.handleChange}
            />
          </p>
          <input type="submit" value="Edit"></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ ingredientsReducer }, { match }) => {
  return {
    ingredient: ingredientsReducer.ingredients.find(
      (ingredient) => ingredient.id.toString() === match.params.id
    ),
  };
};

export default connect(mapStateToProps, { editIngredient, fetchRecipeShow })(
  EditIngredient
);
