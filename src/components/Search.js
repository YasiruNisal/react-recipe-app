import React, { Component } from 'react'

export default class Search extends Component {
    render() {

        const {handleChange, handleSubmit, search} = this.props

        return (
            <div className='container'>
                <div className="row">
                     <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className="text-slanted text-capitalize">
                            Search Recipes with <strong className="text-orange">Food2Fork</strong>
                        </h1>
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <label htmlFor="search" className="text-capitalize">
                                Type recipes separated by comma
                            </label>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Carret,Orange" value={search} onChange={handleChange}/>
                                <div className="input-group-append">
                                    <button type="submit" className="input-group-text bg-primary text-white">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                     </div>
                </div>
            </div>
        )
    }
}
