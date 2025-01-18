import { useEffect } from "react"
// import { Message } from "./message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, userName, email, password, onResetForm } = useForm( {
        userName: '',
        email: '',
        password: ''
    } );

    //const { userName, email, password } = formState;


  return (
    <>
        <h1>Formulario con custom hook</h1>
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

        <input 
            type="password"
            className="form-control mt-2"   
            placeholder="contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />

        <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
        
    </>
  )
}

