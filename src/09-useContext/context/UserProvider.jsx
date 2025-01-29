import { useState } from "react"
import { UserContext } from "./userContext"

// const user = {
//     id:123,
//     name:'santiago'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();


  return (
//    <UserContext.Provider value={{ hola: 'mudo', user: user }}>
    <UserContext.Provider value={{ user, setUser }}>
        { children }
   </UserContext.Provider>
  )
}

