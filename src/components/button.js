
export const Button = ({children, strip}) => {
    return (
        <button
            style={{
            ...(strip ? stripStyle : {})
            }}
        >
            { children }
        </button>
    )
}

const stripStyle = {
    background: 'none',
    outline: 'none',
    border: 'none'
}