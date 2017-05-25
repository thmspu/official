import NewTodo from './newTodo';
import React from 'react'

const Todos = ({todos}) => {
 let res = "Nothing Yet....";
 console.log("ying gai geng xin");
 if(todos) {
   res = todos.map((todo, index) => {
      return (<li><NewTodo key={index} todo={todo}/></li>);
  });
}
  return (
  <div>
     <ul>
       {res}
     </ul>
  </div>
  )
}

export default Todos