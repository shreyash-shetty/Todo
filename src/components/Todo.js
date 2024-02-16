import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import "./Todo.css"

function Todo() {
    
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  return (
  <>
  <div className='container'>
  <ul>
  {todos.map((todo) => (
    <li key = {todo.id}>
    {todo.text} 
    <button onClick={() => dispatch(removeTodo(todo.id))}><i className="fa-regular fa-trash-can"></i></button>
    </li>
    ))}
    </ul>
    </div>
</>

 
    )
}

export default Todo
