const todo = (state={}, action) => {
	switch(action.type) {
		case 'AddTodo': return {
			id:action.id,
			text: action.todo
		} 
		default: return state
	}
}

const todos = (state=[{
	id:10,
	text:"initial"
}], action) => {
	switch(action.type) {
		case 'AddTodo': return [...state, todo({},action)]
		default: return state
	}
}

export default todos