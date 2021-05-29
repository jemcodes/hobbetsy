import React from "react";
import { Link, useHistory } from "react-router-dom";
import Search from './Search';



function SingleSearchItem({ product, setSearch }) {

    const history = useHistory()
    const clearSearch = (e) => {
        e.preventDefault()
        setSearch('')
        history.push(`/products/${product.id}`)
    }

    return (
        <div className='populated-search-results'>
            <Link to={`/products/${product.id}`} onClick={clearSearch}>{product.title}</Link>
        </div>
    )
}

export default SingleSearchItem