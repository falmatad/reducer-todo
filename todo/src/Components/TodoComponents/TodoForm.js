import React, {useState} from 'react';

const TodoForm = (props) => {
    const [state, setState] = useState('');

    const handleChanges = e => {
        e.preventDefault();
        setState(e.target.value)
    }
    const handelSubmit = e => {
        e.preventDefault();
        console.log("its working");
        props.addTodo(state);
        setState('');

    }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    return (
      <form onSubmit= {handelSubmit} >
          <input type="text" name="item" value={state} onChange={handleChanges}/>
          <button> Add</button>
      </form>
    );
}

export default TodoForm;