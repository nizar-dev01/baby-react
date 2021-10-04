import { Button } from '@c/button'
import { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
        
    }
}

export const Header = () => {
    const [state, dispatch] = useReducer(reducer, { count: 1 })
    return (
        <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>

            <h1>Task Tracker : {state.count}</h1>
            <Button onClick={() => {
                console.log('asdf')
                dispatch('increment')
            }}>Increase</Button>
            <Button onClick={() => {
                console.log('a;lakl')
                dispatch('decrement')
            }}>Decrease</Button>
        </header>
    )
}
