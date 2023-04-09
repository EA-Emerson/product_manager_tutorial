import React, {useState} from 'react'   
const SearchBar = ({setSearch}) => {
    const [searcher, setSearcher] = useState('')
    const handleSearch = (event) => {
        setSearcher(event.target.value);
    }
    const handleClick = () => {
        setSearch(searcher)
    }
    
    return ( 
        <>
        <div className="flex flex-col border-2 border-blue-600 rounded-md max-w-fit px-4 py-2">
            <input type="text" placeholder="search" className="border-2 p-1 border-gray-700 rounded-md" onChange={handleSearch} value={searcher}/>
            <span className="flex"><input type="checkbox"/>Only show products in stock </span>
            <button className="rounded-md border-4 border-blue-600 px-3 py-1 max-w-fit self-center font-bold
            hover:bg-blue-600 hover:text-white" onClick={handleClick}>Search</button>    
        </div>
    </>
     );
}

export default SearchBar