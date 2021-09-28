import { IndivTask } from './indivTask'
export const Tasks = ({ tasks }) => {
    return (
        <div style={{ padding: '20px' }}>
            {
                tasks.map((t, i) => (
                    <IndivTask task={t} key={i} onDelete={deleteTask} />
                ))
            }
        </div>
    )
}


const deleteTask = (task) => {
    console.log(task)
}