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
        setFilteredProducts(products.filter( product => {
            return product.title.toLowerCase().includes(search.toLowerCase())
        })
        )
    }, [search])
    console.log("FILTERED", filteredProducts)
    return (
        <>
            <div className="search-div">
                <input type="text" placeholder="Search by name" onChange={(e) => setSearch(e.target.value)} className='product-search' />
            </div>
            <div>
                {search.length >= 1 && filteredProducts.map(product => (
                    <SingleSearchItem product={product}/>
                ))}
            </div>
        </>
    )
}
// export default Search;
//     // console.log(products)
    
//     return (
//         <div>
//             <input placeholder='Search here!'/>
//         </div>
//     )
// }

export default Search;