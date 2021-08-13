import React, { useState } from 'react'

const FunctionComponent = () => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }
    return (
        <div className='counter'>
            <h1 className="text">{count}</h1>
            <div className="btn py-6">
                <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded-full" onClick={increase}>+</button>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full" onClick={decrease}>-</button>
            </div>
        </div>
    )
}

export default FunctionComponent;
