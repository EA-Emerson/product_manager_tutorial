import {React, Component, useEffect, useState} from 'react'
import SearchBar from './SearchBar';

const ProductTable = ({search}) => {
    const [searches, setSearch] = useState(null)
    const products = {
        Fruits: {
            Apple: 1,
            DragonFruit: 1,
            PassionFruit: 2,
            
        },
        Vegetables: {
            Spinach: 2,
            Pumpkin: 4,
            Peas: 1
        }
    }
    
        return ( 
            <>
            <SearchBar searches={searches} search={search} setSearches={setSearch} products={products}/>
            </>
         );
    }
 
export default ProductTable;
