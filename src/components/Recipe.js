import React, { Component } from 'react'
import {Link } from 'react-router-dom'

export default class Recipe extends Component {
    render() {

        const { image_url, title, source_url, publisher, recipe_id} = this.props.recipe
        return (
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card" style={{height:'100%'}}>
                    <img src={image_url} style={{height:'14rem'}} className="img-card-top"  alt="recipe_image"/>
                    <div className="card-body text-capitalize">
                        <h6>{title}</h6>
                        <h6 className="text-warning text-slanted">By {publisher}</h6>
                    </div>
                    <div className="card-footer">
                        <Link to={`/recipe/${recipe_id}`} className="btn btn-primary mx-2 text-capitalize">More Info</Link>
                        <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mx-2 text-capitalize">Open Recipe</a>
                    </div>
                </div>
            </div>
        )
    }
}
