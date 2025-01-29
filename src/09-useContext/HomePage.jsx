import { UserContext } from "./context/userContext";

export const HomePage = () => {

  const { user } = useContext( UserContext );
  

  return (
    <>
       <h1>HomePage</h1>

      <hr />



    </>
    
  )
}

