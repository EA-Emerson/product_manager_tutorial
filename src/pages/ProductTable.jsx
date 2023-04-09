import {React, Component, useEffect, useState} from 'react'
const ProductTable = ({search}) => {
    const [searchPrice, setSearchPrice] = useState(null);
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
    // useEffect(() => {

    //     if (search && products) {
    //         const price = products.Fruits[search];
    //         setSearchPrice(price)
    //     }
    //     else {
    //         setSearchPrice(null)
    //     }
    // }, [search, products])
        return ( 
            <>
                <div className='border-2 border-red-600 rounded-md p-2 min-w-full mx-auto mt-4 pt-6'>
                {(search in products.Fruits) ? <div>
                    <h2 className='min-w-full border-2 border-yellow-500 rounded-md mx-auto p-2'>Fruits</h2>
                    <li>{search}: ${products.Fruits[search]}</li>
                </div> 
                : 
                (search in products.Vegetables) ? 
                    <div>
                        <h2 className='min-w-full border-2 border-yellow-500 rounded-md mx-auto p-2'>Fruits</h2>
                        <li>{search}: ${products.Vegetables[search]}</li>
                    </div>
                    : (
                    <div>
                        {Object.entries(products).map(([product, data]) => (
                    
                    <div key={product} className='mb-6'>

                        <h2 className='min-w-full border-2 border-yellow-500 rounded-md mx-auto p-2'>{product}</h2>
                        
                        <ul className='min-w-full border-2 border-green-500 rounded-md mx-auto p-2'>
                            {Object.entries(data).map(([key, value]) => (
                                <li key={key}>{key}: ${value}</li>
                             ))}
                        </ul>
                        
                    </div>
                ))}
                    </div>
                )}
              </div>
            </>
         );
    }
 
export default ProductTable;
