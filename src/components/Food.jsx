import React, {useState} from 'react';
import {data} from '../Data/Data.js';


const Food = () =>{
        const [foods, setFoods] = useState(data);
        const filterType = (category) => {
            setFoods(
                data.filter((item) => {
                    return item.category === category;
                })
            );
        };

        const filterPrice = (price) =>{
            setFoods(
                data.filter((item) =>{
                    return item.price === price;
                })
            )
        }

        return ( 
            <div className='max-w-[1640px] m-auto px-4 py-12'>
                <h1 className='text-orange-600 font-bold text-4xl text-center'>
                    Top Rated Menu Items
                </h1>
                  <div className=' flex justify-between flex-wrap'>
                    <div>
                        <p className='font bold text-gray-700'>
                            Filter Type
                        </p>
                    <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                        ALL
                    </button>
                    <button  onClick={() => filterType('burger')}
                    className='m1 border-orange-600 text-orange-600 hover:text-white'>
                        Burger
                    </button>
                    <button  onClick={() => filterType('pizza')}
                    className='m1 border-orange-600 text-orange-600 hover:text-white'>
                        Pizza
                    </button>
                    <button  onClick={() => filterType('salad')}
                    className='m1 border-orange-600 text-orange-600 hover:text-white'>
                        Salads
                    </button>
                    <button  onClick={() => filterType('chicken')}
                    className='m1 border-orange-600 text-orange-600 hover:text-white'>
                        Chicken
                    </button>
                  </div>
                </div>
                <div>
                    <p className='fonr-bols text-gray-700'>
                        Filter Prize
                    </p>
                    <div className=' flex justify-between max-w-[390] w-full'>
                        <button onClick={() => filterPrice('$5')}
                        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
                                $5
                        </button>
                        <button onClick={() => filterPrice('$10')}className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >
                            $10
                        </button>
                        <button onClick={() => filterPrice('$15')}className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >
                            $15
                        </button>
                        <button onClick={() => filterPrice('$20')}className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >
                            $20
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                 {foods.map((item, index)=>(
                    <div key={index}
                    className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img 
                        src={item.image}
                        alt={item.name}
                        className='w-full h-[200px] objet-cover rounded-t-lg'/>
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white p-1 rounded-full'>
                                    {item.price}
                                </span>
                            </p>
                        </div>
                    </div>
                 ))}   
                </div>
            </div>
        )

}

export default Food;