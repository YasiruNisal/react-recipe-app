import React, { Component } from 'react'
import Recipe from './Recipe';

export default class RecipeList extends Component {
    render() {
        const { recipes } = this.props

        return (
            <>
                <div className="container py-5">
                    {/* title */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-capitalize md-3">
                            <h1 className="text-slanted">Recipe List</h1>
                        </div>
                    </div>
                    {/* end of title */}
                    <div className="row">
                        {recipes.map(recipe => (
                            <Recipe key={recipes.recipe_id} recipe={recipe}/>
                         ) )}
                    </div>
                    
                </div>
            </>
            
        )
    }
}
