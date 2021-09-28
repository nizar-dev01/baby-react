
import { Button } from './button'
import { FaTimes } from 'react-icons/fa'
export const IndivTask = ({ task, onDelete }) => {
    return (
        <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
            {task.title}
            <Button strip={true}>
                <FaTimes style={{ color: 'red' }} onClick={() => onDelete(task)}></FaTimes>
            </Button>
        </div>
    )
}
