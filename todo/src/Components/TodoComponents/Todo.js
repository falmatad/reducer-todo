import React from 'react';
const Todo = props => {
    return (
      <div
        className={`item${props.item.completed ? ' completed' : ''}`}
        onClick={() => props.toggleCompleted(props.item.id)}
      >
        <h2>{props.item.task}</h2>
      </div>
    );
  };

export default Todo;