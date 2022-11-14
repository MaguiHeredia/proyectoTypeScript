import React, { useState } from 'react';
import './App.css';
import {BasicExample} from './components/DropdownIcons';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

let id: number = 1

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false, id: id }]);
      id++
    }
  };

  const removeTodo: RemoveTodo = todoToRemove => {
    let updatedTodos: Array<Todo> = todos.filter(todo => todo.text != todoToRemove.text);
    setTodos(updatedTodos);
  }

  const editTodo: EditTodo= (todoToEdit, todo) => {
    // let todoToUpdateIndex: number = todos.findIndex(todo => todo.text == todoToEdit.text);
    // console.log('entrooo', todoToUpdateIndex);
     console.log(todoToEdit, 'todo to edit', todo)
     let result= todos.map(elem => {
       if(elem.id == todo.id){
         return { text: todoToEdit, complete: elem.complete, id: elem.id }
       }
       else {
         return elem
       }
     })
     setTodos(result)
  }
  console.log('todos', todos)

  return (
    <div className='todo-app'>
      <header>
        <div style={{ width: '100%', padding: '20px 0px'}}>
        <h1  style={{backgroundColor: 'white', fontSize:'30px', color: 'rgba(238, 156, 79, 1)', padding: '5px 10px', paddingLeft: '60px', width: '400px', fontWeight: '800', borderRadius: '0px 5px 5px 0px'}} >
        LISTA DE COMPRAS
        </h1>
        </div>
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
       <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '100%'}}>
        {/* <h3 style={{color: 'white',fontSize: '25px' }}>Agregar predeterminados</h3> */}
        <BasicExample addTodo={addTodo}></BasicExample>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleComplete={toggleComplete} onRemoveTodo={removeTodo} editTodo={editTodo}/>
        </div>
        </div>
      </header>
      {/* <div className="todo-app"> */}
      {/* </div> */}
    </div>
  );
};

export default App;
