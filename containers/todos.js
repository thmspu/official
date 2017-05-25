import { connect } from 'react-redux';
import React from 'react'
import Todos from '../components/todos';


const mapStateToProps = (state) => {
   return {
    todos: state.todos
  }
}

const Visibility = connect(mapStateToProps)(Todos);
export default Visibility