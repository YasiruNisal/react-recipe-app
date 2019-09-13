import React, { Component } from 'react'
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
import { recipeData } from '../data/tempList'
// import { threadId } from 'worker_threads'

export default class Recipes extends Component {

    constructor(props)
    {
        super(props)
        this.getRecipes = this.getRecipes.bind(this)
    }

    state = {
        recipes : recipeData,
        search:'',
        url:`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        base_url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        query:'&q=',
        error:''
    }

    componentDidMount()
    {
        this.getRecipes();
    }

    async getRecipes()
    {
        try {
            const data = await fetch(this.state.url);
            const jsonData = await data.json();
            if(jsonData.recipes.length === 0)
            {
                this.setState({
                    error:"No recipes with this key words"
                })
            }
            else
            {
                this.setState({
                    recipes:jsonData.recipes,
                    error:''
                })
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    handleChange =  event =>
    {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = event =>
    {
        event.preventDefault()
        const {base_url,query,search} = this.state;
        this.setState({
            url:`${base_url}${query}${search}`,
            search:''
        }, () => this.getRecipes())
    }


    render() {
        return (
            <>
                <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                {this.state.error ? (<h1 className="text-orange text-center mx-5"> {this.state.error}</h1>) : (<RecipeList recipes={this.state.recipes} />)}
               

            </>
        )
    }
}
