import React from 'react';

const NewTodo = ({todo, key}) => (
      <div>
        <li key={key}>{todo.text}</li>
      </div>
)

export default NewTodo
