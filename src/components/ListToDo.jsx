import { ListItem } from "./ListItem"


export const ListToDo = ( {todos = [], onDeleteToDo, onToggleToDo } ) => {
  return (
    <>
        <ul className="list-group">
            {
                todos.map( todo => (
                    <ListItem 
                      key={todo.id} 
                      todo={todo} 
                      onDeleteToDo={ onDeleteToDo }
                      onToggleToDo={ onToggleToDo }
                    />
                ))
            }
            
        </ul>
    </>
  )
}

