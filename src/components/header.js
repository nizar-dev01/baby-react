import { Button } from './button'
export const header = () => {
    return (
        <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <h1>Task Tracker</h1>
            <Button>Click</Button>
        </header>
    )
}
