import { Button } from '@c/button'
import { useReducer, useEffect } from 'react'

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return { count: state.count + 1, bool: state.bool }
        case 'decrement':
            return { count: state.count - 1, bool: state.bool }
        case 'bool':
            return { count: state.count, bool: !state.bool}
        default:
            return state
        
    }
}

export const Header = () => {
    const [state, dispatch] = useReducer(reducer, { count: 1, bool: false })
    // Just trying the useEffect hook
    useEffect(() => {
        console.count('calling useEffect');
    },[state.bool])
    return (
        <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>

            <h1>Task Tracker : {state.count}</h1>
            <Button onClick={() => {
                dispatch('increment')
            }}>Increase</Button>
            <Button onClick={() => {
                dispatch('decrement')
                dispatch('bool')
            }}>Decrease</Button>
        </header>
    )
}
