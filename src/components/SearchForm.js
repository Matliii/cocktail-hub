import React from 'react'
import './SearchForm.css'
import { useGlobalContext } from '../Context';


export default function SearchForm() {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = React.useRef("");

    React.useEffect(() => {
        searchValue.current.focus();
    }, []);

    function searchCocktail() {
        setSearchTerm(searchValue.current.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section className='section search'>
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name"><p>Search </p></label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    ref={searchValue}
                    onChange={searchCocktail}
                    placeholder="Search cocktail.."
                />
                </div>
            </form>
        </section>
    )
}