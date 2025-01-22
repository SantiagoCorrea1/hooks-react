// import { useEffect, useReducer } from "react"
// import { todoReducer } from "./todoReducer";
import { ListToDo } from "../components/ListToDo";
import { AddToDo } from "../components/AddToDo";
import { useToDo } from "../hooks/useToDo";



//funcion principal
export const TodoApp = () => {

    const {todos, handleDeleteToDo, handleNewToDo, handleToggleToDo, pendingToDo, toDoCount } = useToDo();

  return (
    <>
        <h1>TodoApp: { toDoCount } <small>- pendientes: { pendingToDo }</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <ListToDo 
                    todos={ todos } 
                    onDeleteToDo={ handleDeleteToDo }
                    onToggleToDo={ handleToggleToDo }
                />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <AddToDo onNewToDo={handleNewToDo} />
            </div>

        </div>

        
       
    </>
  )
}

