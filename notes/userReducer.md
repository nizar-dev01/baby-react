## userReducer Hook
***useReducer*** hook will manage the state by dispatching events that can be defined in the ***reducer*** function.
### *Syntax*
```jsx
    import { useReducer } from 'react'
    // The reducer function that will get called each time the state is changed
    const reducer = (state, action) => {
        if(action === 'something'){
            return {data: 'something'}
        } else {
            return {data: 'anything'}
        }
    }


    export const Component = () => {
        // Defining the state
        const [state, dispatch] = useReducer(
            reducer,
            { data: 'something' }
        )
        // Changing the state by dispatching an action
        const handleClick = (e) => {
            e.preventDefault()
            const action = state.data === 'something' ?
                'anything' : 'something'
            dispatch(action)
        }
        return (
            // The component template
            <button onClick={handleClick}>
                { state.data }
            </button>
        )
    }
```