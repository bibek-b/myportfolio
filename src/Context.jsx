import { createContext } from "react";
import Projects from "./Projects";
import Navbar from "./Components/Navbar/Navbar";

//taking each user id from projects array
const userId  = {
    id: Projects.map(project=>  project.id)
}

 //putting each user id in context-creating context
 export const UserContext = createContext(userId);

//creating provider component
 export const UserContextProvider = ({children}) => {
    return (
        <UserContext.Provider value={userId} >
            {children}
        </UserContext.Provider>
    )
 }

