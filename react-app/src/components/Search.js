import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import SingleSearchItem from "./SingleSearchItem"

function Search() {

    const [search, setSearch] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([]);

    const products = useSelector(state => {
        return state.products.list.map(productId => state.products[productId]);
    })

    useEffect(() => {
        setFilteredProducts(products.filter(product => {
            return product.title.toLowerCase().includes(search.toLowerCase())
        })
        )
    }, [search])
    return (
        <>
            <div className="search-div">
                <input value={search} type="text" placeholder="Search products by name..." onChange={(e) => setSearch(e.target.value)} className='product-search' />
            </div>
            {filteredProducts.length < 29 && filteredProducts.length > 0 && <div id='search-results-div'>
                {search.length >= 1 && filteredProducts.map(product => (
                    <SingleSearchItem product={product} setSearch={setSearch} filteredProducts={filteredProducts} key={product.id} />
                ))}
            </div>}

            {filteredProducts.length === 0 && <div id='search-results-div'>
                <p id='no-results'>Out of stock...</p>
            </div>}
            {/* COMMENTED CODE BELOW IS WORKING AND IS A BACKUP VERSION */}
            {/* {filteredProducts.length ?
                <div id='search-results-div'>
                    {search.length >= 1 && filteredProducts.map(product => (
                        <SingleSearchItem product={product} setSearch={setSearch} filteredProducts={filteredProducts} />
                    ))}
                </div>
                :
                <div id='search-results-div'>
                    <p id='no-results'>Out of stock...</p>
                </div>} */}

        </>
    )
}

export default Search;