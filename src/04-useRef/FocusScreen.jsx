import { useRef } from "react"

export const FocusScreen = () => {
  
    const inputRef = useRef();

    const selectFocus = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }
  
    return (
    <>  
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef }
            type="text" 
            placeholder="ingrese su nombre"    
            className="form-control"
        />

        <button className="btn btn-primary mt-2" onClick={ selectFocus }>set focus</button>
    </>
  )
}

