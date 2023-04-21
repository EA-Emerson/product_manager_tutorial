import React, { Component, useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
const FilterableProductTable = () => {
const [search, setSearch] = useState(null)
    return ( 
        < >
        <div className="border-2 rounded-md p-2 m-4 max-w-fit">
            {/* <SearchBar search={search} setSearch={setSearch} /> */}
            <ProductTable search={search}/>
            {console.log(search)}
        </div>
    </>
     );
}
export default FilterableProductTable
