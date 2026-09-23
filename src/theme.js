import { createContext , useState} from "react";

const themeContext = createContext();

function Provider ( { children } ) {
    const [theme , setTheme] = useState('drak')

    const handlerClick = () => {
        setTheme(theme === 'drak ' ? 'light' : 'drak')
    }

    const myoj = {
        theme, 
        handlerClick
    }

    return (
        <themeContext.Provider value={myoj}>
            {children}
        </themeContext.Provider>
    )
}


export { themeContext }
export default Provider