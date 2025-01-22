import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReduce/todoReducer";


const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}


export const useToDo = () => {

    //hook reducer
    const [todos , dispatch] = useReducer(todoReducer, [], init);

    //use efect para almacenar en el local storage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        
    }, [todos]);

     //fuction add new todo
    const handleNewToDo = (todo) => {
        
        const action = {
            type: '[TODO] Add ToDo',
            payload: todo
        }
        dispatch( action );
    }

    //fuction delete todo
    const handleDeleteToDo = (id) => {
        
        const action = {
            type: '[TODO] Remove ToDo',
            payload: id
        }
        dispatch( action );
    }

    //fuction toggle todo
    const handleToggleToDo = (id) => {
        
        const action = {
            type: '[TODO] Toggle ToDo',
            payload: id
        }
        dispatch( action );
    }


  return {
        todos,
        handleDeleteToDo,
        handleNewToDo,
        handleToggleToDo,
        toDoCount: todos.length,
        pendingToDo: todos.filter( todo => !todo.done ).length
  }
}

