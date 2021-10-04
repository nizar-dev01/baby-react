import { createContext, useState } from "react";
import { ContextUser } from '@c/contextUser'
export const AppContext = createContext(null)

export const ContextBuilder = () => {
    const [name, setName] = useState('')
    return (
        <AppContext.Provider value={{name, setName }}>
            <ContextUser />
        </AppContext.Provider>
    )
}