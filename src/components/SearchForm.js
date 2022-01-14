import React from 'react'
import './SearchForm.css'

const SearchForm = () => {
    return (
        <section className='section search'>
            <form className='search-form'>
                <div className='form-control'>
                    <label htmlFor='name'> <p>Search bar...</p></label>
                    <input type="text" />
                </div>
            </form>
        </section>
    )
}

export default SearchForm
