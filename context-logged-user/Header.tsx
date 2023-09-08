import { LoggedUserContext } from "@/contexts/LoggedUser"
import { useContext } from "react"

export const Header = () => {  
    const LoggedUserCtx = useContext(LoggedUserContext);
    
    const handleLogout = () => {
        LoggedUserCtx?.setName('');
    }

    return (
        <header>
            <h1 className="text-3xl">Título</h1>
            {LoggedUserCtx?.name &&
                <>
                    <p>User Logged: {LoggedUserCtx?.name}</p>
                    <button onClick={handleLogout}>Log Out</button>
                </>
            }
            {(!LoggedUserCtx || LoggedUserCtx?.name === '') &&
                <p>No User</p>
            }
        </header>
    )
}