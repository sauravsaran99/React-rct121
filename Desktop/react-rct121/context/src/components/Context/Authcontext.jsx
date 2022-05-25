const { createContext, useState } = require("react");

export const Createauth = createContext();

export const Authcontextprovider = ({children}) => {
    const [auth, isAuth] = useState(false);
    const [token, isToken] = useState('')
    return (
        <Createauth.Provider value={[auth, token, isAuth, isToken]}>
            {children}
        </Createauth.Provider>
    )
}