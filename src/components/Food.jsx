import React, { useState } from 'react'
import { data } from '../data/data.js'


const Food = () => {

    const [foods, setFoods] = useState(data);

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }

    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12'>

            <h1 className='text-orange-600 font-bold text-center text-4xl'>Top Rated Menu Items</h1>

            <div className='flex flex-col lg:flex-row justify-between'>
                <div >
                    <p className='font-bold text-gray-700'>Filter Type</p>

                    <button onClick={() => setFoods(data)} className='m-1 border-orange-600 hover:bg-orange-600 bg-white text-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')} className='m-1 border-orange-600 hover:bg-orange-600 bg-white text-orange-600 hover:text-white'>Burger</button>
                    <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 hover:bg-orange-600 bg-white text-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='m-1 border-orange-600 hover:bg-orange-600 bg-white text-orange-600 hover:text-white'>Salad</button>
                    <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 hover:bg-orange-600 bg-white text-orange-600 hover:text-white'>Chips</button>

                </div>

                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>

                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => filterPrice('$')} className='m-1 border-orange-600 hover:bg-orange-600 bg-white text-orange-600 hover:text-white'>$</button>
                        <button onClick={() => filterPrice('$$')} className='m-1 border-orange-600 hover:bg-orange-600 bg-white text-orange-600 hover:text-white'>$$</button>
                        <button onClick={() => filterPrice('$$$')} className='m-1 border-orange-600 hover:bg-orange-600 bg-white text-orange-600 hover:text-white'>$$$</button>
                        <button onClick={() => filterPrice('$$$$')} className='m-1 border-orange-600 hover:bg-orange-600 bg-white text-orange-600 hover:text-white'>$$$$</button>
                    </div>

                </div>
            </div>



            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (

                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 hover:duration-300'>
                        <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />

                        <div className='flex justify-between px-2 pt-4 pb-2'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-600 text-white rounded-full p-1'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Food;