import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../Store'
import TodoList from './TodoList'

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <TodoList />
      </Provider>
    )
  }
}


