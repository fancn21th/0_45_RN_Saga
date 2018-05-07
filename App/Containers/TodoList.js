import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../Components/TodoList'

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

// const mapDispatchToProps = (dispatch) => ({
//     onToggleTodo(id){
//         dispatch(toggleTodo(id))
//     }
// })

export default connect(mapStateToProps, null)(TodoList)
