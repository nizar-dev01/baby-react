import { useContext } from "react"
import { AppContext } from "@c/contextBuilder"

export const ContextUser = () => {
    const { setName, name } = useContext(AppContext)
    return (
        <>
            <input type="text" onChange={(e) => {
                e.preventDefault()
                setName(e.target.value)
            }} />
            <h3>The name is: {name}</h3>
        </>
    )
}