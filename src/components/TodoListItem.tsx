import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete, onRemoveTodo, editTodo }) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.text);

  const onDelete = () => {
    onRemoveTodo(todo);
  }

  const onEdit = () => {
    console.log('edit');
    setIsEditOn(!isEditOn)
  }

  const onTodoUpdate = (e: any) => {
    console.log('entree')
    let text = e.target.value;
    setInputText(text);
  }

  const dropdownOptions: Array<Option> = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "red",
    },
    {
      value: "Edit",
      onClick: onEdit,
      color: "blue",
    }
  ]
  return (
    <li className={todo.complete? "todo-row completed" : "todo-row"}>
      <label>
        {isEditOn ? 
        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
          <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
        style={{border: 'none !important', marginRight: '7px'}}
        />
          <input className="edit-input" type="text" value={inputText} onChange={(e) => onTodoUpdate(e)}/> 
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
            {todo.text !== inputText ? <button onClick={(e) => editTodo(inputText, todo)} className='edit-button'>
            <img style={{width: '18px', filter: 'invert(100%)'}} src='https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png'></img>
            </button> :
            <button onClick={(e) => editTodo(inputText, todo)} className='edit-button' disabled style={{backgroundColor: 'rgba(160, 153, 153, 1)'}}>
            <img style={{width: '18px', filter: 'invert(100%)'}} src='https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png'></img>
            </button>
            }
            
          </div>
        </div>
        : <div><input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
        style={{border: 'none !important', marginRight: '6px'}}
        />
        {todo.text}
        </div>}
      </label>
      <Dropdown
        options={dropdownOptions}

      />
    </li>
  )
}
