import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Redux = () => {
    let dispatch = useDispatch();
    const increase = () => {
        dispatch({ type: 'increase' })
    }
    const decrease = () => {
        dispatch({ type: 'decrease' })
    }
    const counter = useSelector((state) => state.value)
    return (
        <div className="counter">
            <h1 className="text">{counter}</h1>
            <div className="btn py-6">
                <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded-full" onClick={increase}>+</button>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full" onClick={decrease}>-</button>
            </div>
        </div>
    )
}

export default Redux
