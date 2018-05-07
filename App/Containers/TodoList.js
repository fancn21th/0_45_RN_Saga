import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from '../Components/TodoList'

class TodoListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchTodos } = this.props
    fetchTodos()
  }

  render() {
    const { todos } = this.props
    return (
      <TodoList
        todos={todos}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => ({
    type: 'FETCH_TODOS_REQUEST'
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
