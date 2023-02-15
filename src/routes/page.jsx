import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../app/slice'

export default function Page() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            Page
            slice={count}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}