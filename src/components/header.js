import { Button } from './button'
import { useLocation } from 'react-router-dom'
export const Header = () => {
    const location = useLocation()
    return (
        <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <h1>Task Tracker : currently at {location.pathname}</h1>
            <Button>Click</Button>
        </header>
    )
}
