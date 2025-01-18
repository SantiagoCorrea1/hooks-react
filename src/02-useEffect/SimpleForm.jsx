import { useEffect, useState } from "react"
import { Message } from "./message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState( {
        userName: 'santiago',
        email: 'prueba@email.com'
    } );

    const { userName, email } = formState;

    const onInputChange = ( { target }) => {
        const { name, value } = target;
        
        setFormState({
            ...formState,
            [ name ]: value
        });
    }


    useEffect(() => {
        
        return () => {
            
        };
    }, []);

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"   
            placeholder="username"
            name="userName"
            value={ userName }
            onChange={ onInputChange }
        />

        <input 
            type="email"
            className="form-control mt-2"   
            placeholder="example@email.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        {
            (userName === 'santiago2') && <Message />
        }
    </>
  )
}

