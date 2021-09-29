import { IndivTask } from './indivTask'
import { useState } from 'react'
import InputMask from 'react-input-mask';

export const Tasks = ({ tasks, onDelete }) => {
    const [name, setName] = useState("");
    const bindName = e => setName(e.target.value)
    return (
        <div style={{ padding: '20px' }}>
            {
                tasks.map((t, i) => (
                    <IndivTask task={t} key={i} onDelete={onDelete} />
                ))
            }
            <InputMask mask='(+1) 999 999 9999' value={name} onInput={bindName} />
            <InputMask mask='(+1) 999 999 9999' value={name} onInput={bindName} />
        </div>
    )
}