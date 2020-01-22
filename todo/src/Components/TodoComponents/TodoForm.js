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
    
    return (
      <form onSubmit= {handelSubmit} >
          <input type="text" name="item" value={state} onChange={handleChanges}/>
          <button> Add</button>
      </form>
    );
}

export default TodoForm;