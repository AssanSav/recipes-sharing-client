import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchCategories } from "../actions/fetchCategories"
// import CategoriesList from "../components/CategoriesList"


class CategoriesContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        return (
            <div>
            </div>
        )  
    }
}

const mapStateToProps = ({ categoriesReducer }) => {
    const {categories} = categoriesReducer
    return {
        categories: categories
    }
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)