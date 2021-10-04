
export const Button = ({children, strip, onClick}) => {
    return (
        <button
            style={{
            ...(strip ? stripStyle : {})
            }}
            onClick={onClick}
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