import { connect } from 'react-redux';
import {addTodo} from '../actions/index';
import React from 'react'

let AddTodo = ({dispatch}) => {
    let input;

	return (
		<div>
		  <form onSubmit ={
		  	(e) => {
		  		console.log(input)
                 e.preventDefault()
		  		dispatch(addTodo(input))
		  	}}>
             <input onChange={(e) => {input = e.target.value}}/>
             <button type="submit">Confirm</button>
		  </form>
		</div>
		)
}

AddTodo =  connect()(AddTodo);
export default AddTodo