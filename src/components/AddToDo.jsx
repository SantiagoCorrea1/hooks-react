import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const AddToDo = ( {onNewToDo} ) => {

    const {description, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const onSubmit = ( event ) => {
        event.preventDefault();
        if (description.length < 1) return;

        const newToDo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewToDo(newToDo);
        onResetForm();
        
    }


  return (
    <form onSubmit={ onSubmit }>
        <input type="text" 
            placeholder="Tarea"
            className="form-control"
            name="description"
            value={ description }
            onChange={onInputChange}
        />
        <button 
            type="submit"
            className="btn btn-primary mt-2"
        >
            Agregar
        </button>
    </form>
  )
}

