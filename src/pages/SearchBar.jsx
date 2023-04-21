import React, { useState, useEffect } from 'react';

const SearchBar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const categories = Object.keys(products);

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults(categories.map((category) => ({ category, products: products[category] })));
    } else {
      const filteredResults = categories
        .map((category) => {
          const filteredProducts = Object.keys(products[category])
            .filter((product) => product.toLowerCase().includes(searchTerm.toLowerCase()))
            .reduce((obj, key) => {
              obj[key] = products[category][key];
              return obj;
            }, {});
          return { category, products: filteredProducts };
        })
        .filter((result) => Object.keys(result.products).length > 0);
      setSearchResults(filteredResults);
    }
  }, [searchTerm, products]);

  const handleSearchTextChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col border-2 border-blue-600 rounded-md max-w-fit px-4 py-2">
      <input
        type="text"
        placeholder="search"
        className="border-2 p-1 border-gray-700 rounded-md mb-4"
        onChange={handleSearchTextChange}
        value={searchTerm}
      />
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <div key={result.category} className="mb-6">
            <h2 className="border-2 border-yellow-500 rounded-md mx-auto p-2 text-center">{result.category}</h2>
            <ul className="border-2 border-green-500 rounded-md mx-auto p-2">
              {Object.entries(result.products).map(([key, value]) => (
                <li key={key} className="flex justify-between mb-2">
                  <span className="font-bold">{key}</span>
                  <span>${value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p className="text-center">No matching products found</p>
      )}
    </div>
  );
};

export default SearchBar;
