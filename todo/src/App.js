import React, {useReducer} from 'react';
import TodoList from './Components/TodoComponents/TodoList';
import TodoForm from './Components/TodoComponents/TodoForm';
import './Components/TodoComponents/Todo.css';
import {initialState, reducer} from './reducers/reducer';
const App = () => {
   const [state, dispatch] = useReducer(reducer, initialState);
   console.log(state);
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
      
      const addTodo = task => {
          const newTodo = {
            task: task,
            id: Math.random(),
            completed: false
          }
          dispatch({
            type: "ADD_TODO", payload: newTodo
          });
        };
        const toggleCompleted = id => {
          dispatch({type: "COMPLETED_TODO", payload: id})
        };

      const clearCompleted = () => {
        dispatch({
            type: "CLEAR_COMPLETED_TODO"
          })
        }

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={addTodo}/>
        <TodoList state={state} toggleCompleted={toggleCompleted} clearCompleted={clearCompleted}/>
      </div>
    );
}

export default App;
