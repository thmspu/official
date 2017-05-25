import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Todos from '../containers/todos'
import AddTodo from '../containers/AddTodo'

let reactElement = document.getElementById('react')

const App = () => {
	
	return (
		<div>
		 <AddTodo/>
         <Todos />
         </div>
		)
    
}

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  reactElement
)
