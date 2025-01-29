import { useContext } from "react"
import { UserContext } from "./context/userContext";

export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext );

  return (
    <>
      <h1>LoginPage</h1>

      <hr />

      <pre>
        {JSON.stringify(user?.name)}
      </pre>

      <button 
        className="btn btn-primary"
        onClick={ () => setUser({id:123, name: 'santiago'})}>
        Establecer usuario
      </button>
    </>
  )
}

