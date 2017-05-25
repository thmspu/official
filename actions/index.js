let id = 0;
export function addTodo(todo){
  return {
    type: 'AddTodo',
    id: id++,
    todo  
  }
}

