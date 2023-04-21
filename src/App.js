import './App.css';
import React, {useReducer, useState} from 'react';
import FilterableProductTable from './pages/FilterableProductTable';

// const reducer = useReducer
function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }
  
  return (
   <>
   <FilterableProductTable />
   {/* <button onClick={handleClick} className='text-5xl font-black'>Clicked {count} { count > 1 ? 'times' : 'time' }</button> */}
   </>
    
  );
}

export default App;
