import { createContext, useState } from "react";


export const AppContext = createContext()

const AppContextProvider = (props) => {


    const [auth, setauth] = useState(false);

    const value = {
        auth,
        setauth
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider